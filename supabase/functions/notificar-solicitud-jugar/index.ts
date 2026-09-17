// Supabase Edge Function: notificar-solicitud-jugar
// Envia un email quan algú omple el formulari "Juga amb nosaltres".
// Necessita el secret RESEND_API_KEY a Supabase.

// Això evita que VS Code / Supabase marqui error dient que "Deno" no existeix.
declare const Deno: {
  serve: (
    handler: (req: Request) => Response | Promise<Response>
  ) => void;
  env: {
    get: (key: string) => string | undefined;
  };
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Payload = {
  nom?: string;
  primer_cognom?: string;
  segon_cognom?: string;
  email?: string;
  telefon?: string;
  equip?: string;
  experiencia?: string;
  missatge?: string;
  [key: string]: string | undefined;
};

const escapeHtml = (value: unknown): string => {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

const field = (label: string, value: unknown): string => {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e7eee9;color:#50645a;font-weight:700;width:180px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e7eee9;color:#0b100d;">
        ${escapeHtml(value) || "-"}
      </td>
    </tr>
  `;
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({
        error: "Method not allowed",
      }),
      {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const toEmail =
      Deno.env.get("NOTIFICATION_TO") || "dover.studio.co@gmail.com";

    const fromEmail =
      Deno.env.get("NOTIFICATION_FROM") ||
      "Rugby INEF Barcelona <onboarding@resend.dev>";

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({
          error: "Falta configurar RESEND_API_KEY.",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const payload = (await req.json()) as Payload;

    const requiredFields = ["nom", "primer_cognom", "email", "equip"];

    const missing = requiredFields.filter((key: string) => {
      return !String(payload[key] || "").trim();
    });

    if (missing.length > 0) {
      return new Response(
        JSON.stringify({
          error: "Falten camps obligatoris.",
          missing,
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const fullName = [
      payload.nom,
      payload.primer_cognom,
      payload.segon_cognom,
    ]
      .filter(Boolean)
      .join(" ");

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;background:#f6f4ed;padding:28px;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dfe9e2;">
          <div style="background:#06381f;color:white;padding:24px 26px;">
            <p style="margin:0 0 8px;color:#a7d7b7;text-transform:uppercase;letter-spacing:.12em;font-size:12px;font-weight:800;">
              Rugby INEF Barcelona
            </p>
            <h1 style="margin:0;font-size:28px;line-height:1.05;">
              Nova sol·licitud per jugar
            </h1>
          </div>

          <div style="padding:22px 26px;">
            <p style="margin:0 0 18px;color:#34463b;line-height:1.55;">
              Una persona ha omplert el formulari <strong>Juga amb nosaltres</strong> de la web.
            </p>

            <table style="width:100%;border-collapse:collapse;background:#fbfdfb;border-radius:14px;overflow:hidden;">
              ${field("Nom", fullName)}
              ${field("Email", payload.email)}
              ${field("Telèfon", payload.telefon)}
              ${field("Equip", payload.equip)}
              ${field("Experiència", payload.experiencia)}
              ${field("Missatge", payload.missatge)}
            </table>
          </div>
        </div>
      </div>
    `;

    const emailText = [
      "Nova sol·licitud per jugar - Rugby INEF Barcelona",
      "",
      `Nom: ${fullName}`,
      `Email: ${payload.email || "-"}`,
      `Telèfon: ${payload.telefon || "-"}`,
      `Equip: ${payload.equip || "-"}`,
      `Experiència: ${payload.experiencia || "-"}`,
      `Missatge: ${payload.missatge || "-"}`,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Nova sol·licitud per jugar: ${fullName}`,
        html: emailHtml,
        text: emailText,
        reply_to: payload.email || undefined,
      }),
    });

    const result = await resendResponse.json().catch(() => {
      return {};
    });

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({
          error: "Resend error",
          details: result,
        }),
        {
          status: 502,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      ); 
    }

    return new Response(
      JSON.stringify({
        ok: true,
        result,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({
        error: getErrorMessage(error),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
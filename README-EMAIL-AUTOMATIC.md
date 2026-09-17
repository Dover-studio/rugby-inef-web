# Email automàtic del formulari “Juga amb nosaltres”

Aquesta versió afegeix un avís per email quan algú envia el formulari.

## Destinatari actual

```text
dover.studio.co@gmail.com
```

## Com funciona

1. La web crida directament una Supabase Edge Function:
   `notificar-solicitud-jugar`
2. La funció envia un email amb Resend.
3. La sol·licitud ja NO es guarda a cap taula de Supabase, només arriba per email.
4. La clau privada de Resend no està mai dins del codi públic de la web.

## Fitxers afegits

```text
supabase/functions/notificar-solicitud-jugar/index.ts
```

## Secrets necessaris a Supabase

A Supabase has d’afegir aquest secret:

```text
RESEND_API_KEY=la_teva_clau_de_resend
```

Opcionalment també pots afegir:

```text
NOTIFICATION_TO=dover.studio.co@gmail.com
NOTIFICATION_FROM=Rugby INEF Barcelona <email-del-domini-verificat>
```

Si no poses `NOTIFICATION_TO`, ja envia per defecte a:

```text
dover.studio.co@gmail.com
```

## Important sobre el remitent

Per enviar emails reals amb Resend, el millor és verificar un domini del club i fer servir un remitent del tipus:

```text
Rugby INEF Barcelona <web@rugbyinefbcn.cat>
```

Per proves, la funció porta:

```text
Rugby INEF Barcelona <onboarding@resend.dev>
```

però en producció és millor canviar-ho per un correu verificat.

## Com desplegar la funció

Opció recomanada: Supabase Dashboard.

1. Ves a Supabase.
2. Entra al projecte.
3. Ves a Edge Functions.
4. Crea una funció nova amb el nom:

```text
notificar-solicitud-jugar
```

5. Copia el contingut del fitxer:

```text
supabase/functions/notificar-solicitud-jugar/index.ts
```

6. Desa i desplega.
7. Afegeix el secret `RESEND_API_KEY`.
8. Prova el formulari de `juga-amb-nosaltres.html`.

## Nota

Si la funció encara no està desplegada o falla, el formulari mostrarà un error i NO quedarà cap còpia de la sol·licitud enlloc (ni a Supabase ni per email), perquè ja no es guarda a la base de dades.

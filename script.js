/* RUGBY INEF BARCELONA · JS REDISSENY */
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-main-nav]');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const tabButtons = document.querySelectorAll('[data-match-tab]');
  const panels = document.querySelectorAll('[data-match-panel]');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.matchTab;

      tabButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.matchPanel === target;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    });
  });


  const classificationButtons = document.querySelectorAll('[data-classification-tab]');
  const classificationPanels = document.querySelectorAll('[data-classification-panel]');

  classificationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.classificationTab;

      classificationButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      classificationPanels.forEach((panel) => {
        const isActive = panel.dataset.classificationPanel === target;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    });
  });

  const calendarGrid = document.querySelector('[data-calendar-grid]');
  const calendarTitle = document.querySelector('[data-calendar-title]');
  const prevButton = document.querySelector('[data-calendar-prev]');
  const nextButton = document.querySelector('[data-calendar-next]');
  const selectedTitle = document.querySelector('[data-selected-day-title]');
  const selectedSubtitle = document.querySelector('[data-selected-day-subtitle]');
  const eventsList = document.querySelector('[data-events-list]');

  if (calendarGrid && calendarTitle && prevButton && nextButton && selectedTitle && selectedSubtitle && eventsList) {
    const monthNames = [
      'gener', 'febrer', 'març', 'abril', 'maig', 'juny',
      'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'
    ];

    const eventTypeLabels = {
      masculi: 'Masculí',
      femeni: 'Femení',
      match: 'Partit',
      training: 'Entrenament',
      club: 'Club'
    };

    const teamCrests = {
      'CR INEF BCN': { src: 'escuts_equips/inef_bcn.png', className: 'rib-crest--inef' },
      'COQUES/INEF BCN': { src: 'escuts_equips/inef_bcn.png', className: 'rib-crest--inef' },
      'CR SPARTANS': { src: 'escuts_equips/cr_spartans.png', className: 'rib-crest--spartans' },
      'GEIEG': { src: 'escuts_equips/geieg.png', className: 'rib-crest--geieg' },
      'RC BADALONA': { src: 'escuts_equips/rc_badalona.png', className: 'rib-crest--badalona' },
      'VPC ANDORRA B': { src: 'escuts_equips/vpc_andorra_b.png', className: 'rib-crest--andorra' },
      'RC SENGLARS': { src: 'escuts_equips/rc_senglars.png', className: 'rib-crest--senglars' },
      'CR SANT CUGAT XV': { src: 'escuts_equips/cr_sant_cugat_xv.png', className: 'rib-crest--sant-cugat-xv' },
      'RC CORNELLÀ': { src: 'escuts_equips/rc_cornella.png', className: 'rib-crest--cornella' },
      'GÒTICS RC': { src: 'escuts_equips/gotics_rc.png', className: 'rib-crest--gotics' },
      'QUÍMIC ER/UES B': { src: 'escuts_equips/quimic_er_ues_b.png', className: 'rib-crest--quimic' },
      'VALKINYOLES': { src: 'escuts_equips/valkinyoles.png', className: 'rib-crest--valkinyoles' },
      'BUC B/SENGLARS': { src: 'escuts_equips/buc_b_senglars.png', className: 'rib-crest--buc' },
      'CR SANT CUGAT B': { src: 'escuts_equips/cr_sant_cugat_b.png', className: 'rib-crest--sant-cugat' },
      'CR TARRAGONA/SEL VNG': { src: 'escuts_equips/cr_tarragona_sel_vng.png', className: 'rib-crest--tarragona' }
    };

    const splitMatchTitle = (title) => {
      const parts = title.split(' vs ');
      return {
        home: parts[0] ? parts[0].trim() : title,
        away: parts[1] ? parts[1].trim() : ''
      };
    };

    const extractResult = (description) => {
      const resultMatch = description.match(/Resultat:\s*([^·]+)/);
      return resultMatch ? resultMatch[1].trim() : '';
    };

    const cleanEventMeta = (description) => {
      return description
        .split('·')
        .map((part) => part.trim())
        .filter((part) => part && !part.toLowerCase().startsWith('resultat'))
        .join(' · ');
    };

    const renderTeamCrest = (teamName) => {
      const crest = teamCrests[teamName];
      if (!crest) {
        return `
          <span class="rib-calendar-event-team__fallback" aria-hidden="true">${teamName.slice(0, 2)}</span>
        `;
      }

      return `
        <img class="rib-calendar-event-team__crest ${crest.className}" src="${crest.src}" alt="Escut ${teamName}" loading="lazy">
      `;
    };

    // EDITA AQUÍ ELS ESDEVENIMENTS DEL CALENDARI
    // Format de data: YYYY-MM-DD
    // Tipus:
    // - masculi: punt verd
    // - femeni: punt verd fosc
    const calendarEvents = {
      '2025-10-12': [
        {
          type: 'masculi',
          time: '13:30 h',
          title: 'CR INEF BCN vs CR SPARTANS',
          description: 'Equip masculí · Jornada 1 · Resultat: 32 - 26'
        }
      ],
      '2025-10-18': [
        {
          type: 'masculi',
          time: '16:30 h',
          title: 'GEIEG vs CR INEF BCN',
          description: 'Equip masculí · Jornada 2 · Resultat: 18 - 31'
        }
      ],
      '2025-10-26': [
        {
          type: 'masculi',
          time: '13:15 h',
          title: 'CR INEF BCN vs RC BADALONA',
          description: 'Equip masculí · Jornada 3 · Resultat: 46 - 14'
        }
      ],
      '2025-11-08': [
        {
          type: 'femeni',
          time: '18:00 h',
          title: 'GÒTICS RC vs COQUES/INEF BCN',
          description: 'Equip femení · Jornada 1 · Resultat: 17 - 19'
        }
      ],
      '2025-11-16': [
        {
          type: 'masculi',
          time: '14:00 h',
          title: 'RC SENGLARS vs CR INEF BCN',
          description: 'Equip masculí · Jornada 5 · Resultat: 17 - 34'
        }
      ],
      '2025-11-23': [
        {
          type: 'masculi',
          time: '12:30 h',
          title: 'CR INEF BCN vs CR SANT CUGAT XV',
          description: 'Equip masculí · Jornada 6 · Resultat: 23 - 20'
        }
      ],
      '2025-11-29': [
        {
          type: 'masculi',
          time: '17:00 h',
          title: 'VPC ANDORRA B vs CR INEF BCN',
          description: 'Equip masculí · Jornada 4 · Resultat: 28 - 21'
        },
        {
          type: 'femeni',
          time: '20:15 h',
          title: 'COQUES/INEF BCN vs QUÍMIC ER/UES B',
          description: 'Equip femení · Jornada 3 · Resultat: 31 - 12'
        }
      ],
      '2025-12-13': [
        {
          type: 'femeni',
          time: '15:00 h',
          title: 'VALKINYOLES vs COQUES/INEF BCN',
          description: 'Equip femení · Jornada 4 · Resultat: 57 - 0'
        }
      ],
      '2025-12-14': [
        {
          type: 'masculi',
          time: '12:00 h',
          title: 'CR INEF BCN vs RC CORNELLÀ',
          description: 'Equip masculí · Jornada 7 · Resultat: 12 - 30'
        }
      ],
      '2026-01-17': [
        {
          type: 'masculi',
          time: '19:30 h',
          title: 'CR SPARTANS vs CR INEF BCN',
          description: 'Equip masculí · Jornada 8 · Resultat: 10 - 30'
        },
        {
          type: 'femeni',
          time: '18:45 h',
          title: 'COQUES/INEF BCN vs BUC B/SENGLARS',
          description: 'Equip femení · Jornada 5 · Resultat: 54 - 0'
        }
      ],
      '2026-01-24': [
        {
          type: 'masculi',
          time: '15:00 h',
          title: 'CR INEF BCN vs GEIEG',
          description: 'Equip masculí · Jornada 9 · Resultat: 31 - 8'
        },
        {
          type: 'femeni',
          time: '14:00 h',
          title: 'CR SANT CUGAT B vs COQUES/INEF BCN',
          description: 'Equip femení · Jornada 6 · Resultat: 20 - 10'
        }
      ],
      '2026-02-01': [
        {
          type: 'masculi',
          time: '12:00 h',
          title: 'RC BADALONA vs CR INEF BCN',
          description: 'Equip masculí · Jornada 10 · Resultat: 19 - 22'
        }
      ],
      '2026-02-07': [
        {
          type: 'femeni',
          time: '20:15 h',
          title: 'COQUES/INEF BCN vs CR TARRAGONA/SEL VNG',
          description: 'Equip femení · Jornada 7 · Resultat: 0 - 22'
        }
      ],
      '2026-02-14': [
        {
          type: 'femeni',
          time: '20:15 h',
          title: 'COQUES/INEF BCN vs GÒTICS RC',
          description: 'Equip femení · Jornada 8 · Resultat: 24 - 20'
        }
      ],
      '2026-02-15': [
        {
          type: 'masculi',
          time: '14:15 h',
          title: 'CR INEF BCN vs VPC ANDORRA B',
          description: 'Equip masculí · Jornada 11 · Resultat: 29 - 42'
        }
      ],
      '2026-02-22': [
        {
          type: 'masculi',
          time: '14:15 h',
          title: 'CR INEF BCN vs RC SENGLARS',
          description: 'Equip masculí · Jornada 12 · Resultat: 43 - 7'
        }
      ],
      '2026-02-28': [
        {
          type: 'femeni',
          time: '18:00 h',
          title: 'COQUES/INEF BCN vs CR SANT CUGAT B',
          description: 'Equip femení · Jornada 13 · Resultat: 22 - 41'
        }
      ],
      '2026-03-07': [
        {
          type: 'femeni',
          time: '18:00 h',
          title: 'QUÍMIC ER/UES B vs COQUES/INEF BCN',
          description: 'Equip femení · Jornada 10 · Resultat: 17 - 10'
        }
      ],
      '2026-03-14': [
        {
          type: 'masculi',
          time: '18:15 h',
          title: 'CR SANT CUGAT XV vs CR INEF BCN',
          description: 'Equip masculí · Jornada 13 · Resultat: 33 - 0'
        }
      ],
      '2026-03-21': [
        {
          type: 'masculi',
          time: '16:00 h',
          title: 'RC CORNELLÀ vs CR INEF BCN',
          description: 'Equip masculí · Jornada 14 · Resultat: 30 - 18'
        },
        {
          type: 'femeni',
          time: '15:00 h',
          title: 'BUC B/SENGLARS vs COQUES/INEF BCN',
          description: 'Equip femení · Jornada 12 · Resultat: 40 - 7'
        }
      ],
      '2026-03-29': [
        {
          type: 'femeni',
          time: '13:00 h',
          title: 'COQUES/INEF BCN vs VALKINYOLES',
          description: 'Equip femení · Jornada 11 · Resultat: 17 - 27'
        }
      ],
      '2026-04-11': [
        {
          type: 'masculi',
          time: '16:30 h',
          title: 'GEIEG vs CR INEF BCN',
          description: 'Equip masculí · Semifinal · Resultat: 22 - 55'
        }
      ],
      '2026-04-18': [
        {
          type: 'masculi',
          time: '15:00 h',
          title: 'CR SANT CUGAT XV vs CR INEF BCN',
          description: 'Equip masculí · Final · Resultat: 32 - 17'
        },
        {
          type: 'femeni',
          time: '16:00 h',
          title: 'CR TARRAGONA/SEL VNG vs COQUES/INEF BCN',
          description: 'Equip femení · Jornada 14 · Resultat: 46 - 12'
        }
      ]
    };

    const today = new Date();
    let currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
    let selectedDateKey = null;

    const toDateKey = (year, monthIndex, day) => {
      const month = String(monthIndex + 1).padStart(2, '0');
      const date = String(day).padStart(2, '0');
      return `${year}-${month}-${date}`;
    };

    const formatLongDate = (year, monthIndex, day) => {
      return `${day} de ${monthNames[monthIndex]} de ${year}`;
    };

    const renderEvents = (dateKey, year, monthIndex, day) => {
      const events = calendarEvents[dateKey] || [];
      selectedTitle.textContent = formatLongDate(year, monthIndex, day);
      selectedSubtitle.textContent = events.length
        ? `${events.length} esdeveniment${events.length === 1 ? '' : 's'} programat${events.length === 1 ? '' : 's'}.`
        : 'No hi ha esdeveniments programats per aquest dia.';

      if (!events.length) {
        eventsList.innerHTML = `
          <article class="rib-calendar-empty">
            <strong>Sense esdeveniments</strong>
            <span>Aquest dia no té cap partit o activitat programada.</span>
          </article>
        `;
        return;
      }

      eventsList.innerHTML = events.map((event) => {
        const isTeamMatch = event.type === 'masculi' || event.type === 'femeni';
        const teams = splitMatchTitle(event.title);
        const result = extractResult(event.description);
        const meta = cleanEventMeta(event.description);

        if (isTeamMatch) {
          return `
            <article class="rib-calendar-event rib-calendar-event--${event.type} rib-calendar-event--matchup">
              <div class="rib-calendar-event__top">
                <span class="rib-calendar-event__type">${eventTypeLabels[event.type] || 'Partit'}</span>
                <span class="rib-calendar-event__time">${event.time}</span>
              </div>

              <div class="rib-calendar-event-matchup">
                <div class="rib-calendar-event-team">
                  ${renderTeamCrest(teams.home)}
                  <strong>${teams.home}</strong>
                </div>

                <div class="rib-calendar-event-score">
                  <span>VS</span>
                  ${result ? `<strong>${result}</strong>` : ''}
                </div>

                <div class="rib-calendar-event-team">
                  ${renderTeamCrest(teams.away)}
                  <strong>${teams.away}</strong>
                </div>
              </div>

              ${meta ? `<p class="rib-calendar-event__meta">${meta}</p>` : ''}
            </article>
          `;
        }

        return `
          <article class="rib-calendar-event rib-calendar-event--${event.type}">
            <div class="rib-calendar-event__top">
              <span class="rib-calendar-event__type">${eventTypeLabels[event.type] || 'Event'}</span>
              <span class="rib-calendar-event__time">${event.time}</span>
            </div>
            <h4>${event.title}</h4>
            <p>${event.description}</p>
          </article>
        `;
      }).join('');
    };

    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startOffset = (firstDay.getDay() + 6) % 7;

      calendarTitle.textContent = `${monthNames[month]} ${year}`;
      calendarGrid.innerHTML = '';

      for (let i = 0; i < startOffset; i += 1) {
        const emptyCell = document.createElement('button');
        emptyCell.type = 'button';
        emptyCell.className = 'rib-calendar-day is-muted';
        emptyCell.tabIndex = -1;
        emptyCell.setAttribute('aria-hidden', 'true');
        calendarGrid.appendChild(emptyCell);
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const dateKey = toDateKey(year, month, day);
        const dayButton = document.createElement('button');
        dayButton.type = 'button';
        dayButton.className = 'rib-calendar-day';
        dayButton.dataset.date = dateKey;
        dayButton.setAttribute('aria-label', formatLongDate(year, month, day));

        if (
          today.getFullYear() === year &&
          today.getMonth() === month &&
          today.getDate() === day
        ) {
          dayButton.classList.add('is-today');
        }

        if (selectedDateKey === dateKey) {
          dayButton.classList.add('is-selected');
        }

        const events = calendarEvents[dateKey] || [];
        const dots = events.slice(0, 3).map((event) => `<span class="rib-calendar-dot rib-calendar-dot--${event.type}"></span>`).join('');

        dayButton.innerHTML = `
          <span class="rib-calendar-day__number">${day}</span>
          ${events.length ? `<span class="rib-calendar-day__dots">${dots}</span>` : ''}
        `;

        dayButton.addEventListener('click', () => {
          selectedDateKey = dateKey;
          renderEvents(dateKey, year, month, day);
          renderCalendar();
        });

        calendarGrid.appendChild(dayButton);
      }
    };

    prevButton.addEventListener('click', () => {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      selectedDateKey = null;
      selectedTitle.textContent = 'Selecciona un dia';
      selectedSubtitle.textContent = 'Tria una data del calendari per veure què hi passa.';
      eventsList.innerHTML = `
        <article class="rib-calendar-empty">
          <strong>Cap dia seleccionat</strong>
          <span>Quan cliquis un dia, aquí apareixeran els partits o activitats programades.</span>
        </article>
      `;
      renderCalendar();
    });

    nextButton.addEventListener('click', () => {
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      selectedDateKey = null;
      selectedTitle.textContent = 'Selecciona un dia';
      selectedSubtitle.textContent = 'Tria una data del calendari per veure què hi passa.';
      eventsList.innerHTML = `
        <article class="rib-calendar-empty">
          <strong>Cap dia seleccionat</strong>
          <span>Quan cliquis un dia, aquí apareixeran els partits o activitats programades.</span>
        </article>
      `;
      renderCalendar();
    });

    renderCalendar();
  }

});



/* FORMULARI JUGA AMB NOSALTRES -> EMAIL DIRECTE (Web3Forms, sense Supabase) */
const RIB_SUPABASE_URL = "https://eadgxwqcodaqxszzlbiu.supabase.co";
const RIB_SUPABASE_KEY = "sb_publishable_blBVTCPuSAb_mNJ4EgpIEw_OjQOVERK";

// Web3Forms: el correu de destí NO està aquí al codi, es configura al
// panell de web3forms.com per a aquesta Access Key.
const RIB_WEB3FORMS_ACCESS_KEY = "7426113e-98e4-4118-9cea-5d78c1cc6ab7";
const RIB_WEB3FORMS_URL = "https://api.web3forms.com/submit";

const ribNotifyJoinRequest = async (payload) => {
  const response = await fetch(RIB_WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      access_key: RIB_WEB3FORMS_ACCESS_KEY,
      subject: `Nova sol·licitud per jugar: ${payload.nom} ${payload.primer_cognom}`,
      from_name: "Web Rugby INEF Barcelona",
      Nom: payload.nom,
      "Primer cognom": payload.primer_cognom,
      "Segon cognom": payload.segon_cognom,
      Email: payload.email,
      Telefon: payload.telefon,
      Equip: payload.equip,
      Experiencia: payload.experiencia,
      Missatge: payload.missatge,
      replyto: payload.email
    })
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "No s'ha pogut enviar la notificació per email.");
  }

  return result;
};


const ribJoinForm = document.querySelector("#ribJoinForm");

if (ribJoinForm) {
  const statusEl = document.querySelector("#ribFormStatus");
  const submitBtn = document.querySelector("#ribJoinSubmit");

  const setStatus = (message, type = "") => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `rib-form-status ${type ? `rib-form-status--${type}` : ""}`;
  };

  ribJoinForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(ribJoinForm);

    const getField = (...names) => {
      for (const name of names) {
        const value = formData.get(name);
        if (value !== null && String(value).trim() !== "") {
          return String(value).trim();
        }
      }
      return "";
    };

    const payload = {
      nom: getField("Nom", "nom"),
      primer_cognom: getField("Primer cognom", "primer_cognom"),
      segon_cognom: getField("Segon cognom", "segon_cognom"),
      email: getField("Email", "email"),
      telefon: getField("Telefon", "Telèfon", "Teléfono", "telefon"),
      equip: getField("Equip", "Equip amb què vols provar", "equip"),
      experiencia: getField("Experiencia", "Experiència", "Has jugat abans a rugby?", "experiencia"),
      missatge: getField("Missatge", "missatge")
    };

    if (!payload.nom || !payload.primer_cognom || !payload.email || !payload.equip) {
      setStatus("Revisa els camps obligatoris abans d'enviar el formulari.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("Introdueix un correu electrònic vàlid.", "error");
      return;
    }

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Enviant...";
      }

      setStatus("Enviant formulari...", "loading");

      await ribNotifyJoinRequest(payload);

      ribJoinForm.reset();
      setStatus("Formulari enviat correctament. Ens posarem en contacte amb tu aviat.", "success");
    } catch (error) {
      console.error("Error enviant formulari:", error);
      setStatus("No s'ha pogut enviar el formulari. Torna-ho a provar o escriu-nos per correu.", "error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar formulari";
      }
    }
  });
}



/* ZONA SOCIS -> CONSULTA PERFIL SUPABASE */
const ribSocisAccessForm = document.querySelector("#ribSocisAccessForm");

if (ribSocisAccessForm) {
  const statusEl = document.querySelector("#ribSocisStatus");
  const submitBtn = document.querySelector("#ribSocisSubmit");
  const profileEl = document.querySelector("#ribSociProfile");

  const setSocisStatus = (message, type = "") => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = `rib-form-status ${type ? `rib-form-status--${type}` : ""}`;
  };

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value || "-";
  };

  ribSocisAccessForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(ribSocisAccessForm);
    const email = String(formData.get("email_soci") || "").trim();
    const numeroSoci = String(formData.get("numero_soci") || "").trim();

    if (!email || !numeroSoci) {
      setSocisStatus("Introdueix l'email i el número de soci/a.", "error");
      return;
    }

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Consultant...";
      }

      if (profileEl) profileEl.hidden = true;
      setSocisStatus("Consultant dades del soci/a...", "loading");

      const response = await fetch(`${RIB_SUPABASE_URL}/rest/v1/rpc/consultar_soci`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": RIB_SUPABASE_KEY,
          "Authorization": `Bearer ${RIB_SUPABASE_KEY}`
        },
        body: JSON.stringify({
          p_email: email,
          p_numero_soci: numeroSoci
        })
      });

      if (!response.ok) throw new Error(await response.text());

      const data = await response.json();
      const soci = Array.isArray(data) ? data[0] : data;

      if (!soci) {
        setSocisStatus("No hem trobat cap soci/a amb aquestes dades.", "error");
        return;
      }

      setText("#ribSociName", `${soci.nom || ""} ${soci.cognoms || ""}`.trim());
      setText("#ribSociNumber", soci.numero_soci);
      setText("#ribSociEmail", soci.email);
      setText("#ribSociPhone", soci.telefon);
      setText("#ribSociStatusValue", soci.estat_soci);
      setText("#ribSociQuota", soci.estat_quota);
      setText("#ribSociDate", soci.data_alta);
      setText("#ribSociShirt", soci.samarreta_entregada ? "Entregada" : "Pendent / segons campanya");

      if (profileEl) profileEl.hidden = false;
      setSocisStatus("Perfil carregat correctament.", "success");
    } catch (error) {
      console.error("Error consultant soci/a:", error);
      setSocisStatus("No s'ha pogut consultar el perfil. Revisa les dades o prova-ho més tard.", "error");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Consultar perfil";
      }
    }
  });
}

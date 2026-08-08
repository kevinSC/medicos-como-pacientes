// Presentation Data for 6 Key Moments
const slidesData = [
  {
    id: 1,
    timeRange: "00:23 - 01:30",
    startSeconds: 23,
    endSeconds: 90,
    headline: "“Cuando más aprendí fue cuando me ascendieron a paciente”",
    speaker: "Jolien Plantinga & Gitte Boumeester",
    speakerRole: "Médico General & Residente de Psiquiatría",
    tag: "Momento 1 • La Ironía del Sanador",
    impact: "Muestra la vulnerabilidad absoluta de quienes cuidan la salud. Médicas jóvenes y activas de repente quedan 100% incapacitadas para trabajar y valerse por sí mismas. Rompe la barrera del 'a mí no me va a pasar'.",
    transcriptES: `[00:23] “Cuando más aprendí fue cuando me ascendieron a paciente”
- Jolien Plantinga, médico general

[00:34] Por favor preséntese y diga su especialidad en medicina.
[00:40] Sí, soy Gitte Boumeester. Cumpliré 45 en octubre.
[00:45] Era residente de psiquiatría hasta mi infección por covid. Lo que significa médico en formación.
[00:53] Me faltaba aún un año para convertirme en psiquiatra. Pero ahora estoy incapacitada al cien por cien para trabajar.
[01:03] Soy Laura, 38 años. Obtuve un doctorado en nefrología.
[01:16] Mi nombre es Jolien Plantinga. Tengo 49 años y era médico general. Una médico de cabecera que ya no practica.`,
    transcriptEN: `[00:23] “I learned the most when I was promoted to a patient”
- Jolien Plantinga, general practitioner

[00:34] Please introduce yourself and tell me what kind of doctor you are.
[00:40] Yes, I am Gitte Boumeester. I'll be 45 in October.
[00:45] I was a psychiatry resident until my COVID infection.
[00:53] I had another year, and then I would have been a psychiatrist. But now I am 100% unfit for work.
[01:03] I'm Laura. I am 38 years old and I did get a PhD in nephrology.
[01:16] Well, my name is Jolien Plantinga. I am 49 years old and I was a general practitioner. A GP who doesn't practice.`
  },
  {
    id: 2,
    timeRange: "04:28 - 06:10",
    startSeconds: 268,
    endSeconds: 370,
    headline: "“Mi única actividad del día es bajar de la cama de arriba a la cama de abajo”",
    speaker: "Jolien Plantinga & Peter Hulshof",
    speakerRole: "Médico General & Psiquiatra Infantil",
    tag: "Momento 2 • El Costo Invisible",
    impact: "Sensibiliza sobre el aislamiento y el gasto de energía extremo (Pacing). El público suele ver al enfermo en los pocos minutos que sale a la calle, pero desconoce las semanas que pasa postrado en una habitación oscura.",
    transcriptES: `[04:28] ¿Cómo es su día ahora como paciente?
[04:49] Mi día es ir de mi cama de arriba a la cama de abajo.
[05:44] Esa es en realidad mi única actividad del día.
[06:00] Vivía una vida normal y activa como médico de cabecera y madre. Ahora mi energía se agota en minutos.`,
    transcriptEN: `[04:28] What is your day like now as a patient?
[04:49] My day is going from my bed upstairs to the bed downstairs.
[05:44] That is actually my only activity of the day.
[06:00] I lived a normal active life as a GP and mother. Now my energy is depleted in minutes.`
  },
  {
    id: 3,
    timeRange: "12:31 - 14:30",
    startSeconds: 751,
    endSeconds: 870,
    headline: "“Yo misma como médico tenía prejuicios... no quería ser ese tipo de paciente”",
    speaker: "Jolien Plantinga",
    speakerRole: "Médico General",
    tag: "Momento 3 • El Prejuicio Médico Interno",
    impact: "Un acto de honestidad brutal: confiesa que antes de enfermarse miraba con recelo a los pacientes con enfermedades crónicas no visibles. Muestra la estigmatización médica vivida en primera persona.",
    transcriptES: `[12:31] Solo hace un año y medio me di cuenta de lo grave que era esto.
[12:45] No quería ser ese tipo de paciente. No quería ser un paciente con síndrome de fatiga crónica o encefalomielitis miálgica.
[13:00] Tenía los prejuicios que tienen muchos médicos... pensaba que eran pacientes que no querían mejorar.
[14:03] Hasta que lo viví y vi a enfermos graves encamados en cuartos oscuros. La realidad golpea de frente.`,
    transcriptEN: `[12:31] It was only a year and a half ago that I realized how serious this was.
[12:45] I didn't want to be that kind of patient. I didn't want to be a patient with chronic fatigue syndrome or ME.
[13:00] I had the prejudices that many doctors have... I thought they were patients who didn't want to get better.
[14:03] Until I experienced it and saw severely ill patients bedridden in dark rooms. Reality hits hard.`
  },
  {
    id: 4,
    timeRange: "16:52 - 18:00",
    startSeconds: 1012,
    endSeconds: 1080,
    headline: "“10 minutos en la consulta no ven cómo descarrila completamente tu vida al volver a casa”",
    speaker: "Laura & Jolien Plantinga",
    speakerRole: "Doctora en Nefrología & Médico General",
    tag: "Momento 4 • La Ceguera del Sistema",
    impact: "Expone la falencia del modelo de atención rápida: en 10 minutos el médico firma un análisis normal y despide al paciente, ignorando que al volver a su casa la vida de esa persona está completamente descarrilada.",
    transcriptES: `[16:52] No pueden vivir su antigua vida, solo pueden estar en la cama todo el día.
[16:59] Creo que realmente es de lo que los médicos no se dan cuenta, incluso cuando ven pacientes.
[17:03] Con solo verlos una vez 10 minutos en la consulta no ven cómo descarrila completamente la vida de alguien.
[17:16] Descarrila completamente tu vida. Y los tratamientos médicos estándar no están preparados para esto.`,
    transcriptEN: `[16:52] They simply cannot live their old life; they can only be in bed all day.
[16:59] I think that's really what doctors don't realize, even when they see patients.
[17:03] Just seeing them once for 10 minutes in the clinic, you don't see how someone's life is completely derailed.
[17:16] It completely derail your life. And standard medical treatments are not prepared for this.`
  },
  {
    id: 5,
    timeRange: "41:01 - 42:00",
    startSeconds: 2461,
    endSeconds: 2520,
    headline: "“Siempre me enorgullecí de ser médico, pero ver miles de enfermos ignorados me da vergüenza”",
    speaker: "Gitte Boumeester & Laura",
    speakerRole: "Residente de Psiquiatría & Nefróloga",
    tag: "Momento 5 • Vergüenza Profesional",
    impact: "Es el punto de quiebre ético más doloroso. Una profesional que amaba su profesión siente vergüenza al descubrir cómo la comunidad médica le da la espalda a miles de personas atrapadas en sus casas.",
    transcriptES: `[41:01] Siempre me enorgullecí de ser médico.
[41:19] Pensaba que los médicos eran amables, empáticos y que harían todo lo posible en términos de conocimiento y atención.
[41:41] Pero ahora veo a miles de personas enfermas en sus casas, abandonadas, y como paciente me da una profunda pena y vergüenza.`,
    transcriptEN: `[41:01] I was always proud to be a doctor.
[41:19] I thought doctors were kind, empathetic, and would do everything possible in terms of knowledge and care.
[41:41] But now I see thousands of sick people in their homes, abandoned, and as a patient it fills me with deep sorrow and shame.`
  },
  {
    id: 6,
    timeRange: "52:59 - 55:51",
    startSeconds: 3179,
    endSeconds: 3351,
    headline: "“Los pacientes vienen diciendo la verdad desde 1990: es hora de empezar a escucharlos”",
    speaker: "Médico de la Seguridad Social (GMD)",
    speakerRole: "Médico Perito Evaluador",
    tag: "Momento 6 • Redención y Llamado a la Acción",
    impact: "Cierra con una contundente lección moral: un médico evaluador de incapacidades admite que solía desestimar a estos pacientes hasta que cayó enfermo. Concluye pidiendo que la ciencia médica escuche con humildad a los enfermos.",
    transcriptES: `[52:59] Estuve postrado en la cama por muchos años.
[53:03] Cuando trabajaba como médico de aseguradora en GMD, pensaba que estos pacientes solo estaban cansados o exageraaban.
[54:45] Los pacientes han estado diciendo la verdad desde 1990. Es hora de dejar los prejuicios y escuchar atentamente a los pacientes.
[55:51] “Aprendiendo de los médicos con covid persistente”`,
    transcriptEN: `[52:59] I was bedridden for many years.
[53:03] When I worked as an insurance doctor at GMD, I thought these patients were just tired or exaggerating.
[54:45] Patients have been telling the truth since 1990. It is time to drop prejudices and listen carefully to patients.
[55:51] “Learning from doctors with long COVID”`
  }
];

let currentIndex = 0;
let player = null;
let currentLang = 'es';

// YouTube IFrame API Callback
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    videoId: 'J0ywwLIfH_w',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      start: slidesData[0].startSeconds
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  updateSlide(0);
}

function updateSlide(index) {
  if (index < 0 || index >= slidesData.length) return;
  currentIndex = index;
  const slide = slidesData[currentIndex];

  // Update UI Elements
  document.getElementById('current-slide-num').textContent = slide.id;
  document.getElementById('total-slides-num').textContent = slidesData.length;
  document.getElementById('slide-headline').textContent = slide.headline;
  document.getElementById('speaker-name').textContent = slide.speaker;
  document.getElementById('speaker-role').textContent = slide.speakerRole;
  document.getElementById('speaker-avatar-initial').textContent = slide.speaker.charAt(0);
  document.getElementById('slide-tag').textContent = slide.tag;
  document.getElementById('time-badge-text').textContent = slide.timeRange;
  document.getElementById('impact-text').textContent = slide.impact;

  updateTranscriptView();

  // Update Tabs
  document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
    if (idx === currentIndex) {
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.classList.remove('active');
    }
  });

  // Enable/Disable Prev Next
  document.getElementById('prev-btn').disabled = currentIndex === 0;
  document.getElementById('next-btn').disabled = currentIndex === slidesData.length - 1;

  // Seek Video to startSeconds
  if (player && player.seekTo) {
    player.seekTo(slide.startSeconds, true);
  }
}

function updateTranscriptView() {
  const slide = slidesData[currentIndex];
  const container = document.getElementById('transcript-text');
  if (currentLang === 'es') {
    container.textContent = slide.transcriptES;
  } else {
    container.textContent = slide.transcriptEN;
  }
}

function playCurrentFragment() {
  if (player && player.seekTo && player.playVideo) {
    const slide = slidesData[currentIndex];
    player.seekTo(slide.startSeconds, true);
    player.playVideo();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    updateSlide(currentIndex - 1);
  }
}

function nextSlide() {
  if (currentIndex < slidesData.length - 1) {
    updateSlide(currentIndex + 1);
  }
}

function setLang(lang) {
  currentLang = lang;
  document.getElementById('lang-es-btn').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en-btn').classList.toggle('active', lang === 'en');
  updateTranscriptView();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Render Nav Tabs
  const navTabsContainer = document.getElementById('nav-tabs');
  slidesData.forEach((slide, idx) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${idx === 0 ? 'active' : ''}`;
    btn.innerHTML = `<span class="tab-num">${slide.id}</span> ${slide.timeRange}`;
    btn.onclick = () => updateSlide(idx);
    navTabsContainer.appendChild(btn);
  });

  document.getElementById('prev-btn').addEventListener('click', prevSlide);
  document.getElementById('next-btn').addEventListener('click', nextSlide);
  document.getElementById('play-fragment-btn').addEventListener('click', playCurrentFragment);

  document.getElementById('lang-es-btn').addEventListener('click', () => setLang('es'));
  document.getElementById('lang-en-btn').addEventListener('click', () => setLang('en'));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === ' ') {
      e.preventDefault();
      if (player && player.getPlayerState) {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
          player.pauseVideo();
        } else {
          player.playVideo();
        }
      }
    }
  });
});

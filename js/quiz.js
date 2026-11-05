// ── QUIZ CONFIG ──
const NUM_QUESTIONS = 12;

// ── NPC SYSTEM ──
const NPC_ENCOUNTERS = [
  { char: "toad", triggers: [3], lines: [
    "Attention ! D'après tes réponses, tu as l'air d'avoir du caractère...",
    "Hmm, je note, je note... La princesse va vouloir un rapport !",
    "Wow, tu me rappelles quelqu'un... mais qui ?"
  ]},
  { char: "glados", triggers: [6], lines: [
    "Fascinant. Tes réponses sont... prévisibles. Comme un rat dans un labyrinthe.",
    "Continue, continue. Je collecte des données très intéressantes sur toi.",
    "Oh, ce choix. Vraiment. Je m'attendais à mieux. Ou pas."
  ]},
  { char: "waluigi", triggers: [9], lines: [
    "HEY ! Pourquoi personne me propose comme résultat ?! C'est INJUSTE !",
    "WAH ! T'as presque fini et je parie que je suis même pas dans ton top 3...",
    "Encore 3 questions et tu découvriras que t'es CLAIREMENT un Waluigi."
  ]},
  { char: "cortana", triggers: [4], lines: [
    "Analyse en cours... Ton profil psychologique est en train de se dessiner.",
    "Tes réponses montrent un pattern intéressant. Continue, je calcule.",
    "D'après mes algorithmes, tu es à 33% du quiz. Reste concentré."
  ]},
  { char: "dante", triggers: [7], lines: [
    "Pas mal, pas mal... Mais est-ce que t'as répondu avec STYLE au moins ?",
    "On est à la moitié et je m'ennuie un peu. Mets plus de passion !",
    "Si c'était un combat, t'aurais un rang B. Vise le SSS !"
  ]},
  { char: "ori", triggers: [10], lines: [
    "...✨ Tu brilles de l'intérieur. Tes choix parlent de qui tu es vraiment.",
    "...💫 Presque terminé. Ta lumière commence à révéler sa couleur.",
    "...🌟 N'aie pas peur du résultat. Chaque réponse t'a rapproché de toi-même."
  ]},
  { char: "metaknight", triggers: [5], lines: [
    "Hmm. Tes choix manquent de... panache. Mais je respecte la constance.",
    "Un guerrier se révèle dans ses choix. Les tiens sont... acceptables.",
    "Continue. Je juge en silence."
  ]},
  { char: "bowser", triggers: [8], lines: [
    "GAHAHA ! Si tu tombes sur moi au résultat, c'est un HONNEUR !",
    "Hé, tu sais quoi ? Les méchants sont toujours plus intéressants.",
    "Question 8 déjà ? Le temps passe vite quand on domine !"
  ]}
];

// ── STATE ──
let QUESTIONS = [];
let currentQuestion = 0;
let scores = {};
let transitioning = false;
let answerHistory = [];
let npcEncounters = [];
let activeNPCs = [];

function pickQuestions() {
  const shuffled = [...QUESTION_POOL];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, NUM_QUESTIONS);
}

function pickNPCs() {
  const shuffled = [...NPC_ENCOUNTERS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 3);
}

function initScores() {
  scores = {};
  for (const key in CHARACTERS) scores[key] = 0;
}

// ── NPC POPUP ──
function showNPC(npc) {
  const c = CHARACTERS[npc.char];
  if (!c) return Promise.resolve();
  const line = npc.lines[Math.floor(Math.random() * npc.lines.length)];

  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'npc-overlay';
    overlay.innerHTML = `
      <div class="npc-popup">
        <div class="npc-portrait">${c.portrait}</div>
        <div class="npc-name">${c.name}</div>
        <div class="npc-game">${c.game}</div>
        <div class="npc-line">"${line}"</div>
        <button class="npc-dismiss" onclick="this.closest('.npc-overlay').remove()">Continuer</button>
      </div>
    `;
    document.body.appendChild(overlay);

    npcEncounters.push({ name: c.name, emoji: c.emoji, line });

    overlay.querySelector('.npc-dismiss').addEventListener('click', () => {
      resolve();
    });
  });
}

// ── QUIZ FLOW ──
function startQuiz() {
  QUESTIONS = pickQuestions();
  initScores();
  currentQuestion = 0;
  answerHistory = [];
  npcEncounters = [];
  activeNPCs = pickNPCs();
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const area = document.getElementById('questionArea');

  const pct = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressCount').textContent = (currentQuestion + 1) + ' / ' + QUESTIONS.length;

  area.innerHTML = `
    <div class="question-number">Question ${currentQuestion + 1}</div>
    <div class="question-text">${q.question}</div>
    <div class="choices">
      ${q.choices.map((c, i) => `
        <button class="choice-btn" onclick="selectAnswer(${i})" style="animation-delay: ${i * 0.08}s">
          <span class="choice-key">${String.fromCharCode(65 + i)}</span>
          <span>${c.text}</span>
        </button>
      `).join('')}
    </div>
  `;

  area.classList.remove('exiting');
  area.style.animation = 'none';
  area.offsetHeight;
  area.style.animation = '';
  area.classList.add('question-card');
}

function selectAnswer(index) {
  if (transitioning) return;
  transitioning = true;

  const q = QUESTIONS[currentQuestion];
  const choice = q.choices[index];

  // Track answer for recap
  answerHistory.push({
    question: q.question,
    answer: choice.text,
    index: index
  });

  for (const [char, pts] of Object.entries(choice.scores)) {
    scores[char] = (scores[char] || 0) + pts;
  }

  const buttons = document.querySelectorAll('.choice-btn');
  buttons[index].classList.add('selected');
  buttons.forEach(b => b.style.pointerEvents = 'none');

  setTimeout(() => {
    const area = document.getElementById('questionArea');
    area.classList.add('exiting');

    setTimeout(async () => {
      currentQuestion++;

      // Check for NPC encounter
      const npc = activeNPCs.find(n => n.triggers.includes(currentQuestion));
      if (npc && currentQuestion < QUESTIONS.length) {
        await showNPC(npc);
      }

      if (currentQuestion < QUESTIONS.length) {
        renderQuestion();
      } else {
        showResult();
      }
      transitioning = false;
    }, 300);
  }, 400);
}

async function showResult() {
  document.getElementById('quiz').classList.add('hidden');

  // Find winner
  let maxScore = 0;
  let winner = 'mario';
  for (const [char, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      winner = char;
    }
  }

  const c = CHARACTERS[winner];

  // Top scores for display
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  const topMax = sorted[0][1] || 1;

  // Build recap HTML
  const recapHTML = buildRecapHTML();

  const resultDiv = document.getElementById('result');
  resultDiv.classList.remove('hidden');
  resultDiv.innerHTML = `
    <div class="result-badge">★ Ton Personnage ★</div>
    <div class="result-portrait">
      <div class="result-portrait-loading" id="portraitContainer">
        <span class="result-portrait-emoji">${c.portrait}</span>
      </div>
    </div>
    <div class="result-name">${c.name}</div>
    <div class="result-game">${c.game}</div>

    <div class="result-card">
      <div class="result-description">${c.description}</div>
      <div class="result-traits">
        ${c.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
      </div>
      <div class="result-quote">
        "${c.quote}"
        <span class="quote-attr">${c.quoteAttr}</span>
      </div>

      <div class="result-extras">
        <div class="extra-card">
          <div class="extra-label">Élément</div>
          <div class="extra-value">${c.element || '???'}</div>
        </div>
        <div class="extra-card magenta">
          <div class="extra-label">Rival</div>
          <div class="extra-value">⚔️ ${c.rival || '???'}</div>
        </div>
        <div class="extra-card gold">
          <div class="extra-label">Meilleur allié</div>
          <div class="extra-value">🤝 ${c.ally || '???'}</div>
        </div>
        <div class="extra-card green">
          <div class="extra-label">Soundtrack</div>
          <div class="extra-value">🎵 ${c.soundtrack || '???'}</div>
        </div>
      </div>
    </div>

    <div id="wikiSection" class="wiki-section" style="display:none;">
      <div class="wiki-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.224-1.259-.224L0 4.943l.186-.186C.726 4.036 1.648 3.7 2.853 3.7c1.837 0 2.853.981 3.405 2.852l2.478 6.469c.418 1.076.793 1.564 1.123 1.564.366 0 .76-.479 1.189-1.437l2.645-5.561C13.861 5.539 14.517 3.7 16.282 3.7c1.178 0 2.037.341 2.55 1.057l.186.186-.162.162c-.705 0-1.078.074-1.259.224-.178.152-.367.538-.619 1.139-.377.901-.875 2.088-1.494 3.56L19.7 19.3c-.436.868-.945 1.019-1.532.029-.636-1.18-1.917-3.796-2.853-5.728-.423-.866-.793-1.652-1.112-2.358l-1.108 2.324c-.313.654-.604 1.177-.876 1.552z"/></svg>
        Selon Wikipédia
      </div>
      <div class="wiki-text" id="wikiText"></div>
      <a class="wiki-link" id="wikiLink" href="#" target="_blank" rel="noopener">Lire l'article complet →</a>
    </div>

    <div class="result-funfact">
      <div class="funfact-label">Le savais-tu ?</div>
      <div class="funfact-text">${c.funFact || ''}</div>
    </div>

    <div class="result-weakness">
      <div class="weakness-label">Ton talon d'Achille</div>
      <div class="weakness-text">${c.faiblesse || ''}</div>
    </div>

    <div class="score-bar-container">
      <div class="score-bar-title">Affinités</div>
      ${sorted.map(([key, val], i) => {
        const ch = CHARACTERS[key];
        const pct = Math.round((val / topMax) * 100);
        return `
          <div class="score-row ${i === 0 ? 'winner' : ''}" style="animation-delay: ${0.6 + i * 0.1}s">
            <span class="score-char">${ch.emoji} ${ch.name}</span>
            <div class="score-bar-bg">
              <div class="score-bar-fill" data-width="${pct}"></div>
            </div>
            <span class="score-pct">${pct}%</span>
          </div>
        `;
      }).join('')}
    </div>

    ${recapHTML}

    <button class="btn-restart" onclick="restart()">Recommencer</button>
  `;

  // Animate score bars
  setTimeout(() => {
    document.querySelectorAll('.score-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 800);

  // Fetch Wikipedia data asynchronously
  try {
    const wikiData = await fetchWikiData(winner);
    const container = document.getElementById('portraitContainer');

    if (wikiData.image) {
      const img = new Image();
      img.onload = () => {
        container.innerHTML = '';
        container.className = '';
        img.className = 'result-portrait-img';
        img.alt = c.name;
        container.appendChild(img);
      };
      img.src = wikiData.image;
    } else {
      container.className = '';
    }

    if (wikiData.extract) {
      const wikiSection = document.getElementById('wikiSection');
      const wikiText = document.getElementById('wikiText');
      const wikiLink = document.getElementById('wikiLink');
      wikiText.textContent = wikiData.extract;
      if (wikiData.url) wikiLink.href = wikiData.url;
      wikiSection.style.display = 'block';
      wikiSection.style.animation = 'fadeInUp 0.6s ease-out';
    }
  } catch (e) {
    const container = document.getElementById('portraitContainer');
    if (container) container.className = '';
  }
}

// ── RECAP BUILDER ──
function buildRecapHTML() {
  const letters = ['A', 'B', 'C', 'D'];

  // NPC encounters section
  let npcHTML = '';
  if (npcEncounters.length > 0) {
    npcHTML = `
      <div class="recap-section">
        <div class="recap-subtitle">PNJ rencontrés en chemin</div>
        ${npcEncounters.map(npc => `
          <div class="recap-npc">
            <span class="recap-npc-emoji">${npc.emoji}</span>
            <div class="recap-npc-content">
              <span class="recap-npc-name">${npc.name}</span>
              <span class="recap-npc-line">"${npc.line}"</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Personality analysis
  const traitCounts = {};
  for (const entry of answerHistory) {
    const idx = entry.index;
    if (idx === 0) traitCounts['action'] = (traitCounts['action'] || 0) + 1;
    if (idx === 1) traitCounts['reflexion'] = (traitCounts['reflexion'] || 0) + 1;
    if (idx === 2) traitCounts['strategie'] = (traitCounts['strategie'] || 0) + 1;
    if (idx === 3) traitCounts['intuition'] = (traitCounts['intuition'] || 0) + 1;
  }
  const dominant = Object.entries(traitCounts).sort((a, b) => b[1] - a[1]);
  const profileLabels = {
    action: { name: 'Fonceur', desc: 'Tu choisis souvent la première option — tu es direct, spontané et tu fais confiance à ton instinct.' },
    reflexion: { name: 'Réfléchi', desc: 'Tu prends du recul avant d\'agir — tu analyses, tu observes, et tu fais des choix mesurés.' },
    strategie: { name: 'Stratège', desc: 'Tu penses à long terme — chaque choix est calculé pour maximiser tes chances.' },
    intuition: { name: 'Intuitif', desc: 'Tu suis ton cœur — tes choix viennent d\'un endroit plus profond que la logique.' }
  };
  const topProfile = dominant[0] ? profileLabels[dominant[0][0]] : null;

  return `
    <div class="recap-container">
      <div class="recap-header">
        <div class="recap-title">Récap de ton aventure</div>
        <div class="recap-subtitle-main">12 questions, ${npcEncounters.length} PNJ rencontrés</div>
      </div>

      ${topProfile ? `
        <div class="recap-profile">
          <div class="recap-profile-label">Ton profil dominant</div>
          <div class="recap-profile-name">${topProfile.name}</div>
          <div class="recap-profile-desc">${topProfile.desc}</div>
          <div class="recap-profile-bars">
            ${dominant.map(([key, count]) => `
              <div class="recap-profile-bar-row">
                <span class="recap-bar-label">${profileLabels[key].name}</span>
                <div class="recap-bar-bg">
                  <div class="recap-bar-fill" style="width: ${Math.round((count / 12) * 100)}%"></div>
                </div>
                <span class="recap-bar-count">${count}/12</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${npcHTML}

      <div class="recap-section">
        <div class="recap-subtitle">Tes réponses</div>
        ${answerHistory.map((entry, i) => `
          <div class="recap-answer">
            <div class="recap-q-number">Q${i + 1}</div>
            <div class="recap-q-content">
              <div class="recap-q-text">${entry.question}</div>
              <div class="recap-a-text">
                <span class="recap-a-letter">${letters[entry.index]}</span>
                ${entry.answer}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function restart() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('intro').classList.remove('hidden');
  document.getElementById('intro').style.animation = 'none';
  document.getElementById('intro').offsetHeight;
  document.getElementById('intro').style.animation = 'fadeInUp 0.8s ease-out';
}

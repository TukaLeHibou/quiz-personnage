// ── PARTICLES ──
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['var(--neon-cyan)', 'var(--neon-magenta)', 'var(--neon-gold)', 'var(--neon-green)'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(p);
  }
}

// ── KEYBOARD SUPPORT ──
document.addEventListener('keydown', (e) => {
  if (transitioning) return;
  const key = e.key.toUpperCase();
  const map = { A: 0, B: 1, C: 2, D: 3 };
  if (key in map && !document.getElementById('quiz').classList.contains('hidden')) {
    const btns = document.querySelectorAll('.choice-btn');
    if (btns[map[key]]) selectAnswer(map[key]);
  }
  if (key === 'ENTER' && !document.getElementById('intro').classList.contains('hidden')) {
    startQuiz();
  }
});

// ── SHARE ──
function getShareText() {
  return "Quel Personnage de Jeu Vidéo Es-Tu ? 🎮⚔️ Fais le quiz pour découvrir ton alter ego parmi 52 héros légendaires !";
}

function getShareURL() {
  return window.location.href;
}

function copyToClipboard(text) {
  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  // Fallback: textarea + execCommand
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return Promise.resolve(ok);
  } catch (e) {
    return Promise.resolve(false);
  }
}

function shareInstagram() {
  const text = getShareText() + "\n\n" + getShareURL();
  copyToClipboard(text).then((ok) => {
    if (ok) {
      showShareToast("Texte copié ! Colle-le dans tes DMs ou ta story Instagram");
    } else {
      showShareToast("Impossible de copier — copie le lien manuellement");
    }
  });
}

function shareDiscord() {
  const text = getShareText() + " " + getShareURL();
  copyToClipboard(text).then((ok) => {
    if (ok) {
      showShareToast("Texte copié ! Colle-le dans ton serveur ou DM Discord");
    } else {
      showShareToast("Impossible de copier — copie le lien manuellement");
    }
  });
}

function showShareToast(message) {
  const existing = document.querySelector('.share-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'share-toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('share-toast-out');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ── ROSTER ──
function toggleRoster() {
  const list = document.getElementById('rosterList');
  const btn = document.querySelector('.btn-roster');

  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    btn.textContent = 'Masquer la liste';
    renderRoster();
  } else {
    list.classList.add('hidden');
    btn.textContent = 'Voir les 52 personnages';
  }
}

function renderRoster() {
  const list = document.getElementById('rosterList');
  if (list.innerHTML) return;

  const entries = Object.entries(CHARACTERS);
  const groups = {};
  for (const [key, c] of entries) {
    if (!groups[c.game]) groups[c.game] = [];
    groups[c.game].push(c);
  }

  let html = '<div class="roster-grid">';
  for (const [key, c] of entries) {
    html += `
      <div class="roster-card">
        <span class="roster-emoji">${c.emoji}</span>
        <span class="roster-name">${c.name}</span>
        <span class="roster-game">${c.game}</span>
      </div>
    `;
  }
  html += '</div>';

  const gameCount = Object.keys(groups).length;
  html += `<div class="roster-stats">${entries.length} personnages · ${gameCount} franchises · ${QUESTION_POOL.length} questions</div>`;

  list.innerHTML = html;
}

// ── INIT ──
createParticles();

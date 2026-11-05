// ── WIKIPEDIA API ──
const WIKI_MAP = {
  mario: "Mario_(personnage)",
  link: "Link_(The_Legend_of_Zelda)",
  kratos: "Kratos_(God_of_War)",
  masterchief: "Master_Chief",
  lara: "Lara_Croft",
  geralt: "Geralt_de_Riv",
  snake: "Solid_Snake",
  samus: "Samus_Aran",
  cloud: "Cloud_Strife",
  arthur: "Red_Dead_Redemption_2",
  ezio: "Ezio_Auditore_da_Firenze",
  kirby: "Kirby_(personnage)",
  aloy: "Horizon_Zero_Dawn",
  joel: "The_Last_of_Us",
  sonic: "Sonic_the_Hedgehog",
  nathan: "Uncharted_(série_de_jeux_vidéo)",
  doomslayer: "Doom_(jeu_vidéo,_2016)",
  sekiro: "Sekiro:_Shadows_Die_Twice",
  luigi: "Luigi",
  zelda: "Princesse_Zelda",
  tifa: "Tifa_Lockhart",
  ellie: "The_Last_of_Us_Part_II",
  pikachu: "Pikachu",
  bowser: "Bowser",
  dante: "Dante_(Devil_May_Cry)",
  deuxb: "NieR:_Automata",
  crash: "Crash_Bandicoot_(personnage)",
  ryu: "Ryu_(Street_Fighter)",
  sephiroth: "Sephiroth_(Final_Fantasy)",
  cj: "Grand_Theft_Auto:_San_Andreas",
  bayonetta: "Bayonetta_(personnage)",
  raiden: "Raiden_(Metal_Gear)",
  ganondorf: "Ganondorf",
  yoshi: "Yoshi",
  donkeykong: "Donkey_Kong",
  wario: "Wario",
  peach: "Princesse_Peach",
  kratos_atreus: "God_of_War_(jeu_vidéo,_2018)",
  shepard: "Mass_Effect_(jeu_vidéo)",
  leon: "Resident_Evil_4",
  pacman: "Pac-Man",
  megaman: "Mega_Man",
  glados: "GLaDOS",
  ciri: "Ciri_(The_Witcher)",
  vcyberpunk: "Cyberpunk_2077",
  clementine: "The_Walking_Dead_(jeu_vidéo)",
  waluigi: "Waluigi",
  metaknight: "Meta_Knight",
  toad: "Toad_(Nintendo)",
  cortana: "Cortana_(Halo)",
  ori: "Ori_and_the_Blind_Forest",
  scorpion: "Scorpion_(Mortal_Kombat)"
};

async function fetchWikiData(charKey) {
  const title = WIKI_MAP[charKey];
  if (!title) return {};
  for (const lang of ['fr', 'en']) {
    try {
      const resp = await fetch(
        `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
        { headers: { 'Accept': 'application/json' } }
      );
      if (!resp.ok) continue;
      const data = await resp.json();
      if (data.thumbnail || data.extract) {
        return {
          image: data.thumbnail?.source || null,
          extract: data.extract || null,
          url: data.content_urls?.desktop?.page || null
        };
      }
    } catch (e) { /* silently fail */ }
  }
  return {};
}

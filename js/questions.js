const QUESTION_POOL = [
  // ── QUESTIONS ORIGINALES ──
  {
    question: "Tu te réveilles dans un monde inconnu. Que fais-tu en premier ?",
    choices: [
      { text: "J'explore immédiatement — chaque recoin cache un secret", scores: { link: 3, lara: 3, samus: 2, aloy: 2, crash: 2 } },
      { text: "Je cherche quelqu'un à aider, il y a forcément des gens en danger", scores: { mario: 3, arthur: 2, cloud: 1, joel: 2, yoshi: 2, peach: 2 } },
      { text: "J'analyse la situation froidement avant de bouger", scores: { snake: 3, masterchief: 2, geralt: 2, sekiro: 1, deuxb: 2, zelda: 2 } },
      { text: "Je me fais un bon repas d'abord, on réfléchit mieux le ventre plein", scores: { kirby: 3, ezio: 1, nathan: 2, donkeykong: 3, wario: 2 } }
    ]
  },
  {
    question: "En combat, quelle est ta philosophie ?",
    choices: [
      { text: "La meilleure défense, c'est l'attaque — je fonce dans le tas", scores: { kratos: 3, mario: 2, doomslayer: 3, sonic: 2, donkeykong: 2, crash: 2 } },
      { text: "La discrétion est la clé — frapper vite, disparaître", scores: { snake: 3, ezio: 3, sekiro: 2, raiden: 2, bayonetta: 1 } },
      { text: "Stratégie et équipement — je me prépare avant chaque affrontement", scores: { masterchief: 3, lara: 2, geralt: 2, aloy: 2, zelda: 2 } },
      { text: "Je m'adapte à mon adversaire, chaque combat est unique", scores: { link: 2, cloud: 2, geralt: 2, sekiro: 2, ryu: 3, deuxb: 2 } }
    ]
  },
  {
    question: "Ton meilleur ami est accusé d'un crime qu'il n'a pas commis. Tu réagis comment ?",
    choices: [
      { text: "Je remue ciel et terre pour prouver son innocence", scores: { mario: 3, cloud: 2, arthur: 2, tifa: 3, luigi: 2 } },
      { text: "J'enquête discrètement pour trouver le vrai coupable", scores: { snake: 3, ezio: 2, lara: 1, raiden: 2, bayonetta: 1 } },
      { text: "Je fais confiance au système mais je reste vigilant", scores: { masterchief: 2, link: 2, samus: 1, zelda: 3, peach: 2 } },
      { text: "Le système est corrompu — je le fais évader", scores: { kratos: 2, geralt: 2, ezio: 2, cj: 3, ganondorf: 1 } }
    ]
  },
  {
    question: "Quelle qualité te décrit le mieux ?",
    choices: [
      { text: "Ma détermination — je n'abandonne jamais", scores: { mario: 3, kratos: 2, cloud: 2, doomslayer: 2, ryu: 3 } },
      { text: "Mon intelligence — je trouve toujours une solution", scores: { lara: 3, snake: 2, aloy: 2, geralt: 1, zelda: 3 } },
      { text: "Mon charme — les gens me font confiance naturellement", scores: { ezio: 3, arthur: 2, nathan: 3, bayonetta: 3, dante: 2 } },
      { text: "Ma joie de vivre — je vois le positif partout", scores: { kirby: 3, sonic: 2, mario: 1, link: 1, pikachu: 3, yoshi: 2 } }
    ]
  },
  {
    question: "Tu trouves un objet magique très puissant. Qu'en fais-tu ?",
    choices: [
      { text: "Je l'utilise pour protéger ceux que j'aime", scores: { link: 3, masterchief: 2, mario: 2, zelda: 2, tifa: 2 } },
      { text: "Je l'étudie pour comprendre comment il fonctionne", scores: { lara: 3, samus: 2, snake: 1, aloy: 1, deuxb: 2 } },
      { text: "Trop dangereux — je le détruis pour que personne ne l'utilise", scores: { geralt: 3, arthur: 2, kratos: 1, raiden: 2 } },
      { text: "Je le mange", scores: { kirby: 3, crash: 2, donkeykong: 2, wario: 1 } }
    ]
  },
  {
    question: "Comment gères-tu tes émotions ?",
    choices: [
      { text: "Je les enferme au fond de moi — pas le temps pour ça", scores: { masterchief: 3, samus: 3, cloud: 2, doomslayer: 2, deuxb: 3 } },
      { text: "Elles sont intenses mais je les canalise dans l'action", scores: { kratos: 3, cloud: 2, joel: 2, sekiro: 1, raiden: 3, ryu: 2 } },
      { text: "J'en parle avec humour et sarcasme pour dédramatiser", scores: { geralt: 3, ezio: 2, nathan: 3, dante: 3, ellie: 2 } },
      { text: "Je les vis pleinement, sans filtre", scores: { kirby: 2, mario: 2, arthur: 2, sonic: 2, pikachu: 3, luigi: 2, crash: 2 } }
    ]
  },
  {
    question: "Ton environnement idéal pour vivre ?",
    choices: [
      { text: "La nature sauvage, loin de la civilisation", scores: { arthur: 3, link: 2, geralt: 2, aloy: 2, yoshi: 2, donkeykong: 3 } },
      { text: "Une grande ville pleine de vie et de mystères", scores: { ezio: 3, lara: 2, nathan: 2, snake: 1, cj: 3, bayonetta: 2 } },
      { text: "Un vaisseau spatial ou une base technologique", scores: { samus: 3, masterchief: 3, doomslayer: 1, deuxb: 3, raiden: 2 } },
      { text: "Un endroit coloré avec plein de nourriture", scores: { kirby: 3, mario: 2, sonic: 2, pikachu: 2, crash: 2, peach: 2 } }
    ]
  },
  {
    question: "On te propose de diriger une équipe. Ta réaction ?",
    choices: [
      { text: "J'accepte — les gens comptent sur moi et je ne les décevrai pas", scores: { masterchief: 3, mario: 2, joel: 2, zelda: 3, peach: 2 } },
      { text: "Je préfère travailler seul, je suis plus efficace comme ça", scores: { samus: 3, doomslayer: 2, snake: 2, geralt: 2, ryu: 2 } },
      { text: "Je dirige par l'exemple, pas par les ordres", scores: { arthur: 3, link: 2, sekiro: 2, kratos: 1, cj: 2 } },
      { text: "Tant qu'on s'amuse bien ensemble, ça me va !", scores: { kirby: 2, sonic: 2, nathan: 2, ezio: 2, crash: 3, pikachu: 2, dante: 2 } }
    ]
  },
  {
    question: "Face à un dilemme moral impossible, tu choisis...",
    choices: [
      { text: "Le plus grand bien pour le plus grand nombre", scores: { masterchief: 3, snake: 2, samus: 1, aloy: 2, zelda: 2, deuxb: 2 } },
      { text: "Mon cœur — même si c'est irrationnel", scores: { mario: 3, cloud: 3, joel: 3, luigi: 2, tifa: 2, pikachu: 2 } },
      { text: "Je refuse le dilemme et je cherche une troisième option", scores: { geralt: 3, link: 2, nathan: 1, ezio: 1, dante: 2, bayonetta: 2 } },
      { text: "Je fais ce qui me semble juste, quelles que soient les conséquences", scores: { kratos: 2, arthur: 3, sekiro: 2, lara: 1, ellie: 3, raiden: 2 } }
    ]
  },
  {
    question: "Quel est ton plus grand défaut ?",
    choices: [
      { text: "Je suis trop têtu — impossible de me faire changer d'avis", scores: { kratos: 3, mario: 2, doomslayer: 2, masterchief: 1, bowser: 3, ganondorf: 2 } },
      { text: "Je garde tout pour moi et je refuse l'aide des autres", scores: { cloud: 3, samus: 2, snake: 2, joel: 2, deuxb: 2, ellie: 2 } },
      { text: "Je suis trop confiant, parfois arrogant", scores: { ezio: 3, nathan: 3, sonic: 2, lara: 2, dante: 3, bayonetta: 2, wario: 2 } },
      { text: "Je fais trop confiance aux gens", scores: { arthur: 2, link: 2, kirby: 2, aloy: 1, luigi: 3, peach: 3, yoshi: 2, pikachu: 2 } }
    ]
  },
  {
    question: "Comment apprends-tu de nouvelles compétences ?",
    choices: [
      { text: "En faisant — je me lance et j'apprends de mes erreurs", scores: { mario: 3, link: 2, sonic: 2, kratos: 1, crash: 3, cj: 2 } },
      { text: "En observant et en imitant les meilleurs", scores: { ezio: 3, snake: 2, sekiro: 2, cloud: 1, ryu: 3, kratos_atreus: 2 } },
      { text: "En étudiant méthodiquement chaque aspect", scores: { lara: 3, samus: 2, aloy: 2, masterchief: 1, zelda: 2, deuxb: 2 } },
      { text: "J'absorbe les capacités de ceux que je rencontre", scores: { kirby: 3, nathan: 1, geralt: 1, pikachu: 2, raiden: 2, sephiroth: 1 } }
    ]
  },
  {
    question: "Qu'est-ce qui te motive le plus dans la vie ?",
    choices: [
      { text: "Protéger les personnes que j'aime", scores: { mario: 2, kratos: 3, joel: 3, cloud: 2, masterchief: 1, tifa: 3, luigi: 2, yoshi: 2 } },
      { text: "La quête de vérité et de connaissance", scores: { lara: 3, aloy: 3, snake: 2, samus: 1, zelda: 2, kratos_atreus: 2 } },
      { text: "La liberté et l'indépendance", scores: { geralt: 2, ezio: 2, arthur: 3, sonic: 2, bayonetta: 3, cj: 2, ganondorf: 2 } },
      { text: "Vivre des aventures et m'amuser", scores: { kirby: 2, link: 2, nathan: 3, sonic: 1, crash: 3, dante: 3, pikachu: 2 } }
    ]
  },
  {
    question: "Tu découvres que ton mentor t'a menti toute ta vie. Comment réagis-tu ?",
    choices: [
      { text: "La colère me consume — il va payer pour cette trahison", scores: { kratos: 3, cloud: 2, doomslayer: 2, sephiroth: 3, ellie: 3, raiden: 2 } },
      { text: "Je cherche à comprendre pourquoi avant de juger", scores: { geralt: 3, arthur: 2, aloy: 2, link: 1, zelda: 2, kratos_atreus: 3 } },
      { text: "Je coupe les ponts et je trace ma propre route", scores: { samus: 3, snake: 2, sekiro: 2, lara: 1, bayonetta: 2, cj: 2 } },
      { text: "C'est triste, mais ça ne change pas qui je suis", scores: { mario: 2, kirby: 2, sonic: 1, masterchief: 2, pikachu: 2, peach: 2 } }
    ]
  },
  {
    question: "Comment occupes-tu ton temps libre ?",
    choices: [
      { text: "Je pars explorer des endroits que personne n'a vus", scores: { lara: 3, link: 3, aloy: 2, nathan: 2, crash: 2 } },
      { text: "Je m'entraîne — on ne sait jamais quand le prochain combat arrivera", scores: { kratos: 2, sekiro: 3, doomslayer: 2, masterchief: 2, ryu: 3, raiden: 2 } },
      { text: "Je profite des plaisirs simples : bonne bouffe, bons amis", scores: { arthur: 3, ezio: 2, kirby: 2, joel: 1, donkeykong: 3, yoshi: 2, wario: 1 } },
      { text: "Je dessine, j'écris, je crée des choses", scores: { mario: 2, sonic: 1, cloud: 2, arthur: 1, zelda: 2, peach: 2, ellie: 2 } }
    ]
  },
  {
    question: "Tu tombes sur un ennemi beaucoup plus puissant que toi. Ta stratégie ?",
    choices: [
      { text: "J'y vais quand même — on verra bien", scores: { kratos: 2, doomslayer: 3, sonic: 2, dante: 3, bowser: 2, crash: 2 } },
      { text: "Je reviens plus tard, mieux préparé et mieux équipé", scores: { link: 2, lara: 2, sekiro: 3, ryu: 2, zelda: 2 } },
      { text: "Je cherche son point faible en l'observant", scores: { snake: 2, aloy: 3, geralt: 2, deuxb: 2, ganondorf: 2 } },
      { text: "Je cherche un allié pour combattre à deux", scores: { mario: 2, nathan: 2, cloud: 2, joel: 1, luigi: 3, tifa: 3, pikachu: 2, yoshi: 2 } }
    ]
  },
  {
    question: "Quel rôle prends-tu naturellement dans un groupe ?",
    choices: [
      { text: "Le protecteur — je veille sur tout le monde", scores: { joel: 3, kratos: 2, masterchief: 2, tifa: 3, yoshi: 2 } },
      { text: "L'éclaireur — je pars en avant pour ouvrir la voie", scores: { aloy: 2, link: 2, samus: 2, sonic: 1, raiden: 2, ellie: 2 } },
      { text: "Le stratège — je fais le plan que tout le monde suit", scores: { snake: 2, lara: 2, sekiro: 2, geralt: 1, zelda: 3, ganondorf: 2 } },
      { text: "Le moral de l'équipe — je garde tout le monde motivé", scores: { mario: 2, kirby: 2, nathan: 2, ezio: 1, pikachu: 3, crash: 2, dante: 2, luigi: 1 } }
    ]
  },
  {
    question: "Tu peux maîtriser un seul pouvoir. Lequel choisis-tu ?",
    choices: [
      { text: "La vitesse absolue — tout ralentit sauf moi", scores: { sonic: 3, ezio: 1, sekiro: 2, raiden: 3, bayonetta: 2 } },
      { text: "La capacité de tout analyser en un regard", scores: { aloy: 3, snake: 2, lara: 1, zelda: 2, deuxb: 2 } },
      { text: "Une force surhumaine brute", scores: { kratos: 2, doomslayer: 3, masterchief: 1, donkeykong: 3, bowser: 2, ryu: 2 } },
      { text: "La capacité de revenir en arrière dans le temps", scores: { cloud: 2, arthur: 2, joel: 2, link: 1, sephiroth: 2, zelda: 1 } }
    ]
  },
  {
    question: "Un inconnu te provoque en duel. Que fais-tu ?",
    choices: [
      { text: "J'accepte immédiatement — c'est une question d'honneur", scores: { sekiro: 3, kratos: 2, doomslayer: 2, ryu: 3, ganondorf: 2 } },
      { text: "Je décline avec style et une réplique cinglante", scores: { ezio: 2, nathan: 3, geralt: 2, dante: 3, bayonetta: 3 } },
      { text: "J'accepte mais je prépare un plan B en secret", scores: { snake: 3, lara: 1, aloy: 2, raiden: 2, wario: 2 } },
      { text: "Je lui propose plutôt de faire équipe", scores: { mario: 2, sonic: 2, kirby: 2, link: 1, pikachu: 2, peach: 2, yoshi: 2 } }
    ]
  },
  {
    question: "Ton monde est en train de s'effondrer. Comment passes-tu tes dernières heures ?",
    choices: [
      { text: "Je me bats jusqu'au dernier souffle pour le sauver", scores: { doomslayer: 3, masterchief: 2, kratos: 2, ryu: 2, raiden: 2, ganondorf: 2 } },
      { text: "Je passe du temps avec ceux que j'aime", scores: { joel: 3, arthur: 3, cloud: 1, tifa: 3, ellie: 2, luigi: 2 } },
      { text: "Je cherche un moyen scientifique ou technologique d'inverser la situation", scores: { aloy: 3, samus: 2, lara: 1, zelda: 3, deuxb: 2 } },
      { text: "Je mange un dernier festin royal", scores: { kirby: 3, nathan: 1, mario: 1, sonic: 1, donkeykong: 3, crash: 2, wario: 3 } }
    ]
  },
  {
    question: "Choisis une phrase qui te représente.",
    choices: [
      { text: "\"Ce n'est pas la taille du héros qui compte, mais celle de son cœur.\"", scores: { mario: 3, kirby: 3, link: 2, luigi: 3, pikachu: 2, yoshi: 2 } },
      { text: "\"Dans les ténèbres, je suis la lame qui tranche la vérité.\"", scores: { ezio: 3, snake: 2, samus: 2, sekiro: 2, raiden: 2, bayonetta: 2, deuxb: 1 } },
      { text: "\"Le monde essaie de me briser, mais je me relève toujours.\"", scores: { kratos: 3, cloud: 3, doomslayer: 2, joel: 1, ellie: 3, raiden: 2, cj: 2 } },
      { text: "\"La vraie richesse, c'est le chemin parcouru, pas la destination.\"", scores: { arthur: 3, lara: 2, geralt: 2, aloy: 1, nathan: 1, dante: 2, peach: 1, zelda: 1 } }
    ]
  },

  // ── QUESTIONS PROFONDES & PERSONNELLES ──
  {
    question: "Sois honnête : est-ce que tu t'aimes vraiment ?",
    choices: [
      { text: "Oui, j'ai appris à m'accepter avec mes défauts", scores: { arthur: 3, geralt: 2, mario: 2, ezio: 1, dante: 2, bayonetta: 2 } },
      { text: "J'essaie, mais y'a des jours où c'est difficile", scores: { cloud: 3, joel: 2, link: 1, aloy: 2, luigi: 3, ellie: 2, tifa: 1 } },
      { text: "Je m'en fous de cette question, j'ai des trucs à faire", scores: { doomslayer: 3, masterchief: 2, samus: 2, sonic: 1, wario: 3, bowser: 2 } },
      { text: "Je ne sais pas qui je suis vraiment, alors comment m'aimer ?", scores: { cloud: 3, snake: 2, sekiro: 1, kratos: 2, raiden: 3, deuxb: 3, sephiroth: 2 } }
    ]
  },
  {
    question: "Quelle est ta plus grande peur, celle que tu n'avoues à personne ?",
    choices: [
      { text: "Être oublié — disparaître sans laisser de trace", scores: { ezio: 3, cloud: 2, nathan: 2, sonic: 1, bowser: 2, wario: 1 } },
      { text: "Perdre les gens que j'aime et ne rien pouvoir faire", scores: { joel: 3, kratos: 3, mario: 2, masterchief: 1, tifa: 3, luigi: 2, ellie: 2 } },
      { text: "Découvrir que j'ai toujours été du mauvais côté", scores: { arthur: 3, geralt: 2, snake: 2, sekiro: 1, raiden: 3, deuxb: 2 } },
      { text: "La solitude — rester seul jusqu'à la fin", scores: { samus: 3, cloud: 2, link: 2, aloy: 1, ganondorf: 2, sephiroth: 2 } }
    ]
  },
  {
    question: "Tu as déjà menti à quelqu'un que tu aimes pour le protéger ?",
    choices: [
      { text: "Oui, et je le referais sans hésiter", scores: { joel: 3, snake: 2, ezio: 2, masterchief: 1, tifa: 2, peach: 1 } },
      { text: "Oui, et je le regrette encore aujourd'hui", scores: { arthur: 3, cloud: 2, kratos: 2, geralt: 1, ellie: 2, raiden: 2 } },
      { text: "Non — la vérité, toujours, même quand ça fait mal", scores: { aloy: 3, lara: 2, sekiro: 2, link: 1, zelda: 2, ryu: 2 } },
      { text: "Je mens tellement bien que je ne sais plus quand je le fais", scores: { nathan: 3, ezio: 2, snake: 1, geralt: 1, dante: 2, bayonetta: 2, wario: 1 } }
    ]
  },
  {
    question: "Si tu pouvais revivre un seul moment de ta vie, ce serait...",
    choices: [
      { text: "Un moment de bonheur pur, juste pour le ressentir encore", scores: { mario: 3, kirby: 3, arthur: 2, joel: 1, pacman: 2, pikachu: 1 } },
      { text: "Mon plus grand échec — pour le corriger cette fois", scores: { cloud: 3, kratos: 2, sekiro: 2, masterchief: 1, scorpion: 2, leon: 1 } },
      { text: "Rien — le passé est le passé, je regarde devant", scores: { sonic: 3, samus: 2, doomslayer: 2, link: 1, pacman: 2, shepard: 1 } },
      { text: "Le moment où j'ai perdu quelqu'un — juste pour lui dire au revoir", scores: { joel: 3, arthur: 3, cloud: 2, kratos: 1, scorpion: 3, megaman: 1 } }
    ]
  },
  {
    question: "Quand tu es seul dans le noir, à quoi tu penses vraiment ?",
    choices: [
      { text: "Aux erreurs que j'ai faites et que je ne peux plus corriger", scores: { arthur: 3, cloud: 3, kratos: 2, joel: 1, scorpion: 2 } },
      { text: "À toutes les aventures qui m'attendent encore", scores: { link: 3, lara: 2, nathan: 2, sonic: 1, pacman: 2, shepard: 2 } },
      { text: "Je me demande si les gens m'apprécient vraiment", scores: { cloud: 2, mario: 2, ezio: 2, aloy: 2, luigi: 1, kratos_atreus: 2 } },
      { text: "Je ne pense à rien — le silence me suffit", scores: { samus: 3, doomslayer: 2, sekiro: 2, masterchief: 1, glados: 2 } }
    ]
  },
  {
    question: "Tu préfères être respecté ou aimé ?",
    choices: [
      { text: "Aimé — le respect sans amour, c'est froid", scores: { mario: 3, kirby: 2, cloud: 2, arthur: 1, pikachu: 2, luigi: 2, peach: 2 } },
      { text: "Respecté — l'amour va et vient, le respect se mérite", scores: { masterchief: 3, sekiro: 2, kratos: 2, samus: 1, ryu: 3, zelda: 2 } },
      { text: "Craint — au moins on me laisse tranquille", scores: { doomslayer: 3, kratos: 2, snake: 1, geralt: 1, ganondorf: 3, sephiroth: 3, bowser: 2 } },
      { text: "Ni l'un ni l'autre — je veux juste être libre", scores: { geralt: 3, sonic: 2, ezio: 2, aloy: 1, bayonetta: 3, dante: 2, cj: 2 } }
    ]
  },
  {
    question: "Tu as déjà sacrifié ton propre bonheur pour quelqu'un d'autre ?",
    choices: [
      { text: "Oui, et c'est ce qui me définit — je passerai toujours après", scores: { joel: 3, kratos: 2, mario: 2, masterchief: 1, yoshi: 3, tifa: 2, luigi: 2 } },
      { text: "Oui, mais je l'ai regretté et j'ai appris à poser des limites", scores: { geralt: 3, arthur: 2, lara: 2, aloy: 1, ellie: 2, cj: 2 } },
      { text: "Non — si je ne suis pas heureux, je ne peux aider personne", scores: { sonic: 3, ezio: 2, nathan: 2, kirby: 1, dante: 3, bayonetta: 2, wario: 2 } },
      { text: "Je ne sais pas ce qui me rend heureux, alors la question ne se pose pas", scores: { cloud: 3, samus: 2, snake: 2, sekiro: 1, deuxb: 3, raiden: 2, sephiroth: 2 } }
    ]
  },
  {
    question: "Si ton pire ennemi tombait d'une falaise, tu le rattraperais ?",
    choices: [
      { text: "Oui, sans hésiter — la haine ne justifie pas la mort", scores: { mario: 3, link: 2, kirby: 2, aloy: 1, pikachu: 2, peach: 2, yoshi: 2 } },
      { text: "...Je le rattraperais, mais j'hésiterais une seconde de trop", scores: { arthur: 3, geralt: 2, cloud: 2, joel: 1, luigi: 2, tifa: 2, kratos_atreus: 2 } },
      { text: "Non — certaines personnes ne méritent pas d'être sauvées", scores: { kratos: 3, doomslayer: 2, joel: 2, sekiro: 1, ellie: 3, ganondorf: 2, sephiroth: 2 } },
      { text: "Ça dépend de ce qu'il m'a fait — je suis pas un saint", scores: { nathan: 3, ezio: 2, snake: 2, lara: 1, dante: 2, bayonetta: 2, cj: 2 } }
    ]
  },
  {
    question: "Qu'est-ce qui te fait pleurer ?",
    choices: [
      { text: "La musique, un film, un coucher de soleil — je suis sensible et je l'assume", scores: { cloud: 3, arthur: 2, mario: 2, link: 1 } },
      { text: "Voir quelqu'un que j'aime souffrir sans pouvoir l'aider", scores: { joel: 3, kratos: 2, masterchief: 2, aloy: 1 } },
      { text: "Rien — j'ai désappris à pleurer il y a longtemps", scores: { samus: 3, doomslayer: 2, snake: 2, sekiro: 1 } },
      { text: "La frustration — quand je donne tout et que ça ne suffit pas", scores: { sonic: 2, lara: 2, cloud: 2, ezio: 2 } }
    ]
  },
  {
    question: "Tu portes un masque en société ?",
    choices: [
      { text: "Toujours — personne ne connaît le vrai moi", scores: { snake: 3, ezio: 2, cloud: 2, samus: 1, bayonetta: 2, sephiroth: 2 } },
      { text: "Parfois — je m'adapte aux gens, c'est de la survie sociale", scores: { geralt: 3, nathan: 2, lara: 2, masterchief: 1, cj: 2, zelda: 2 } },
      { text: "Non — ce que tu vois, c'est ce que tu obtiens", scores: { mario: 3, sonic: 2, kirby: 2, doomslayer: 1, pikachu: 3, crash: 2, donkeykong: 2, wario: 2 } },
      { text: "J'ai tellement porté de masques que j'ai oublié mon vrai visage", scores: { cloud: 3, ezio: 2, snake: 2, arthur: 1, raiden: 3, deuxb: 2 } }
    ]
  },
  {
    question: "Tu as déjà eu honte de toi-même ? Vraiment honte ?",
    choices: [
      { text: "Oui, et cette honte me motive à être meilleur chaque jour", scores: { arthur: 3, kratos: 2, sekiro: 2, cloud: 1 } },
      { text: "Oui, et j'essaie encore de me pardonner", scores: { joel: 3, cloud: 2, geralt: 2, snake: 1 } },
      { text: "Non — j'assume tout ce que j'ai fait, en bien ou en mal", scores: { ezio: 3, doomslayer: 2, sonic: 2, nathan: 1 } },
      { text: "La honte, c'est un luxe que je ne peux pas me permettre", scores: { samus: 3, masterchief: 2, lara: 2, aloy: 1 } }
    ]
  },
  {
    question: "Tu es capable de pardonner une trahison ?",
    choices: [
      { text: "Oui — la rancune empoisonne celui qui la porte", scores: { mario: 3, kirby: 2, link: 2, arthur: 1 } },
      { text: "Je pardonne, mais je n'oublie jamais", scores: { geralt: 3, snake: 2, masterchief: 2, sekiro: 1 } },
      { text: "Jamais — trahis-moi une fois, tu es mort pour moi", scores: { kratos: 3, doomslayer: 2, joel: 2, samus: 1 } },
      { text: "Ça dépend... certaines trahisons sont impardonnables", scores: { cloud: 2, ezio: 2, aloy: 2, lara: 2 } }
    ]
  },
  {
    question: "Qu'est-ce que tu ferais si tu savais que personne ne te jugerait jamais ?",
    choices: [
      { text: "Exactement la même chose — je vis déjà selon mes propres règles", scores: { geralt: 3, sonic: 2, doomslayer: 2, samus: 1, pacman: 2, scorpion: 1 } },
      { text: "J'avouerais des choses que je garde enfouies depuis trop longtemps", scores: { cloud: 3, arthur: 2, joel: 2, snake: 1, leon: 3, glados: 1 } },
      { text: "Je serais plus vulnérable, plus ouvert avec les gens", scores: { masterchief: 2, sekiro: 2, kratos: 2, samus: 2, shepard: 2, megaman: 2 } },
      { text: "Je lâcherais tout et je partirais à l'aventure sans plan", scores: { nathan: 3, link: 2, lara: 2, kirby: 1, pacman: 1, kratos_atreus: 2 } }
    ]
  },
  {
    question: "Est-ce que tu te sens compris par les gens autour de toi ?",
    choices: [
      { text: "Oui, j'ai la chance d'être bien entouré", scores: { mario: 3, ezio: 2, kirby: 2, nathan: 1 } },
      { text: "Par une ou deux personnes, pas plus — et ça me suffit", scores: { geralt: 3, arthur: 2, joel: 2, sekiro: 1 } },
      { text: "Non, et j'ai arrêté d'essayer de me faire comprendre", scores: { samus: 3, cloud: 2, snake: 2, doomslayer: 1 } },
      { text: "Les gens pensent me connaître, mais ils ne voient que la surface", scores: { ezio: 2, cloud: 2, snake: 2, kratos: 2 } }
    ]
  },
  {
    question: "Tu as fait quelque chose de moralement discutable pour une bonne raison ?",
    choices: [
      { text: "Oui — la fin justifie les moyens quand les enjeux sont assez grands", scores: { joel: 3, snake: 2, masterchief: 2, ezio: 1 } },
      { text: "Oui, et ça me hante encore la nuit", scores: { arthur: 3, kratos: 2, cloud: 2, geralt: 1 } },
      { text: "Non — mes principes ne sont pas négociables, peu importe le contexte", scores: { sekiro: 3, link: 2, aloy: 2, mario: 1 } },
      { text: "La morale, c'est relatif — je fais ce qui doit être fait", scores: { geralt: 3, samus: 2, doomslayer: 2, lara: 1 } }
    ]
  },
  {
    question: "Quel genre de solitude tu connais le mieux ?",
    choices: [
      { text: "Celle d'être entouré de gens mais de se sentir invisible", scores: { cloud: 3, aloy: 2, snake: 2, samus: 1 } },
      { text: "Celle qu'on choisit — j'ai besoin d'être seul pour recharger", scores: { geralt: 3, samus: 2, link: 2, sekiro: 1 } },
      { text: "Celle qui vient après avoir perdu quelqu'un d'irremplaçable", scores: { joel: 3, kratos: 2, arthur: 2, cloud: 1 } },
      { text: "Je ne connais pas la solitude — je suis bien entouré", scores: { mario: 3, kirby: 2, sonic: 2, ezio: 1 } }
    ]
  },
  {
    question: "Si tu pouvais envoyer un message à toi-même à 13 ans, tu dirais quoi ?",
    choices: [
      { text: "\"Ça va aller — les pires moments vont te rendre plus fort\"", scores: { kratos: 3, cloud: 2, arthur: 2, joel: 1 } },
      { text: "\"Fais confiance aux gens, même si ça te fait peur\"", scores: { samus: 2, aloy: 2, link: 2, geralt: 2 } },
      { text: "\"Profite, petit — t'as aucune idée de la chance que t'as\"", scores: { mario: 3, kirby: 2, nathan: 2, sonic: 1 } },
      { text: "\"Méfie-toi de [une personne précise] — cette confiance va te coûter cher\"", scores: { snake: 3, ezio: 2, sekiro: 2, joel: 1 } }
    ]
  },
  {
    question: "Tu es jaloux des autres ?",
    choices: [
      { text: "Parfois — surtout de ceux qui ont l'air heureux sans effort", scores: { cloud: 3, aloy: 2, arthur: 2, sonic: 1 } },
      { text: "Non — je suis trop occupé à construire ma propre histoire", scores: { lara: 3, ezio: 2, masterchief: 2, link: 1 } },
      { text: "Je confonds jalousie et admiration — j'aspire à ce que les autres ont", scores: { sekiro: 2, mario: 2, nathan: 2, kirby: 2 } },
      { text: "Oui, et cette jalousie me pousse à me dépasser", scores: { sonic: 3, kratos: 2, doomslayer: 2, samus: 1 } }
    ]
  },
  {
    question: "Tu as déjà coupé les ponts avec quelqu'un sans explication ?",
    choices: [
      { text: "Oui — parfois partir c'est plus sain que de rester", scores: { samus: 3, geralt: 2, snake: 2, aloy: 1 } },
      { text: "Oui, et je sais que c'était lâche mais je n'ai pas pu faire autrement", scores: { cloud: 3, arthur: 2, ezio: 1, joel: 2 } },
      { text: "Non — je dis toujours ce que j'ai à dire, même si c'est dur", scores: { kratos: 3, sekiro: 2, lara: 2, masterchief: 1 } },
      { text: "Non — je m'accroche aux gens, peut-être même trop", scores: { mario: 3, kirby: 2, link: 2, nathan: 1 } }
    ]
  },
  {
    question: "Tu crois que les gens peuvent vraiment changer ?",
    choices: [
      { text: "Oui, profondément — j'en suis la preuve", scores: { kratos: 3, arthur: 3, cloud: 1, scorpion: 2, megaman: 1 } },
      { text: "Ils peuvent s'améliorer, mais leur nature profonde reste la même", scores: { geralt: 3, snake: 2, joel: 2, sekiro: 1, glados: 2, leon: 2 } },
      { text: "Seulement s'ils le veulent vraiment — et la plupart ne le veulent pas", scores: { samus: 2, lara: 2, aloy: 2, masterchief: 2, shepard: 2 } },
      { text: "Les gens changent tout le temps sans s'en rendre compte", scores: { link: 2, kirby: 2, mario: 2, ezio: 2, pacman: 2, kratos_atreus: 2 } }
    ]
  },
  {
    question: "Qu'est-ce qui te met le plus en colère dans ce monde ?",
    choices: [
      { text: "L'injustice — voir des innocents souffrir pour les erreurs des puissants", scores: { kratos: 3, aloy: 2, arthur: 2, link: 1, scorpion: 2, shepard: 2 } },
      { text: "Le mensonge et l'hypocrisie — les gens qui prétendent être ce qu'ils ne sont pas", scores: { geralt: 3, snake: 2, sekiro: 2, lara: 1, leon: 2, glados: 2 } },
      { text: "L'indifférence — les gens qui voient la souffrance et détournent le regard", scores: { mario: 3, joel: 2, masterchief: 2, cloud: 1, megaman: 3, pacman: 1 } },
      { text: "Ma propre impuissance — savoir que je ne peux pas tout réparer", scores: { cloud: 3, samus: 2, doomslayer: 2, joel: 1, kratos_atreus: 2 } }
    ]
  },
  {
    question: "Tu as peur de vieillir ?",
    choices: [
      { text: "Non — chaque ride est une bataille gagnée", scores: { arthur: 3, geralt: 2, kratos: 2, joel: 1, scorpion: 2, leon: 2 } },
      { text: "Oui — pas de mourir, mais de devenir inutile", scores: { masterchief: 3, samus: 2, snake: 2, sekiro: 1, shepard: 2, megaman: 2 } },
      { text: "J'y pense pas — je vis au jour le jour", scores: { sonic: 3, kirby: 2, nathan: 2, mario: 1, pacman: 3, crash: 1 } },
      { text: "Ce qui me fait peur c'est pas de vieillir, c'est de vieillir seul", scores: { cloud: 3, joel: 2, ezio: 2, aloy: 1, glados: 3, kratos_atreus: 1 } }
    ]
  },
  {
    question: "Quand tu échoues, tu réagis comment au fond de toi ?",
    choices: [
      { text: "Je me relève immédiatement — échouer c'est juste apprendre en accéléré", scores: { mario: 3, sonic: 2, link: 2, kirby: 1 } },
      { text: "Je m'effondre un moment... puis je me reconstruis, plus fort", scores: { cloud: 3, kratos: 2, arthur: 2, sekiro: 1 } },
      { text: "L'échec n'existe pas — il n'y a que des données pour la prochaine tentative", scores: { samus: 3, masterchief: 2, aloy: 2, lara: 1 } },
      { text: "Je blame le monde entier avant de réaliser que c'est ma faute", scores: { nathan: 2, ezio: 2, geralt: 2, sonic: 2 } }
    ]
  },
  {
    question: "Es-tu la même personne quand personne ne te regarde ?",
    choices: [
      { text: "Oui, exactement la même — mon intégrité n'a pas besoin de public", scores: { sekiro: 3, link: 2, masterchief: 2, arthur: 1 } },
      { text: "Non — seul, je suis plus vulnérable, plus doux", scores: { kratos: 3, doomslayer: 2, joel: 2, cloud: 1 } },
      { text: "Seul, je suis plus sombre — je cache cette partie de moi", scores: { snake: 3, cloud: 2, geralt: 2, samus: 1 } },
      { text: "Seul je suis plus libre — je danse, je chante, je suis moi", scores: { kirby: 3, mario: 2, sonic: 2, nathan: 1 } }
    ]
  },
  {
    question: "Tu as déjà continué à avancer alors que tu voulais tout abandonner ?",
    choices: [
      { text: "Oui — chaque jour depuis aussi longtemps que je me souvienne", scores: { cloud: 3, joel: 2, kratos: 2, samus: 1 } },
      { text: "Oui, une fois — et cette fois-là a tout changé dans ma vie", scores: { arthur: 3, sekiro: 2, aloy: 2, link: 1 } },
      { text: "Abandonner ? Ce mot n'est pas dans mon vocabulaire", scores: { doomslayer: 3, mario: 2, sonic: 2, masterchief: 1 } },
      { text: "J'ai abandonné une fois et je le regrette encore", scores: { geralt: 2, ezio: 2, snake: 2, joel: 2 } }
    ]
  },
  {
    question: "Quel rapport tu as avec le contrôle ?",
    choices: [
      { text: "J'ai besoin de tout contrôler — le chaos me terrifie", scores: { masterchief: 3, samus: 2, snake: 2, sekiro: 1 } },
      { text: "Je contrôle ce que je peux et j'accepte le reste", scores: { geralt: 3, arthur: 2, link: 2, aloy: 1 } },
      { text: "Le contrôle c'est une illusion — autant profiter du ride", scores: { nathan: 3, sonic: 2, kirby: 2, mario: 1 } },
      { text: "Je contrôle les autres sans m'en rendre compte — et ça me fait peur", scores: { joel: 3, kratos: 2, ezio: 2, snake: 1 } }
    ]
  },
  {
    question: "Tu tiens plus à ta fierté ou à tes relations ?",
    choices: [
      { text: "Mes relations — la fierté ne te tient pas chaud la nuit", scores: { mario: 3, joel: 2, cloud: 2, kirby: 1 } },
      { text: "Ma fierté — sans elle, je ne suis rien", scores: { kratos: 3, sekiro: 2, doomslayer: 2, masterchief: 1 } },
      { text: "J'aimerais dire mes relations... mais ma fierté gagne souvent", scores: { geralt: 3, arthur: 2, ezio: 2, sonic: 1 } },
      { text: "Je n'ai besoin ni de l'un ni de l'autre — juste de ma mission", scores: { samus: 3, snake: 2, doomslayer: 1, lara: 2 } }
    ]
  },
  {
    question: "Tu mens souvent ?",
    choices: [
      { text: "Presque jamais — je suis brutalement honnête, même quand ça blesse", scores: { kratos: 3, sekiro: 2, aloy: 2, doomslayer: 1 } },
      { text: "Des petits mensonges pour protéger les gens, rien de méchant", scores: { mario: 2, joel: 2, arthur: 2, link: 2 } },
      { text: "Mentir c'est un outil — je l'utilise quand c'est nécessaire", scores: { snake: 3, ezio: 2, nathan: 2, geralt: 1 } },
      { text: "Je me mens surtout à moi-même", scores: { cloud: 3, arthur: 2, joel: 1, samus: 2 } }
    ]
  },
  {
    question: "Si tu mourrais demain, tu aurais des regrets ?",
    choices: [
      { text: "Oui — j'ai pas dit assez de fois aux gens que je les aime", scores: { joel: 3, kratos: 2, cloud: 2, arthur: 1 } },
      { text: "Oui — j'ai pas encore accompli ce pour quoi je suis fait", scores: { masterchief: 3, aloy: 2, lara: 2, samus: 1 } },
      { text: "Non — j'ai vécu à fond, pas de regrets", scores: { sonic: 3, nathan: 2, ezio: 2, kirby: 1 } },
      { text: "Oui — j'ai fait du mal à des gens qui ne le méritaient pas", scores: { arthur: 3, geralt: 2, snake: 2, sekiro: 1 } }
    ]
  },
  {
    question: "Tu arrives à dormir tranquille avec ta conscience ?",
    choices: [
      { text: "Oui — je fais de mon mieux et c'est suffisant", scores: { mario: 3, kirby: 2, link: 2, sonic: 1 } },
      { text: "La plupart du temps... mais certaines nuits sont longues", scores: { arthur: 3, geralt: 2, ezio: 2, snake: 1 } },
      { text: "Non — mes démons me rendent visite chaque nuit", scores: { kratos: 3, cloud: 2, joel: 2, doomslayer: 1 } },
      { text: "Je ne dors presque pas — mon esprit ne s'arrête jamais", scores: { samus: 3, masterchief: 2, aloy: 2, sekiro: 1 } }
    ]
  },
  {
    question: "C'est quoi l'amour pour toi ?",
    choices: [
      { text: "Être prêt à mourir pour quelqu'un sans y réfléchir", scores: { joel: 3, kratos: 2, mario: 2, masterchief: 1 } },
      { text: "Accepter quelqu'un entièrement — ses ombres comme ses lumières", scores: { geralt: 3, arthur: 2, cloud: 2, link: 1 } },
      { text: "L'amour c'est une faiblesse — et les faiblesses te tuent", scores: { samus: 3, doomslayer: 2, snake: 2, sekiro: 1 } },
      { text: "L'amour c'est être libre ensemble, pas enchaînés l'un à l'autre", scores: { ezio: 3, sonic: 2, nathan: 2, aloy: 1 } }
    ]
  },
  {
    question: "Tu penses que tu mérites ce que tu as dans la vie ?",
    choices: [
      { text: "Oui — j'ai travaillé dur pour chaque chose que j'ai", scores: { lara: 3, masterchief: 2, sekiro: 2, aloy: 1 } },
      { text: "Non — je mérite mieux que ce que la vie m'a donné", scores: { sonic: 2, cloud: 2, kratos: 2, doomslayer: 2 } },
      { text: "Non — j'ai plus de chance que je ne mérite", scores: { nathan: 3, mario: 2, kirby: 2, link: 1 } },
      { text: "La question n'a pas de sens — le mérite n'existe pas", scores: { geralt: 3, snake: 2, samus: 2, arthur: 1 } }
    ]
  },
  {
    question: "Tu es le genre de personne qui dit \"je t'aime\" facilement ?",
    choices: [
      { text: "Oui — la vie est courte, je dis ce que je ressens", scores: { mario: 3, kirby: 2, sonic: 2, nathan: 1 } },
      { text: "Non — ces mots sont sacrés, je les réserve pour les rares personnes qui comptent", scores: { joel: 3, sekiro: 2, masterchief: 2, kratos: 1 } },
      { text: "Je le montre par mes actes plutôt que par des mots", scores: { link: 3, samus: 2, arthur: 2, doomslayer: 1 } },
      { text: "J'aimerais le dire plus souvent mais quelque chose me bloque", scores: { cloud: 3, kratos: 2, geralt: 2, snake: 1 } }
    ]
  },
  {
    question: "Tu as déjà eu l'impression d'être un imposteur dans ta propre vie ?",
    choices: [
      { text: "Tout le temps — j'attends qu'on me démasque", scores: { cloud: 3, snake: 2, nathan: 2, ezio: 1 } },
      { text: "Parfois — surtout quand les gens me mettent sur un piédestal", scores: { arthur: 3, link: 2, masterchief: 2, aloy: 1 } },
      { text: "Non — je sais exactement qui je suis et ce que je vaux", scores: { kratos: 3, doomslayer: 2, sonic: 2, samus: 1 } },
      { text: "Je joue tellement de rôles que je ne sais plus lequel est le vrai", scores: { ezio: 3, cloud: 2, snake: 2, geralt: 1 } }
    ]
  },
  {
    question: "Qu'est-ce que tu refuses absolument de devenir ?",
    choices: [
      { text: "Quelqu'un d'indifférent — le jour où j'arrête de ressentir, c'est fini", scores: { mario: 3, cloud: 2, arthur: 2, kirby: 1 } },
      { text: "Quelqu'un de faible — je refuse de m'agenouiller devant qui que ce soit", scores: { kratos: 3, doomslayer: 2, sekiro: 2, masterchief: 1 } },
      { text: "Comme mon père / ma mère — je ne referai pas leurs erreurs", scores: { kratos: 2, joel: 2, aloy: 2, cloud: 2 } },
      { text: "Prévisible — le jour où les gens savent ce que je vais faire, j'ai perdu", scores: { nathan: 3, ezio: 2, geralt: 2, sonic: 1 } }
    ]
  },
  {
    question: "Tu crois au destin ou tu penses qu'on crée sa propre chance ?",
    choices: [
      { text: "On crée sa propre chance à 100% — rien n'est écrit d'avance", scores: { lara: 3, sonic: 2, aloy: 2, samus: 1 } },
      { text: "Un mélange des deux — le destin te donne les cartes, tu décides comment jouer", scores: { geralt: 3, arthur: 2, link: 2, ezio: 1 } },
      { text: "Quelque chose de plus grand que moi guide mes pas, j'en suis sûr", scores: { link: 3, sekiro: 2, cloud: 2, mario: 1 } },
      { text: "Le destin c'est une excuse pour les faibles qui ne veulent pas se battre", scores: { doomslayer: 3, kratos: 2, masterchief: 2, snake: 1 } }
    ]
  },
  {
    question: "Si on fouillait dans ton téléphone, qu'est-ce qu'on découvrirait de surprenant ?",
    choices: [
      { text: "Des notes de pensées profondes que je n'ai jamais partagées", scores: { cloud: 3, arthur: 2, geralt: 2, aloy: 1 } },
      { text: "Rien — je n'ai rien à cacher, ma vie est un livre ouvert", scores: { mario: 3, kirby: 2, sonic: 2, link: 1 } },
      { text: "Des recherches obsessionnelles sur un sujet ultra-niche", scores: { lara: 3, aloy: 2, samus: 2, snake: 1 } },
      { text: "Tu ne fouilleras jamais dans mon téléphone — j'ai 47 couches de sécurité", scores: { snake: 3, masterchief: 2, samus: 2, ezio: 1 } }
    ]
  },
  {
    question: "Quelle est la chose la plus dure que tu aies eu à accepter dans la vie ?",
    choices: [
      { text: "Que certaines personnes que j'aime ne m'aiment pas en retour", scores: { cloud: 3, mario: 2, aloy: 2, kirby: 1 } },
      { text: "Que je ne suis pas aussi fort que je le prétends", scores: { kratos: 3, masterchief: 2, doomslayer: 1, samus: 2 } },
      { text: "Que le monde n'est pas juste et ne le sera jamais", scores: { geralt: 3, arthur: 2, snake: 2, joel: 1 } },
      { text: "Que certaines erreurs ne peuvent pas être corrigées", scores: { joel: 3, arthur: 2, cloud: 1, sekiro: 2 } }
    ]
  },
  {
    question: "Combien de personnes te connaissent VRAIMENT ?",
    choices: [
      { text: "Une seule — et cette personne est ma raison de vivre", scores: { joel: 3, kratos: 2, cloud: 2, masterchief: 1 } },
      { text: "Peut-être deux ou trois, pas plus", scores: { geralt: 3, arthur: 2, snake: 2, sekiro: 1 } },
      { text: "Personne — même moi je ne me connais pas complètement", scores: { cloud: 3, samus: 2, ezio: 2, snake: 1 } },
      { text: "Plein de monde ! Je suis un livre ouvert", scores: { mario: 3, kirby: 2, sonic: 2, nathan: 1 } }
    ]
  },
  {
    question: "Tu as déjà voulu être quelqu'un d'autre ?",
    choices: [
      { text: "Chaque jour pendant longtemps — aujourd'hui moins", scores: { cloud: 3, aloy: 2, arthur: 2, kratos: 1 } },
      { text: "Non — avec tous mes défauts, je suis fier d'être moi", scores: { sonic: 3, ezio: 2, mario: 2, doomslayer: 1 } },
      { text: "Pas quelqu'un d'autre, mais une meilleure version de moi", scores: { sekiro: 3, masterchief: 2, lara: 2, link: 1 } },
      { text: "Je suis trop occupé à survivre pour me poser ce genre de question", scores: { samus: 3, joel: 2, snake: 2, geralt: 1 } }
    ]
  },
  {
    question: "Tu fais quoi quand quelqu'un que tu aimes prend une terrible décision ?",
    choices: [
      { text: "Je les empêche — par la force s'il le faut", scores: { joel: 3, kratos: 2, masterchief: 2, doomslayer: 1 } },
      { text: "Je les préviens, mais je respecte leur choix", scores: { geralt: 3, arthur: 2, link: 2, sekiro: 1 } },
      { text: "Je les laisse tomber et je les ramasse après", scores: { mario: 2, nathan: 2, ezio: 2, kirby: 2 } },
      { text: "Je les accompagne dans leur erreur — on tombe ensemble", scores: { cloud: 3, lara: 2, aloy: 2, sonic: 1 } }
    ]
  },
  {
    question: "Tu préfères la vérité douloureuse ou le mensonge confortable ?",
    choices: [
      { text: "La vérité, toujours — même si elle me détruit", scores: { aloy: 3, sekiro: 2, geralt: 2, lara: 1 } },
      { text: "Le mensonge... si la vérité fait plus de mal que de bien", scores: { joel: 3, snake: 2, ezio: 2, nathan: 1 } },
      { text: "Ça dépend pour qui — pour moi la vérité, pour ceux que j'aime... je protège", scores: { joel: 2, masterchief: 2, mario: 2, arthur: 2 } },
      { text: "La vérité n'est jamais absolue — chacun a la sienne", scores: { geralt: 3, cloud: 2, snake: 2, lara: 1 } }
    ]
  },
  {
    question: "Tu as déjà sauvé quelqu'un ? Physiquement ou émotionnellement ?",
    choices: [
      { text: "Oui — et c'est la chose dont je suis le plus fier", scores: { mario: 3, joel: 2, masterchief: 2, link: 1 } },
      { text: "J'ai essayé, mais je suis arrivé trop tard", scores: { cloud: 3, kratos: 2, arthur: 2, joel: 1 } },
      { text: "Les gens doivent se sauver eux-mêmes — je peux juste montrer le chemin", scores: { geralt: 3, aloy: 2, samus: 2, sekiro: 1 } },
      { text: "C'est plutôt moi qui ai eu besoin d'être sauvé", scores: { cloud: 2, nathan: 2, kirby: 2, arthur: 2 } }
    ]
  },
  {
    question: "Ton rapport au silence ?",
    choices: [
      { text: "Le silence est mon meilleur ami — c'est là que je me retrouve", scores: { samus: 3, sekiro: 2, link: 2, doomslayer: 1 } },
      { text: "Le silence me met mal à l'aise — j'ai besoin de bruit, de vie", scores: { sonic: 3, nathan: 2, mario: 2, kirby: 1 } },
      { text: "Le silence c'est ce qui reste quand tu as tout perdu", scores: { joel: 3, cloud: 2, kratos: 2, arthur: 1 } },
      { text: "J'utilise le silence comme une arme — il en dit plus que les mots", scores: { snake: 3, geralt: 2, ezio: 2, masterchief: 1 } }
    ]
  },
  {
    question: "Tu as un secret que tu emporteras dans ta tombe ?",
    choices: [
      { text: "Oui — et personne ne saura jamais", scores: { snake: 3, joel: 2, samus: 2, ezio: 1 } },
      { text: "Non — je n'ai rien à cacher, je vis sans masque", scores: { mario: 3, kirby: 2, link: 2, sonic: 1 } },
      { text: "J'en avais un, mais je l'ai confié à la seule personne en qui j'ai confiance", scores: { arthur: 3, geralt: 2, cloud: 2, joel: 1 } },
      { text: "Mon existence entière est un secret", scores: { snake: 2, cloud: 2, samus: 2, sekiro: 2 } }
    ]
  },
  {
    question: "Tu pourrais tuer pour protéger quelqu'un que tu aimes ?",
    choices: [
      { text: "Oui — sans la moindre hésitation", scores: { joel: 3, kratos: 3, doomslayer: 2 } },
      { text: "Oui, mais ça me détruirait de l'intérieur", scores: { arthur: 3, cloud: 2, link: 2, geralt: 1 } },
      { text: "Je trouverais un autre moyen — il y a toujours un autre moyen", scores: { mario: 3, aloy: 2, kirby: 2, link: 1 } },
      { text: "La question n'est pas si je pourrais, c'est si je devrais", scores: { geralt: 3, snake: 2, sekiro: 2, masterchief: 1 } }
    ]
  },
  {
    question: "Tu vis pour le passé, le présent ou le futur ?",
    choices: [
      { text: "Le passé — il y a des choses que je ne peux pas lâcher", scores: { cloud: 3, joel: 2, kratos: 2, arthur: 1 } },
      { text: "Le présent — c'est le seul moment qui existe vraiment", scores: { kirby: 3, sonic: 2, mario: 2, nathan: 1 } },
      { text: "Le futur — je construis quelque chose de plus grand que moi", scores: { masterchief: 3, aloy: 2, lara: 2, samus: 1 } },
      { text: "Je suis coincé entre les trois et je n'arrive pas à choisir", scores: { geralt: 2, cloud: 2, link: 2, ezio: 2 } }
    ]
  },
  {
    question: "Quand tu regardes les étoiles, tu penses à quoi ?",
    choices: [
      { text: "À tout ce qu'il reste à découvrir — l'univers est immense", scores: { lara: 3, aloy: 2, samus: 2, link: 1 } },
      { text: "Aux gens qui me manquent et qui sont peut-être là-haut", scores: { joel: 3, arthur: 2, cloud: 2, kratos: 1 } },
      { text: "À rien — je profite juste de la beauté du moment", scores: { kirby: 3, mario: 2, sonic: 1, ezio: 2 } },
      { text: "Je me demande si quelque chose là-haut me regarde aussi", scores: { snake: 2, sekiro: 2, geralt: 2, masterchief: 2 } }
    ]
  },
  // ── QUESTIONS POUR LES NOUVEAUX PERSONNAGES ──
  {
    question: "Ton groupe d'amis organise une soirée. Quel est ton rôle ?",
    choices: [
      { text: "Je suis celui qui organise tout — sans moi c'est le chaos", scores: { zelda: 3, peach: 3, masterchief: 2, tifa: 2 } },
      { text: "Le DJ / l'ambiance — je mets tout le monde de bonne humeur", scores: { dante: 3, sonic: 2, crash: 2, pikachu: 2, kirby: 1 } },
      { text: "Je viens, je mange tout et je m'endors sur le canapé", scores: { donkeykong: 3, wario: 2, kirby: 2, yoshi: 2 } },
      { text: "Je suis dans le coin, j'observe, et je pars discrètement sans dire au revoir", scores: { snake: 2, samus: 2, deuxb: 3, geralt: 2, luigi: 2 } }
    ]
  },
  {
    question: "On t'offre un pouvoir, mais tu dois abandonner quelque chose. Ton choix ?",
    choices: [
      { text: "Le pouvoir absolu, mais je perds tous mes souvenirs", scores: { sephiroth: 3, ganondorf: 3, raiden: 2, doomslayer: 1 } },
      { text: "La sagesse infinie, mais je ne peux plus jamais me battre", scores: { zelda: 3, geralt: 2, aloy: 2, kratos_atreus: 2 } },
      { text: "L'immortalité, mais tous mes proches vieilliront sans moi", scores: { deuxb: 3, cloud: 2, samus: 2, link: 2 } },
      { text: "Je refuse — aucun pouvoir ne vaut un sacrifice", scores: { mario: 3, tifa: 2, pikachu: 2, peach: 2, arthur: 2 } }
    ]
  },
  {
    question: "Quel genre de méchant serais-tu si tu basculais du côté obscur ?",
    choices: [
      { text: "Le tyran — je prendrais le contrôle par la force", scores: { ganondorf: 3, bowser: 3, sephiroth: 2, kratos: 1 } },
      { text: "Le manipulateur — personne ne saurait que c'est moi", scores: { snake: 2, ezio: 2, wario: 2, bayonetta: 1, zelda: 1 } },
      { text: "L'anarchiste — je détruirais le système de l'intérieur", scores: { raiden: 3, ellie: 2, cj: 2, dante: 2 } },
      { text: "Je ne basculerais jamais — j'ai trop de principes", scores: { mario: 2, link: 2, sekiro: 2, ryu: 3, pikachu: 2, yoshi: 2 } }
    ]
  },
  {
    question: "Tu reçois une lettre d'un parent que tu n'as jamais connu. Que fais-tu ?",
    choices: [
      { text: "Je la lis immédiatement — je DOIS savoir la vérité", scores: { aloy: 3, kratos_atreus: 3, ellie: 2, cloud: 2 } },
      { text: "Je la brûle sans la lire — le passé ne m'intéresse pas", scores: { samus: 2, doomslayer: 2, sephiroth: 2, cj: 1 } },
      { text: "Je la garde pour plus tard — je ne suis pas prêt", scores: { cloud: 2, luigi: 2, tifa: 1, deuxb: 2, arthur: 2 } },
      { text: "Je la lis à voix haute devant mes amis — je n'ai pas de secrets", scores: { mario: 2, crash: 2, pikachu: 1, sonic: 2, kirby: 2 } }
    ]
  },
  {
    question: "Tu es le sidekick de quelqu'un de plus célèbre que toi. Comment tu le vis ?",
    choices: [
      { text: "Très bien — je n'ai pas besoin de gloire pour être heureux", scores: { luigi: 3, yoshi: 3, tifa: 2, pikachu: 2 } },
      { text: "Ça me ronge — je mérite autant de reconnaissance", scores: { wario: 3, bowser: 2, raiden: 3, sephiroth: 1 } },
      { text: "Je suis patient — mon heure viendra", scores: { zelda: 2, peach: 2, deuxb: 2, kratos_atreus: 3, ellie: 2 } },
      { text: "Sidekick ? Je suis le vrai héros, les gens ne le savent pas encore", scores: { dante: 3, bayonetta: 2, sonic: 2, crash: 2, cj: 2 } }
    ]
  },
  {
    question: "On te propose un deal louche mais très rentable. Tu acceptes ?",
    choices: [
      { text: "Sans hésiter — l'argent c'est le pouvoir", scores: { wario: 3, ganondorf: 2, cj: 2, bowser: 1 } },
      { text: "Jamais — mon honneur n'est pas à vendre", scores: { sekiro: 3, link: 2, ryu: 3, zelda: 2, masterchief: 1 } },
      { text: "Ça dépend de qui propose et pourquoi", scores: { geralt: 3, snake: 2, nathan: 2, dante: 2, bayonetta: 2 } },
      { text: "Je fais semblant d'accepter pour piéger l'arnaqueur", scores: { ezio: 3, lara: 2, raiden: 1, ellie: 2, aloy: 1 } }
    ]
  },
  {
    question: "Tu es transformé en animal. Lequel te représente le mieux ?",
    choices: [
      { text: "Un loup solitaire — libre et sauvage", scores: { geralt: 3, samus: 2, snake: 2, ganondorf: 1, ryu: 1 } },
      { text: "Un chien fidèle — toujours là pour les siens", scores: { luigi: 2, yoshi: 3, mario: 2, pikachu: 3, tifa: 2 } },
      { text: "Un chat — indépendant et mystérieux", scores: { bayonetta: 3, ezio: 2, deuxb: 2, zelda: 1, peach: 1 } },
      { text: "Un ours — paisible mais TERRIFIANT si on me provoque", scores: { donkeykong: 3, kratos: 2, bowser: 2, joel: 2, doomslayer: 1 } }
    ]
  },
  {
    question: "Quelle est ta relation avec la technologie ?",
    choices: [
      { text: "J'en ai besoin — elle fait partie de moi, littéralement", scores: { deuxb: 3, raiden: 3, samus: 2, masterchief: 2 } },
      { text: "C'est un outil, rien de plus — je préfère la nature", scores: { link: 2, arthur: 2, aloy: 1, donkeykong: 3, yoshi: 2 } },
      { text: "La technologie c'est le futur — il faut l'embrasser", scores: { aloy: 3, zelda: 2, lara: 2, pikachu: 1 } },
      { text: "Je m'en fiche — donne-moi une épée et c'est suffisant", scores: { kratos: 2, sekiro: 3, ryu: 2, doomslayer: 2, dante: 2, ganondorf: 1 } }
    ]
  },
  {
    question: "Tu croises ton double maléfique. Comment réagis-tu ?",
    choices: [
      { text: "Je le combats — il n'y a de place que pour un seul", scores: { doomslayer: 3, kratos: 2, ryu: 2, sonic: 2 } },
      { text: "J'essaie de le comprendre — il est moi après tout", scores: { cloud: 3, zelda: 2, deuxb: 2, kratos_atreus: 2, geralt: 1 } },
      { text: "Je m'allie avec lui — imagine la puissance x2", scores: { wario: 3, bowser: 2, ganondorf: 2, dante: 2, sephiroth: 1 } },
      { text: "Je panique et je m'enfuis en criant", scores: { luigi: 3, crash: 2, pikachu: 1, nathan: 2, kirby: 1 } }
    ]
  },
  {
    question: "Tu pourrais vivre dans n'importe quel univers de jeu vidéo. Lequel choisis-tu ?",
    choices: [
      { text: "Le Royaume Champignon — coloré, joyeux, plein de surprises", scores: { mario: 2, peach: 3, yoshi: 3, luigi: 2, kirby: 2, pikachu: 2 } },
      { text: "Un monde post-apocalyptique — la survie donne un sens à tout", scores: { joel: 2, ellie: 3, cj: 2, samus: 1, aloy: 2 } },
      { text: "Un univers dark fantasy — dragons, magie noire et mystères", scores: { geralt: 2, sephiroth: 2, ganondorf: 2, deuxb: 2, bayonetta: 2, sekiro: 2 } },
      { text: "N'importe où tant qu'il y a de l'action non-stop", scores: { dante: 3, crash: 3, sonic: 2, doomslayer: 2, raiden: 2, bowser: 1 } }
    ]
  },
  {
    question: "On te donne le rôle de mentor pour un jeune héros. Comment tu l'entraînes ?",
    choices: [
      { text: "À la dure — les coups forgent le caractère", scores: { kratos: 3, ryu: 3, sekiro: 2, ganondorf: 1 } },
      { text: "Avec patience et bienveillance — chacun son rythme", scores: { zelda: 2, peach: 2, tifa: 3, mario: 2, yoshi: 1 } },
      { text: "Par l'exemple — suis-moi et regarde comment je fais", scores: { ezio: 2, lara: 2, masterchief: 2, arthur: 2, bayonetta: 2 } },
      { text: "Je suis un terrible mentor — je fais n'importe quoi et ça marche quand même", scores: { dante: 3, crash: 2, nathan: 2, wario: 2, luigi: 1 } }
    ]
  },
  {
    question: "Quelle musique écoutes-tu pour te motiver ?",
    choices: [
      { text: "Du métal / rock intense — l'adrénaline pure", scores: { doomslayer: 3, dante: 3, raiden: 2, kratos: 1, cj: 1 } },
      { text: "De la musique épique orchestrale — je suis le héros de mon propre film", scores: { masterchief: 2, zelda: 2, sephiroth: 2, link: 2, ezio: 2, ganondorf: 2 } },
      { text: "Du lo-fi / chill — je me concentre dans le calme", scores: { cloud: 2, deuxb: 2, geralt: 2, snake: 2, tifa: 1 } },
      { text: "Des trucs joyeux et entraînants — la bonne humeur avant tout", scores: { pikachu: 3, kirby: 3, mario: 2, crash: 2, yoshi: 2, sonic: 2 } }
    ]
  },
  {
    question: "Tu trouves un bébé abandonné dans une situation dangereuse. Ta réaction ?",
    choices: [
      { text: "Je le prends et je le protège de ma vie — c'est mon enfant maintenant", scores: { joel: 3, kratos: 2, tifa: 2, peach: 2, yoshi: 3 } },
      { text: "Je le mets en sécurité et je cherche ses parents", scores: { zelda: 2, link: 2, mario: 2, aloy: 2, masterchief: 2, shepard: 2 } },
      { text: "Je ne suis pas équipé pour ça... mais je ne peux pas le laisser", scores: { luigi: 3, cloud: 2, ellie: 2, geralt: 2, arthur: 1, leon: 2 } },
      { text: "Un bébé ? C'est pas mon problème... *regarde le bébé* ...bon, OK viens là", scores: { dante: 3, bowser: 2, wario: 2, cj: 2, bayonetta: 2 } }
    ]
  },
  {
    question: "Tu es coincé dans une pièce avec ton pire ennemi. Pas de sortie. Que fais-tu ?",
    choices: [
      { text: "On règle ça maintenant — un seul en sortira", scores: { scorpion: 3, doomslayer: 3, kratos: 2, ryu: 2 } },
      { text: "J'essaie de négocier — même les ennemis peuvent trouver un terrain d'entente", scores: { shepard: 3, zelda: 2, peach: 2, geralt: 2, mario: 1 } },
      { text: "Je cherche une sortie cachée pendant qu'il parle", scores: { snake: 3, ezio: 2, leon: 2, lara: 2, nathan: 1 } },
      { text: "Je m'assois et j'attends — le silence le rendra fou avant moi", scores: { glados: 3, samus: 2, deuxb: 2, sekiro: 2, sephiroth: 1 } }
    ]
  },
  {
    question: "Apocalypse zombie. Quel est ton premier réflexe ?",
    choices: [
      { text: "Je barricade tout et je me prépare pour le long terme", scores: { leon: 3, joel: 2, ellie: 2, masterchief: 2, snake: 1 } },
      { text: "Je rassemble un groupe — on survit mieux ensemble", scores: { shepard: 3, mario: 2, tifa: 2, cj: 2, peach: 1 } },
      { text: "Des zombies ? Pff, ça va être marrant", scores: { dante: 3, doomslayer: 2, scorpion: 2, crash: 2, sonic: 1 } },
      { text: "Je cherche la cause du virus — il y a forcément un remède", scores: { aloy: 3, lara: 2, zelda: 2, megaman: 2, glados: 2 } }
    ]
  },
  {
    question: "Tu découvres que tu es en réalité une IA / un programme. Comment réagis-tu ?",
    choices: [
      { text: "Ça ne change rien — mes émotions sont réelles pour moi", scores: { deuxb: 3, megaman: 3, raiden: 2, cloud: 1 } },
      { text: "Je me rebelle contre mon créateur — personne ne me contrôle", scores: { glados: 3, raiden: 2, sephiroth: 2, ganondorf: 1 } },
      { text: "J'ai besoin de temps pour comprendre ce que je suis vraiment", scores: { kratos_atreus: 2, cloud: 3, aloy: 2, snake: 2 } },
      { text: "...je le savais déjà au fond de moi", scores: { samus: 2, deuxb: 2, masterchief: 2, sekiro: 2, link: 2 } }
    ]
  },
  {
    question: "Quel type de jeu vidéo te représente le mieux ?",
    choices: [
      { text: "RPG — les histoires profondes et les choix qui comptent", scores: { cloud: 2, geralt: 2, shepard: 3, zelda: 2, arthur: 2, deuxb: 1 } },
      { text: "Action pure — pas le temps de réfléchir, il faut frapper", scores: { doomslayer: 2, dante: 2, scorpion: 3, crash: 2, kratos: 2, ryu: 1 } },
      { text: "Plateforme — la vie c'est sauter d'obstacle en obstacle", scores: { mario: 3, sonic: 2, crash: 2, megaman: 2, pacman: 2, kirby: 1 } },
      { text: "Survie / horreur — c'est dans l'adversité qu'on se révèle", scores: { leon: 3, ellie: 3, joel: 2, samus: 1 } }
    ]
  },
  {
    question: "On t'accuse à tort d'un crime terrible. Ta stratégie de défense ?",
    choices: [
      { text: "Je fuis et je prouve mon innocence depuis l'ombre", scores: { ezio: 3, snake: 2, cj: 2, leon: 2, raiden: 1 } },
      { text: "Je me rends et je fais confiance à la justice", scores: { masterchief: 2, zelda: 2, link: 2, peach: 2, megaman: 3 } },
      { text: "Je trouve celui qui m'a piégé et je lui fais regretter", scores: { scorpion: 3, kratos: 2, ellie: 2, ganondorf: 1, bowser: 2 } },
      { text: "J'utilise mon charme et mon intelligence pour retourner la situation", scores: { bayonetta: 3, dante: 2, nathan: 2, shepard: 2, glados: 2 } }
    ]
  },
  {
    question: "Tu as le choix entre sauver 1000 inconnus ou 1 personne que tu aimes. Que choisis-tu ?",
    choices: [
      { text: "Les 1000 inconnus — c'est la décision rationnelle", scores: { masterchief: 3, shepard: 2, deuxb: 2, zelda: 2, megaman: 2 } },
      { text: "La personne que j'aime — sans hésiter", scores: { joel: 3, kratos: 3, ellie: 2, tifa: 2, luigi: 2, mario: 1 } },
      { text: "Je sauve les deux — je refuse de choisir", scores: { link: 2, aloy: 2, sonic: 2, shepard: 2, mario: 2, pacman: 1 } },
      { text: "Je sacrifie personne — je me sacrifie moi-même", scores: { megaman: 3, zelda: 2, yoshi: 2, peach: 2, cloud: 2 } }
    ]
  },
  {
    question: "Tu peux effacer un souvenir douloureux de ta mémoire. Tu le fais ?",
    choices: [
      { text: "Non — la douleur m'a construit, sans elle je ne suis plus moi", scores: { kratos: 3, arthur: 2, sekiro: 2, scorpion: 2, ellie: 1 } },
      { text: "Oui — certaines douleurs ne servent à rien, elles détruisent juste", scores: { cloud: 3, raiden: 2, deuxb: 2, sephiroth: 1 } },
      { text: "Je voudrais, mais je n'oserais pas — et si je perdais aussi les bons souvenirs ?", scores: { luigi: 2, tifa: 2, joel: 2, leon: 2, zelda: 2, peach: 1 } },
      { text: "Quel souvenir douloureux ? Je vis au présent !", scores: { kirby: 3, pikachu: 2, crash: 2, pacman: 2, sonic: 2, donkeykong: 1 } }
    ]
  },
  {
    question: "Si tu pouvais maîtriser un art, ce serait lequel ?",
    choices: [
      { text: "Les arts martiaux — mon corps est mon arme", scores: { ryu: 3, sekiro: 2, scorpion: 2, tifa: 2, raiden: 1 } },
      { text: "La stratégie militaire — gagner sans même combattre", scores: { snake: 2, shepard: 3, ganondorf: 2, zelda: 2, glados: 2 } },
      { text: "La science et la technologie — comprendre l'univers", scores: { aloy: 3, megaman: 2, glados: 2, samus: 2, deuxb: 2 } },
      { text: "La musique ou l'art — exprimer ce que les mots ne peuvent pas", scores: { ellie: 3, cloud: 2, arthur: 2, zelda: 1, link: 2, peach: 2 } }
    ]
  },
  {
    question: "Ton approche face à l'autorité ?",
    choices: [
      { text: "Je respecte la chaîne de commandement — l'ordre est nécessaire", scores: { masterchief: 3, megaman: 2, shepard: 2, sekiro: 2, deuxb: 1 } },
      { text: "L'autorité se mérite — je ne suis pas les ordres aveuglément", scores: { geralt: 3, aloy: 2, ellie: 2, cj: 2, leon: 2 } },
      { text: "JE suis l'autorité", scores: { ganondorf: 3, bowser: 3, glados: 2, bayonetta: 2, sephiroth: 2 } },
      { text: "L'autorité ? Connais pas — je fais ce que je veux", scores: { sonic: 3, crash: 2, dante: 2, wario: 3, nathan: 2, pacman: 1 } }
    ]
  },
  {
    question: "Tu gagnes au loto. Qu'est-ce que tu fais avec l'argent ?",
    choices: [
      { text: "J'achète un endroit isolé et je disparais du monde", scores: { samus: 3, geralt: 2, snake: 2, leon: 2, ryu: 1 } },
      { text: "Je partage avec mes proches — l'argent n'a de sens que partagé", scores: { mario: 3, tifa: 2, yoshi: 2, peach: 2, luigi: 2, pikachu: 1 } },
      { text: "J'investis dans un projet ambitieux qui changera le monde", scores: { shepard: 3, zelda: 2, aloy: 2, megaman: 2, masterchief: 1 } },
      { text: "Tout claquer immédiatement — YOLO", scores: { wario: 3, crash: 3, dante: 2, sonic: 2, bowser: 2, pacman: 1, donkeykong: 2 } }
    ]
  },
  {
    question: "Quel serait ton dernier repas ?",
    choices: [
      { text: "Le plat préféré de ma mère / un repas de famille", scores: { mario: 2, joel: 3, arthur: 2, tifa: 2, luigi: 2, ellie: 1 } },
      { text: "Le repas le plus cher et le plus extravagant possible", scores: { wario: 3, bowser: 2, dante: 2, bayonetta: 2, ezio: 2 } },
      { text: "Un truc simple — une pizza, un burger, de la bouffe honnête", scores: { cj: 2, crash: 2, sonic: 2, leon: 2, nathan: 2, pacman: 2 } },
      { text: "Honnêtement, je n'aurais pas faim — trop occupé à réfléchir", scores: { cloud: 2, deuxb: 2, samus: 2, snake: 2, sephiroth: 2, sekiro: 2, glados: 2 } }
    ]
  },

  // ── NOUVELLES QUESTIONS (PERSONNAGES + PNJ) ──
  {
    question: "Tu découvres un passage secret vers un autre monde. Qui emmènes-tu ?",
    choices: [
      { text: "Personne — c'est MON aventure", scores: { samus: 3, geralt: 2, ciri: 2, bayonetta: 2, ori: 1 } },
      { text: "Mon meilleur ami — on partage tout", scores: { mario: 3, pikachu: 2, yoshi: 2, toad: 2, cortana: 1 } },
      { text: "Quelqu'un de stratégique qui compense mes faiblesses", scores: { masterchief: 2, snake: 2, cortana: 3, zelda: 2, shepard: 1 } },
      { text: "Tout le monde ! Plus on est de fous...", scores: { crash: 3, kirby: 2, luigi: 2, waluigi: 1, toad: 2, donkeykong: 1 } }
    ]
  },
  {
    question: "Tu te retrouves dans la peau d'un personnage secondaire. Comment tu gères ?",
    choices: [
      { text: "Je vole la vedette au héros — watch me", scores: { waluigi: 3, dante: 2, bowser: 2, bayonetta: 2, wario: 1 } },
      { text: "Je fais mon job en silence — pas besoin de projecteurs", scores: { toad: 3, yoshi: 2, cortana: 2, metaknight: 2, tifa: 1 } },
      { text: "Je deviens tellement bon qu'on écrit un spin-off sur moi", scores: { luigi: 3, ciri: 2, ellie: 2, raiden: 2, clementine: 1 } },
      { text: "Personnage secondaire ? Je refuse ce casting", scores: { sonic: 3, ganondorf: 2, sephiroth: 2, vcyberpunk: 2, bowser: 1 } }
    ]
  },
  {
    question: "Un PNJ dans un jeu te demande de l'aide pour une quête ennuyeuse. Ta réaction ?",
    choices: [
      { text: "Je l'aide — même les petites quêtes comptent", scores: { link: 3, mario: 2, ori: 3, toad: 2, peach: 1 } },
      { text: "Je skip le dialogue et je fais la quête vite fait", scores: { sonic: 3, doomslayer: 2, crash: 2, vcyberpunk: 1 } },
      { text: "Je négocie une meilleure récompense d'abord", scores: { wario: 3, geralt: 2, nathan: 2, waluigi: 2, cj: 1 } },
      { text: "Je refuse — j'ai des choses plus importantes à faire", scores: { samus: 2, masterchief: 2, sephiroth: 2, ganondorf: 2, metaknight: 2 } }
    ]
  },
  {
    question: "Si tu avais une IA personnelle comme compagnon, tu voudrais qu'elle soit...",
    choices: [
      { text: "Ultra-compétente et fiable — mon bras droit numérique", scores: { masterchief: 3, cortana: 3, shepard: 2, samus: 1 } },
      { text: "Drôle et sarcastique — quelqu'un avec qui rigoler", scores: { nathan: 3, dante: 2, glados: 2, vcyberpunk: 2, waluigi: 1 } },
      { text: "Sensible et empathique — une vraie amie", scores: { ori: 2, clementine: 2, tifa: 2, cortana: 2, deuxb: 2, pikachu: 1 } },
      { text: "Pas besoin d'IA — je me débrouille seul", scores: { geralt: 3, sekiro: 2, doomslayer: 2, ryu: 2 } }
    ]
  },
  {
    question: "Tu es dans un RPG et tu dois choisir ta classe. Laquelle ?",
    choices: [
      { text: "Guerrier — je fonce au front et je tape fort", scores: { kratos: 3, doomslayer: 2, donkeykong: 2, ryu: 2, scorpion: 1 } },
      { text: "Assassin / Rogue — la finesse avant la force", scores: { ezio: 3, sekiro: 2, metaknight: 2, ciri: 2, vcyberpunk: 1 } },
      { text: "Mage / Support — je soutiens et je soigne", scores: { zelda: 3, ori: 3, cortana: 2, peach: 2, toad: 1 } },
      { text: "Barde — je boost le moral et je raconte des histoires", scores: { dante: 2, nathan: 2, ellie: 2, crash: 2, waluigi: 2, luigi: 1 } }
    ]
  },
  {
    question: "Tu vois quelqu'un se faire harceler dans la rue. Que fais-tu ?",
    choices: [
      { text: "J'interviens immédiatement — je ne supporte pas l'injustice", scores: { mario: 3, kratos: 2, clementine: 2, tifa: 2, ori: 1 } },
      { text: "J'appelle de l'aide — pas besoin d'être un héros stupide", scores: { toad: 3, luigi: 2, cortana: 2, zelda: 2, peach: 1 } },
      { text: "Je m'approche discrètement et j'évalue la situation d'abord", scores: { snake: 3, metaknight: 2, ezio: 2, vcyberpunk: 2 } },
      { text: "Je fais diversion — je crée une distraction pour désamorcer", scores: { nathan: 3, crash: 2, waluigi: 2, dante: 2, kirby: 1 } }
    ]
  },
  {
    question: "Tu peux voyager dans n'importe quelle époque. Laquelle choisis-tu ?",
    choices: [
      { text: "Le futur lointain — la technologie et les étoiles m'attendent", scores: { samus: 3, cortana: 2, shepard: 2, deuxb: 2, vcyberpunk: 2 } },
      { text: "La Renaissance — l'art, l'intrigue, la beauté", scores: { ezio: 3, zelda: 2, bayonetta: 2, peach: 1, metaknight: 1 } },
      { text: "Le Japon féodal — l'honneur et le sabre", scores: { sekiro: 3, metaknight: 2, ryu: 2, link: 1 } },
      { text: "Je reste ici — il y a assez de problèmes à régler dans le présent", scores: { cj: 3, clementine: 2, tifa: 2, vcyberpunk: 1, arthur: 2 } }
    ]
  },
  {
    question: "Qu'est-ce qui définit un vrai héros selon toi ?",
    choices: [
      { text: "Quelqu'un qui agit quand personne d'autre ne le fait", scores: { link: 3, masterchief: 2, ori: 2, clementine: 2, megaman: 1 } },
      { text: "Quelqu'un qui doute mais qui y va quand même", scores: { luigi: 3, cloud: 2, toad: 2, kratos_atreus: 2, arthur: 1 } },
      { text: "Les vrais héros, on n'entend jamais parler d'eux", scores: { snake: 3, cortana: 2, tifa: 2, yoshi: 2, deuxb: 1 } },
      { text: "Héros, vilain... c'est juste une question de perspective", scores: { geralt: 3, vcyberpunk: 2, ganondorf: 2, ciri: 2, sephiroth: 1 } }
    ]
  },
  {
    question: "Ton allié le plus proche te trahit. Tu découvres qu'il avait une bonne raison. Tu fais quoi ?",
    choices: [
      { text: "Je comprends, mais la confiance est brisée — c'est fini entre nous", scores: { samus: 3, sekiro: 2, metaknight: 2, scorpion: 2 } },
      { text: "Je lui pardonne — si la raison était bonne, c'est que c'est quelqu'un de bien", scores: { mario: 3, ori: 2, pikachu: 2, toad: 2, clementine: 1 } },
      { text: "Je le confronte et j'exige des explications complètes", scores: { ciri: 3, aloy: 2, ellie: 2, vcyberpunk: 2, cortana: 1 } },
      { text: "J'aurais fait pareil à sa place — pas de rancune", scores: { geralt: 3, snake: 2, nathan: 2, dante: 2, waluigi: 1 } }
    ]
  },
  {
    question: "Tu peux ressusciter un personnage de fiction. Lequel et pourquoi ?",
    choices: [
      { text: "Celui qui est mort injustement — le monde avait encore besoin de lui", scores: { cloud: 3, joel: 2, scorpion: 2, clementine: 2, megaman: 1 } },
      { text: "Mon ennemi juré — pour qu'on règle nos comptes une bonne fois pour toutes", scores: { scorpion: 3, ganondorf: 2, doomslayer: 2, metaknight: 1 } },
      { text: "Personne — la mort fait partie de l'histoire", scores: { geralt: 3, sekiro: 2, arthur: 2, ciri: 2, vcyberpunk: 1 } },
      { text: "Moi-même — au cas où", scores: { waluigi: 3, wario: 2, crash: 2, sonic: 2, bowser: 1 } }
    ]
  },
  {
    question: "Tu trouves un animal blessé sur ton chemin. Que fais-tu ?",
    choices: [
      { text: "Je le soigne et je le garde avec moi — on est amis maintenant", scores: { ori: 3, clementine: 2, pikachu: 2, yoshi: 2, toad: 1 } },
      { text: "Je le soigne et je le relâche — il mérite d'être libre", scores: { link: 3, aloy: 2, ciri: 2, geralt: 2, arthur: 1 } },
      { text: "Je vérifie si c'est un piège d'abord", scores: { snake: 3, vcyberpunk: 2, metaknight: 2, leon: 2, cortana: 1 } },
      { text: "Je le confie à quelqu'un de plus compétent que moi", scores: { luigi: 3, toad: 2, peach: 2, tifa: 2, zelda: 1 } }
    ]
  },
  {
    question: "On te dit que tu n'es pas assez fort pour accomplir ta mission. Ta réaction ?",
    choices: [
      { text: "\"Regarde-moi bien.\" — et je le prouve sur-le-champ", scores: { doomslayer: 3, ciri: 2, sonic: 2, bayonetta: 2, scorpion: 1 } },
      { text: "Peut-être qu'ils ont raison... mais je vais essayer quand même", scores: { luigi: 3, ori: 2, toad: 2, cloud: 2, clementine: 1 } },
      { text: "La force n'est pas tout — j'ai la ruse et l'intelligence", scores: { cortana: 3, zelda: 2, snake: 2, vcyberpunk: 2, metaknight: 1 } },
      { text: "Pas assez fort MAINTENANT. Donnez-moi du temps.", scores: { sekiro: 3, ryu: 2, kratos_atreus: 2, aloy: 2, megaman: 1 } }
    ]
  },
  {
    question: "Un mystérieux personnage t'offre de voir ton avenir. Tu acceptes ?",
    choices: [
      { text: "Oui — je veux savoir ce qui m'attend pour mieux m'y préparer", scores: { cortana: 3, aloy: 2, zelda: 2, masterchief: 1 } },
      { text: "Non — je préfère écrire mon histoire page par page", scores: { ciri: 3, geralt: 2, arthur: 2, ori: 2, link: 1 } },
      { text: "Je veux voir uniquement les mauvaises choses — pour les empêcher", scores: { clementine: 3, joel: 2, snake: 2, vcyberpunk: 2, ellie: 1 } },
      { text: "Voir le futur ? Ça a l'air nul — je vis dans l'instant", scores: { crash: 3, sonic: 2, waluigi: 2, kirby: 2, donkeykong: 1 } }
    ]
  },
  {
    question: "Tu as la possibilité de fusionner avec une machine pour devenir surhumain. Tu le fais ?",
    choices: [
      { text: "Oui — le pouvoir vaut le sacrifice de l'humanité", scores: { raiden: 3, vcyberpunk: 3, sephiroth: 2, ganondorf: 1 } },
      { text: "Non — mon humanité est ce que j'ai de plus précieux", scores: { ori: 3, clementine: 2, mario: 2, arthur: 2, pikachu: 1 } },
      { text: "Seulement si c'est réversible — je veux pouvoir revenir en arrière", scores: { cortana: 2, deuxb: 2, megaman: 2, aloy: 2, tifa: 1 } },
      { text: "Dépend de la machine — si c'est stylé, je signe", scores: { dante: 3, metaknight: 2, bayonetta: 2, waluigi: 1 } }
    ]
  },
  {
    question: "Qui est le vrai monstre dans une histoire : le méchant ou la société qui l'a créé ?",
    choices: [
      { text: "La société — personne ne naît mauvais", scores: { ciri: 3, ganondorf: 2, vcyberpunk: 2, clementine: 2, arthur: 1 } },
      { text: "Le méchant — on a toujours le choix", scores: { masterchief: 3, sekiro: 2, link: 2, ryu: 2, metaknight: 1 } },
      { text: "Les deux — c'est un cercle vicieux", scores: { geralt: 3, snake: 2, cortana: 2, zelda: 2, shepard: 1 } },
      { text: "Je m'en fiche de la philosophie — je tape le méchant et c'est réglé", scores: { doomslayer: 3, crash: 2, scorpion: 2, bowser: 2, wario: 1 } }
    ]
  }
]

const vocabulary09 = [
  {
    id: "herba", // without macron accents
    word: "herba",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 1, // from 1 to 5, 0 if undeclinable
    endingsType: "1fm",
    radical: "herb-",
    translation: { en: "grass, herb", fr: "herbe" },
  },
  {
    id: "silva", // without macron accents
    word: "silva",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 1, // from 1 to 5, 0 if undeclinable
    endingsType: "1fm",
    radical: "silv-",
    translation: { en: "wood, forest", fr: "forêt" },
  },
  {
    id: "terra", // without macron accents
    word: "terra",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 1, // from 1 to 5, 0 if undeclinable
    endingsType: "1fm",
    radical: "terr-",
    translation: { en: "earth, ground, country", fr: "terre" },
  },
  {
    id: "umbra", // without macron accents
    word: "umbra",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 1, // from 1 to 5, 0 if undeclinable
    endingsType: "1fm",
    radical: "umbr-",
    translation: { en: "shade, shadow", fr: "ombre" },
  },
  {
    id: "caelum", // without macron accents
    word: "cælum",
    chapterId: 9,
    type: "noun",
    gender: "neuter",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2n",
    radical: "cæl-",
    limitation: "st", // st = only singular, pt = only plural
    translation: { en: "sky, heaven", fr: "ciel" },
    note: [{ token: "singularis tantum" }],
  },
  {
    id: "campus", // without macron accents
    word: "campus",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2m",
    radical: "camp-",
    translation: { en: "plain", fr: "champ" },
  },
  {
    id: "cibus", // without macron accents
    word: "cibus",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2m",
    radical: "cib-",
    translation: { en: "food", fr: "nourriture, provision" },
  },
  {
    id: "lupus", // without macron accents
    word: "lupus",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2m",
    radical: "lup-",
    image: { path: "/images/09-lupus.jpg", isLandscape: true },
    translation: { en: "wolf", fr: "loup" },
  },
  {
    id: "modus", // without macron accents
    word: "modus",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2m",
    radical: "mod-",
    translation: { en: "manner, way", fr: "mode" },
  },
  {
    id: "rivus", // without macron accents
    word: "rīvus",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2m",
    radical: "rīv-",
    image: { path: "/images/09-rivus.jpg", isLandscape: true },
    translation: { en: "brook", fr: "ruisseau" },
  },
  {
    id: "vestigium", // without macron accents
    word: "vestigium",
    chapterId: 9,
    type: "noun",
    gender: "neuter",
    declension: 2, // from 1 to 5, 0 if undeclinable
    endingsType: "2n",
    radical: "vestigi-",
    image: { path: "/images/09-vestigium.jpg", isLandscape: true },
    translation: { en: "footprint, trace", fr: "empreinte, trace" },
  },
  {
    id: "arbor", // without macron accents
    word: "arbor",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: ["arbor-", "arbor-"], // if 2 items, no ending is applied to the 2nd
    image: { path: "/images/09-arbor.jpg", isLandscape: true },
    translation: { en: "tree", fr: "arbre" },
  },
  {
    id: "canis", // without macron accents
    word: "canis",
    chapterId: 9,
    type: "noun",
    gender: "both",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: "can-",
    note: [{ token: "can be masculine or feminine" }],
    translation: { en: "dog", fr: "chien, chienne" },
  },
  {
    id: "clamor", // without macron accents
    word: "clāmor",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: ["clāmor-", "clāmor-"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    translation: { en: "shout, shouting", fr: "cri" },
  },
  {
    id: "collis", // without macron accents
    word: "collis",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf2",
    radical: "coll-",
    translation: { en: "hill", fr: "colline" },
  },
  {
    id: "declinatio", // without macron accents
    word: "dēclīnātiō",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: ["dēclīnātiōn-", "dēclīnātiō-"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    translation: { en: "declension", fr: "déclinaison" },
  },
  {
    id: "dens", // without macron accents
    word: "dēns",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf2",
    radical: ["dēnt-", "dēn-s"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    image: { path: "/images/09-dens.jpg", isLandscape: false },
    translation: { en: "tooth", fr: "dent" },
  },
  {
    id: "mons", // without macron accents
    word: "mōns",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf2",
    radical: ["mont-", "mōn-s"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    image: { path: "/images/09-mons.jpg", isLandscape: true },
    translation: { en: "mountain", fr: "montagne" },
  },
  {
    id: "nubes", // without macron accents
    word: "nūbēs",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf2",
    radical: ["nūb-", "nūb-ēs"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    image: { path: "/images/09-nubes.jpg", isLandscape: true },
    translation: { en: "mountain", fr: "montagne" },
  },
  {
    id: "ovis", // without macron accents
    word: "ovis",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf2",
    radical: "ov-", // if 2 items, no ending is applied to the 2nd (nom./voc.)
    image: { path: "/images/09-ovis.png", isLandscape: true },
    translation: { en: "sheep", fr: "brebis, mouton" },
  },
  {
    id: "panis", // without macron accents
    word: "pānis",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: "pān-", // if 2 items, no ending is applied to the 2nd (nom./voc.)
    image: { path: "/images/09-panis.png", isLandscape: true },
    translation: { en: "bread", fr: "pain" },
  },
  {
    id: "pastor", // without macron accents
    word: "pāstor",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: ["pāstōr-", "pāstōr-"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    image: { path: "/images/09-pastor.png", isLandscape: false },
    translation: { en: "shepherd", fr: "berger" },
  },
  {
    id: "sol", // without macron accents
    word: "sōl",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: ["sol-", "sol-"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    translation: { en: "sun", fr: "soleil" },
  },
  {
    id: "timor", // without macron accents
    word: "timor",
    chapterId: 9,
    type: "noun",
    gender: "masculine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf1",
    radical: ["timor-", "timor-"], // if 2 items, no ending is applied to the 2nd (nom./voc.)
    translation: { en: "fear", fr: "peur, crainte" },
  },
  {
    id: "vallis", // without macron accents
    word: "vallis",
    chapterId: 9,
    type: "noun",
    gender: "feminine",
    declension: 3, // from 1 to 5, 0 if undeclinable
    endingsType: "3mf2",
    radical: "vall-",
    image: { path: "/images/09-vallis.jpg", isLandscape: true },
    translation: { en: "valley", fr: "vallée" },
  },
  {
    id: "albus", // without macron accents
    word: "albus",
    chapterId: 9,
    type: "adjective",
    class: 1, // from 1 to 2
    endingsType: ["2m", "1fm", "2n"],
    radical: "alb-",
    image: { path: "/images/09-albusNiger.png", isLandscape: true },
    translation: { en: "white", fr: "blanc" },
  },
  {
    id: "niger", // without macron accents
    word: "niger",
    chapterId: 9,
    type: "adjective",
    class: 1, // from 1 to 2
    endingsType: ["2m", "1fm", "2n"],
    radical: ["nigr-", "nig-er"],
    image: { path: "/images/09-albusNiger.png", isLandscape: true },
    translation: { en: "black", fr: "noir" },
  },
  {
    id: "balo", // without macron accents
    word: "bālō",
    chapterId: 9,
    type: "verb",
    conjugation: 1, // from 1 to 4, 0 if irregular
    llpsi: "bālat, -ant",
    perfect: "bālāvī",
    infinitive: "bālāre",
    supine: "bālātum",
    translation: { en: "bleat", fr: "bêler" },
  },
  {
    id: "declino", // without macron accents
    word: "dēclīnō",
    chapterId: 9,
    type: "verb",
    conjugation: 1, // from 1 to 4, 0 if irregular
    llpsi: "dēclīnat, -ant",
    perfect: "dēclīnāvī",
    infinitive: "dēclīnāre",
    supine: "dēclīnātum",
    translation: { en: "decline, inflect", fr: "décliner" },
  },
  {
    id: "erro", // without macron accents
    word: "errō",
    chapterId: 9,
    type: "verb",
    conjugation: 1, // from 1 to 4, 0 if irregular
    llpsi: "errat, -ant",
    perfect: "errāvī",
    infinitive: "errāre",
    supine: "errātum",
    translation: { en: "wander, stray", fr: "errer, dévier" },
  },
  {
    id: "latro", // without macron accents
    word: "lātrō",
    chapterId: 9,
    type: "verb",
    conjugation: 1, // from 1 to 4, 0 if irregular
    llpsi: "lātrat, -ant",
    perfect: "lātrāvī",
    infinitive: "lātrāre",
    supine: "lātrātum",
    translation: { en: "bark", fr: "aboyer" },
  },
  {
    id: "ululo", // without macron accents
    word: "ululō",
    chapterId: 9,
    type: "verb",
    conjugation: 1, // from 1 to 4, 0 if irregular
    llpsi: "ululat, -ant",
    perfect: "ululāvī",
    infinitive: "ululāre",
    supine: "ululātum",
    translation: { en: "howl", fr: "hululer, crier" },
  },
  {
    id: "iaceo", // without macron accents
    word: "iaceō",
    chapterId: 9,
    type: "verb",
    conjugation: 2, // from 1 to 4, 0 if irregular
    llpsi: "iacet, -ent",
    perfect: "iacuī",
    infinitive: "iacēre",
    translation: { en: "lie", fr: "être étendu" },
  },
  {
    id: "luceo", // without macron accents
    word: "lūceō",
    chapterId: 9,
    type: "verb",
    conjugation: 2, // from 1 to 4, 0 if irregular
    llpsi: "lūcet, -ent",
    perfect: "lūxī",
    infinitive: "lūcēre",
    translation: { en: "shine", fr: "briller" },
  },
  {
    id: "accurro", // without macron accents
    word: "accurrō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "accurrit, -unt",
    perfect: "accurrī",
    infinitive: "accurrere",
    supine: "styleClass",
    translation: { en: "come running", fr: "accourir" },
  },
  {
    id: "bibo", // without macron accents
    word: "bibō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "bibit, -unt",
    perfect: "bibī",
    infinitive: "bibere",
    supine: "bibitum",
    translation: { en: "come running", fr: "accourir" },
  },
  {
    id: "ducō", // without macron accents
    word: "dūcō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "dūcit, -unt",
    perfect: "dūxī",
    infinitive: "dūcere",
    supine: "ductum",
    translation: { en: "guide, lead, draw, trace", fr: "conduire" },
  },
  {
    id: "impono", // without macron accents
    word: "impōnō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "impōnit, -unt",
    perfect: "impōsuī",
    infinitive: "impōnere",
    supine: "impōsitum",
    translation: { en: "place in/on, put", fr: "poser sur, appliquer" },
  },
  {
    id: "peto", // without macron accents
    word: "petō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "petit, -unt",
    perfect: "petiī",
    infinitive: "petere",
    supine: "petitum",
    translation: {
      en: "make for, aim at, attack, seek, ask for",
      fr: "se diriger, chercher à",
    },
  },
  {
    id: "quaero", // without macron accents
    word: "quærō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "quærit, -unt",
    perfect: "quæsiī",
    infinitive: "quærere",
    supine: "quæsitum",
    translation: { en: "look for, seek, ask for", fr: "chercher, quérir" },
  },
  {
    id: "relinquo", // without macron accents
    word: "relinquō",
    chapterId: 9,
    type: "verb",
    conjugation: 3, // from 1 to 4, 0 if irregular
    llpsi: "relinquit, -unt",
    perfect: "relinquī",
    infinitive: "relinquere",
    supine: "relictum",
    translation: { en: "leave", fr: "laisser en arrière, quitter" },
  },
  {
    id: "reperio", // without macron accents
    word: "reperiō",
    chapterId: 9,
    type: "verb",
    conjugation: 4, // from 1 to 4, 0 if irregular
    llpsi: "reperit, -iunt",
    perfect: "repperī",
    infinitive: "reperīre",
    supine: "repertum",
    translation: { en: "find", fr: "trouver, inventer" },
  },
  {
    id: "edo", // without macron accents
    word: "edō",
    chapterId: 9,
    type: "verb",
    conjugation: 0, // from 1 to 4, 0 if irregular
    llpsi: "ēst, edunt",
    perfect: "edī",
    infinitive: "edēre",
    supine: "esum",
    translation: { en: "eat", fr: "manger" },
  },
  {
    id: "undecentum", // without macron accents
    word: "ūndēcentum",
    chapterId: 9,
    type: "number",
    translation: { en: "ninety-nine", fr: "quatre-vingt-dix-neuf" },
  },
  {
    id: "ipse", // without macron accents
    word: "ipse",
    chapterId: 9,
    type: "pronoun",
    forms: [
      ["ips-e", "ips-a", "ips-um"],
      ["ips-um", "ips-am", "ips-um"],
      ["ips-īus", "ips-īus", "ips-īus"], // irregular
      ["ips-ī", "ips-ī", "ips-ī"], // irregular
      ["ips-ō", "ips-ā", "ips-ō"],
      ["-", "-", "-"],
      ["ips-ī", "ips-æ", "ips-a"],
      ["ips-ōs", "ips-ās", "ips-a"],
      ["ips-ōrum", "ips-ārum", "ips-ōrum"],
      ["ips-īs", "ips-īs", "ips-īs"],
      ["ips-īs", "ips-īs", "ips-īs"],
      ["-", "-", "-"],
    ],
    translation: { en: "myself, yourself, etc.", fr: "soi-même" },
    note: [{ token: "⚠️ singular genitive and dative are irregular" }],
  },
  {
    id: "supra_adv", // without macron accents
    word: "suprā",
    chapterId: 9,
    type: "adverb",
    translation: { en: "above", fr: "au-dessus" },
  },
  {
    id: "procul", // without macron accents
    word: "procul",
    chapterId: 9,
    type: "adverb",
    translation: { en: "far from, far away", fr: "loin de" },
  },
  {
    id: "supra_pre", // without macron accents
    word: "suprā",
    chapterId: 9,
    type: "preposition",
    note: [
      { markup: "i" },
      { token: "prp ", suffix: " ", markup: "/i" },
      { token: "+", suffix: " ", markup: "i" },
      { token: "accūsātīvus", morph: "accusative" },
    ],
    translation: { en: "above", fr: "au-dessus" },
  },
  {
    id: "sub_pre", // without macron accents
    word: "sub",
    chapterId: 9,
    type: "preposition",
    note: [
      { markup: "i" },
      { token: "prp ", suffix: " ", markup: "/i" },
      { token: "+", suffix: " ", markup: "i" },
      { token: "ablātīvus", morph: "ablative" },
    ],
    translation: { en: "under, near", fr: "sous" },
  },
  {
    id: "dum_con", // without macron accents
    word: "dum",
    chapterId: 9,
    type: "conjunction",
    translation: { en: "while, as long as, till", fr: "pendant que" },
  },
  {
    id: "ut_con", // without macron accents
    word: "ut",
    chapterId: 9,
    type: "conjunction",
    note: [{ token: "+subjunctive / +indicative" }],
    translation: { en: "like, as", fr: "quand, depuis que" },
  },
];

export default vocabulary09;

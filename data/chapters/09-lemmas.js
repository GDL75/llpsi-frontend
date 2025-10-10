const lemmas09 = {
  undecentum: {
    chapterId: 9,
    title: "ūndēcentum",
    text: [
      {
        token: "ūn-dē-centum",
        suffix: " = ",
      },
      {
        token: "IC (99)",
      },
    ],
  },
  rivus: {
    chapterId: 9,
    title: "Rīvus, -ī, m, 2ª",
    image: { path: "/images/09-rivus.png", orientation: "landscape" },
    text: [
      {
        token: "rīv-us",
        gender: "masculinum",
        morph: "nominative",
        suffix: " = ",
      },
      {
        token: "parv-us",
        gender: "masculinum",
        morph: "nominative",
        suffix: " ",
      },
      {
        token: "fluvi-us",
        gender: "masculinum",
        morph: "nominative",
      },
    ],
  },
  ovis: {
    chapterId: 9,
    title: "ovis, -is, f, 3ª",
    image: { path: "/images/09-ovis.png", orientation: "landscape" },
    text: [
      {
        table: {
          r1c1: "feminine",
          cells: [
            { rowName: "nominative", singular: "ov-is", plural: "ov-ēs" },
            { rowName: "accusative", singular: "ov-em", plural: "ov-ēs" },
            { rowName: "genitive", singular: "ov-is", plural: "ov-ium" },
            { rowName: "dative", singular: "ov-ī", plural: "ov-ibus" },
            { rowName: "ablative", singular: "ov-e", plural: "ov-ibus" },
            { rowName: "vocative", singular: "ov-is", plural: "ov-ēs" },
          ],
        },
      },
    ],
  },
  panis: {
    chapterId: 9,
    title: "pānis, -is, m, 3ª",
    image: { path: "/images/09-panis.png", orientation: "landscape" },
    text: [
      {
        table: {
          r1c1: "masculine",
          cells: [
            { rowName: "nominative", singular: "pān-is", plural: "pān-ēs" },
            { rowName: "accusative", singular: "pān-em", plural: "pān-ēs" },
            { rowName: "genitive", singular: "pān-is", plural: "pān-um" },
            { rowName: "dative", singular: "pān-ī", plural: "pān-ibus" },
            { rowName: "ablative", singular: "pān-e", plural: "pān-ibus" },
            { rowName: "vocative", singular: "pān-is", plural: "pān-ēs" },
          ],
        },
      },
    ],
  },
  albus: {
    chapterId: 9,
    title: "albus, -a, -um",
    image: { path: "/images/09-albusNiger.png", orientation: "landscape" },
    text: [
      {
        token: "alb-us",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "a",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "um",
        morph: "nominative",
        suffix: " ⟷ ",
      },
      {
        token: "nig-er",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "r-a",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "r-um",
        morph: "nominative",
      },
    ],
  },
  niger: {
    chapterId: 9,
    title: "niger, -ra, -rum",
    image: { path: "/images/09-albusNiger.png", orientation: "landscape" },
    text: [
      {
        token: "alb-us",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "a",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "um",
        morph: "nominative",
        suffix: " ⟷ ",
      },
      {
        token: "nig-er",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "r-a",
        morph: "nominative",
        suffix: " -",
      },
      {
        token: "r-um",
        morph: "nominative",
      },
    ],
  },
  est: {
    chapterId: 9,
    title: "ēst edunt",
    text: [
      {
        token: "vir-",
        morph: "nominative",
        suffix: " ",
      },
      {
        token: "pān-em",
        morph: "accusative",
        suffix: " ",
      },
      {
        token: "ēst",
        markup: "br",
      },
      {
        token: "vir-ī",
        morph: "nominative",
        suffix: " ",
      },
      {
        token: "pān-em",
        morph: "accusative",
        suffix: " ",
      },
      {
        token: "edunt",
        markup: "/p",
      },
      {
        token: "⚠️ ",
        markup: "b",
      },
      {
        token: "ē",
        markup: "/b",
      },
      {
        token: "st ≠ ",
        markup: "b",
      },
      {
        token: "e",
        markup: "/b",
      },
      {
        token: "st",
      },
    ],
  },
  pastor: {
    chapterId: 9,
    title: "pāstor, -is, m, 3ª",
    image: { path: "/images/09-pastor.png", orientation: "portrait" },
    text: [
      {
        table: {
          r1c1: "masculine",
          cells: [
            { rowName: "nominative", singular: "pāstor-", plural: "pāstōr-ēs" },
            {
              rowName: "accusative",
              singular: "pāstōr-em",
              plural: "pāstōr-ēs",
            },
            { rowName: "genitive", singular: "pāstōr-is", plural: "pāstōr-um" },
            { rowName: "dative", singular: "pāstōr-ī", plural: "pāstōr-ibus" },
            {
              rowName: "ablative",
              singular: "pāstōr-e",
              plural: "pāstōr-ibus",
            },
            { rowName: "vocative", singular: "pāstor-", plural: "pāstōr-ēs" },
          ],
        },
      },
    ],
  },
};

export default lemmas09;

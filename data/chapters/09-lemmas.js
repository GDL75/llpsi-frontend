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
    image: "/images/09-rivus.png",
  },
  ovis: {
    chapterId: 9,
    title: "Ovis, -is, f, 3ª",
    text: [
      {
        table: {
          name: {
            title: "feminine",
            backgroundColor: "--color-feminine",
          },
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
    image: "/images/09-ovis.png",
  },
  panis: {
    chapterId: 9,
    title: "Pānis, -is, m, 3ª",
    text: [
      {
        table: {
          name: {
            title: "masculine",
            backgroundColor: "--color-masculine",
          },
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
    image: "/images/09-panis.png",
  },
};

export default lemmas09;

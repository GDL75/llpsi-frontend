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
        noun: {
          gender: "feminine",
          cases: [
            { case: "nominative", singular: "ov-is", plural: "ov-es" },
            { case: "accusative", singular: "ov-em", plural: "ov-es" },
            { case: "genitive", singular: "ov-is", plural: "ov-ium" },
            { case: "dative", singular: "ov-i", plural: "ov-ibus" },
            { case: "ablative", singular: "ov-e", plural: "ov-ibus" },
            { case: "vocative", singular: "ov-is", plural: "ov-es" },
          ],
        },
      },
    ],
  },
};

export default lemmas09;

const morphologyConfig = [
  {
    key: "masculine", // to update the corresponding words
    short: "mas", // to ease the text population
    styleClass: "morph-masculine", // to update the body
    fromChapter: 1, // where the concept appears
  },
  {
    key: "feminine",
    short: "fem",
    styleClass: "morph-feminine",
    fromChapter: 1,
  },
  {
    key: "neuter",
    short: "neu",
    styleClass: "morph-neuter",
    fromChapter: 2,
  },
  {
    key: "nominative",
    short: "nom",
    styleClass: "morph-nominative",
    fromChapter: 1,
  },
  {
    key: "accusative",
    short: "acc",
    styleClass: "morph-accusative",
    fromChapter: 3,
  },
  {
    key: "genitive",
    short: "gen",
    styleClass: "morph-genitive",
    fromChapter: 2,
  },
  {
    key: "dative",
    short: "dat",
    styleClass: "morph-dative",
    fromChapter: 7,
  },
  {
    key: "ablative",
    short: "abl",
    styleClass: "morph-ablative",
    fromChapter: 1,
  },
  {
    key: "vocative",
    short: "voc",
    styleClass: "morph-vocative",
    fromChapter: 4,
  },
  {
    key: "locative",
    short: "loc",
    styleClass: "morph-locative",
    fromChapter: 6,
  },
  {
    key: "indeclinable",
    short: "ind",
    styleClass: "morph-indeclinable",
    fromChapter: 0,
  },
  {
    key: "comparative",
    short: "com",
    styleClass: "morph-comparative",
    fromChapter: 12,
  },
  {
    key: "participle",
    short: "par",
    styleClass: "morph-participle",
    fromChapter: 14,
  },
  {
    key: "superlative",
    short: "sup",
    styleClass: "morph-superlative",
    fromChapter: 18,
  },
  {
    key: "gerund",
    short: "ger",
    styleClass: "morph-gerund",
    fromChapter: 25,
  },
  {
    key: "subjunctive",
    short: "sub",
    styleClass: "morph-subjunctive",
    fromChapter: 27,
  },
  {
    key: "imperative",
    short: "imp",
    styleClass: "morph-imperative",
    fromChapter: 4,
  },
  {
    key: "deponent",
    short: "dep",
    styleClass: "morph-deponent",
    fromChapter: 16,
  },
];

// Derived object to ease the morphFunction : { mas: "masculine", fem: "feminine",...}
export const morphMap = Object.fromEntries(
  morphologyConfig.map((m) => [m.short, m.key])
);

export default morphologyConfig;

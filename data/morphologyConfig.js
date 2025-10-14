// key: "masculine", // to update the corresponding words
// styleClass: "morph-masculine", // to update the body
// fromChapter: 1, // where the concept appears

//  ⚠️ For those items with styleClass, the order is the one appearing in sidebarRight
const morphologyConfig = [
  { key: "masculine", styleClass: "morph-masculine", fromChapter: 1 },
  { key: "feminine", styleClass: "morph-feminine", fromChapter: 1 },
  { key: "neuter", styleClass: "morph-neuter", fromChapter: 2 },
  { key: "nominative", styleClass: "morph-nominative", fromChapter: 1 },
  { key: "accusative", styleClass: "morph-accusative", fromChapter: 3 },
  { key: "genitive", styleClass: "morph-genitive", fromChapter: 2 },
  { key: "dative", styleClass: "morph-dative", fromChapter: 7 },
  { key: "ablative", styleClass: "morph-ablative", fromChapter: 1 },
  { key: "vocative", styleClass: "morph-vocative", fromChapter: 4 },
  { key: "locative", styleClass: "morph-locative", fromChapter: 6 },
  { key: "indeclinable", styleClass: "morph-indeclinable", fromChapter: 13 },
  { key: "imperative", styleClass: "morph-imperative", fromChapter: 4 },
  { key: "subjunctive", styleClass: "morph-subjunctive", fromChapter: 27 },
  { key: "infinitive", fromChapter: 10 },
  { key: "adjective", fromChapter: 12 },
  { key: "class", fromChapter: 12 },
  { key: "comparative", styleClass: "morph-comparative", fromChapter: 12 },
  { key: "participle", styleClass: "morph-participle", fromChapter: 14 },
  { key: "deponent", styleClass: "morph-deponent", fromChapter: 16 },
  { key: "superlative", styleClass: "morph-superlative", fromChapter: 18 },
  { key: "perfect", fromChapter: 21 },
  { key: "supine", fromChapter: 22 },
  { key: "gerund", styleClass: "morph-gerund", fromChapter: 25 },
  { key: "comment", styleClass: "morph-comment", fromChapter: 1 },
];

export default morphologyConfig;

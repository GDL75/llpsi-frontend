const comments09 = [
  {
    id: "undecentum",
    title: "ūndēcentum",
    text: [{ token: "ūn-dē-centum", suffix: " = " }, { token: "IC (99)" }],
  },
  {
    id: "rivus",
    text: [
      { token: "rīv-us", gender: "masculinum", morph: "nominative", suffix: " = " },
      { token: "parv-us", gender: "masculinum", morph: "nominative", suffix: " " },
      { token: "fluvi-us", gender: "masculinum", morph: "nominative" },
    ],
  },
  {
    id: "ovis",
    text: [],
  },
  {
    id: "panis",
    text: [],
  },
  {
    id: "albus",
    text: [
      { token: "alb-us", morph: "nominative", suffix: " -" },
      { token: "a", morph: "nominative", suffix: " -" },
      { token: "um", morph: "nominative", suffix: " ⇔ " },
      { token: "nig-er", morph: "nominative", suffix: " -" },
      { token: "r-a", morph: "nominative", suffix: " -" },
      { token: "r-um", morph: "nominative" },
    ],
  },
  {
    id: "niger",
    text: [
      { token: "alb-us", morph: "nominative", suffix: " -" },
      { token: "a", morph: "nominative", suffix: " -" },
      { token: "um", morph: "nominative", suffix: " ⇔ " },
      { token: "nig-er", morph: "nominative", suffix: " -" },
      { token: "r-a", morph: "nominative", suffix: " -" },
      { token: "r-um", morph: "nominative" },
    ],
  },
  {
    id: "est",
    title: "ēst, edunt",
    text: [
      { token: "vir-", morph: "nominative", suffix: " " },
      { token: "pān-em", morph: "accusative", suffix: " " },
      { token: "ēst", markup: "br" },
      { token: "vir-ī", morph: "nominative", suffix: " " },
      { token: "pān-em", morph: "accusative", suffix: " " },
      { token: "edunt", markup: "/p" },
      { token: "⚠️ ", markup: "b" },
      { token: "ē", markup: "/b" },
      { token: "st ≠ ", markup: "b" },
      { token: "e", markup: "/b" },
      { token: "st" },
    ],
  },
  {
    id: "pastor",
    text: [],
  },
  {
    id: "mons",
    text: [
      { token: "ūn-us", morph: "nominative", gender: "masculine", suffix: " " },
      { token: "mōn-s", morph: "nominative", gender: "masculine", suffix: " ⟸[" },
      { token: "mon(t)-s", morph: "nominative", gender: "masculine", suffix: "]", markup: "/p" },
      { token: "du-o", morph: "nominative", gender: "masculine", suffix: " " },
      { token: "mont-ēs", morph: "nominative", gender: "masculine" },
    ],
  },
  {
    id: "vallis",
    text: [
      { token: "vall-is", morph: "nominative", suffix: " ⇔ " },
      { token: "mōn-s", morph: "nominative" },
    ],
  },
  {
    id: "arbor",
    text: [
      { token: "ūn-a", morph: "nominative", gender: "feminine", suffix: " " },
      { token: "arbor-", morph: "nominative", gender: "feminine", markup: "/p" },
      { token: "du-æ", morph: "nominative", gender: "feminine", suffix: " " },
      { token: "arbor-ēs", morph: "nominative", gender: "feminine" },
    ],
  },
  {
    id: "lupus",
  },
  {
    id: "supra_pre",
    // comment already in the word's notes
  },
  {
    id: "nubes",
    text: [
      { token: "ūn-a", morph: "nominative", gender: "feminine", suffix: " " },
      { token: "nūb-ēs", morph: "nominative", gender: "feminine", markup: "/p" },
      { token: "du-æ", morph: "nominative", gender: "feminine", suffix: " " },
      { token: "nūb-ēs", morph: "nominative", gender: "feminine" },
    ],
  },
  {
    id: "sub_pre",
    // comment already in the word's notes
  },
  {
    id: "umbra",
    text: [
      { token: "umbr-a", morph: "nominative", suffix: " ⇔ " },
      { token: "sōl-", morph: "nominative" },
    ],
  },
  {
    id: "petit",
    title: "umbram petit",
    text: [
      { token: "umbr-am", morph: "accusative", suffix: " " },
      { token: "petit = ad " },
      { token: "umbr-am", morph: "accusative", suffix: " " },
      { token: "adit" },
    ],
  },
  {
    id: "pastorIacet",
    title: "pastor iacet",
    image: { path: "/images/09-pastorIacet.jpg", isLandscape: true },
    text: [
      { token: "pastor-", morph: "nominative", suffix: " " },
      { token: "in " },
      { token: "umbr-ā", morph: "ablative", suffix: " " },
      { token: "iacet" },
    ],
  },
  {
    id: "relinquit",
    title: "relinquit + accūsātīvus",
    text: [
      { token: "ov-ēs", morph: "accusative", suffix: " " },
      { token: "alb-ās", morph: "accusative", suffix: " " },
      { token: "relinquit = ab " },
      { token: "ov-ibus", morph: "ablative", suffix: " " },
      { token: "alb-īs", morph: "ablative", suffix: " " },
      { token: "abit" },
    ],
  },
  {
    id: "vestigium",
  },
  {
    id: "ipsum",
    title: "lupum ipsum",
    text: [
      { token: "lup-us", morph: "nominative", suffix: " " },
      { token: "ips-e", morph: "nominative", suffix: " ⟹ (", markup: "i" },
      { token: "acc", morph: "accusative", suffix: ".) ", markup: "/i" },
      { token: "lup-um", morph: "accusative", suffix: " " },
      { token: "ips-um", morph: "accusative" },
    ],
  },
  {
    id: "timor",
    text: [{ token: "timor-", morph: "nominative", suffix: " ⟸ timet" }],
  },
  {
    id: "ipsam",
    title: "ovem ipsam",
    text: [
      { token: "ov-is", morph: "nominative", suffix: " " },
      { token: "ips-a", morph: "nominative", suffix: " ⟹ ", markup: "i" },
      { token: "accūsātīvus", morph: "accusative", suffix: " : ", markup: "/i" },
      { token: "ov-em", morph: "accusative", suffix: " " },
      { token: "ips-am", morph: "accusative" },
    ],
  },
  {
    id: "duc",
    title: "imperātīvus",
    text: [
      { markup: "i" },
      { token: "indicātīvus", suffix: ": ", markup: "/i" },
      { token: "dūcit | dūcunt", markup: "/p" },
      { markup: "i" },
      { token: "inperātīvus", suffix: ": ", markup: "/i" },
      { token: "dūc", morph: "imperative", suffix: "! | " },
      { token: "dūcite", morph: "imperative", suffix: "!" },
    ],
  },
  {
    id: "dens",
    text: [
      { token: "ūn-us", morph: "nominative", gender: "masculine", suffix: " " },
      { token: "dēn-s", morph: "nominative", gender: "masculine", suffix: " ⟸[" },
      { token: "den(t)-s", morph: "nominative", gender: "masculine", suffix: "]", markup: "/p" },
      { token: "du-o", morph: "nominative", gender: "masculine", suffix: " " },
      { token: "dent-ēs", morph: "nominative", gender: "masculine" },
    ],
  },
  {
    id: "accurrit",
    title: "accurrit",
    text: [{ token: "ac-currit ⟸ ad-currit" }],
  },
  {
    id: "prope",
    title: "prope",
    text: [{ token: "prope ⇔ procul" }],
  },
  {
    id: "clamor",
    text: [{ token: "clāmor-", morph: "nominative", suffix: " ⟸ clāmat" }],
  },
  {
    id: "imponit",
    title: "impōnit",
    image: { path: "/images/09-pastorCumOve.jpg", isLandscape: false },
    text: [
      { token: "pastor-", morph: "nominative", suffix: " " },
      { token: "ov-em", morph: "accusative", suffix: " in " },
      { token: "umer-ōs", morph: "accusative", suffix: " " },
      { token: "impōnit", suffix: " " },
      { token: " ⟸ in-pōnit" },
    ],
  },
];

export default comments09;

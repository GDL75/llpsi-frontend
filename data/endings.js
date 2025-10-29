const endings = {
  declinable: {
    "1fm": {
      // rosa
      nominative: { singular: "a", plural: "æ" },
      accusative: { singular: "am", plural: "ās" },
      genitive: { singular: "æ", plural: "ārum" },
      dative: { singular: "æ", plural: "īs" },
      ablative: { singular: "ā", plural: "īs" },
      vocative: { singular: "a", plural: "æ" },
    },
    "2m": {
      // dominus
      nominative: { singular: "us", plural: "ī" },
      accusative: { singular: "um", plural: "ōs" },
      genitive: { singular: "ī", plural: "ōrum" },
      dative: { singular: "ō", plural: "īs" },
      ablative: { singular: "ō", plural: "īs" },
      vocative: { singular: "e", plural: "ī" },
    },
    "2n": {
      // templum
      nominative: { singular: "um", plural: "a" },
      accusative: { singular: "um", plural: "a" },
      genitive: { singular: "ī", plural: "ōrum" },
      dative: { singular: "ō", plural: "īs" },
      ablative: { singular: "ō", plural: "īs" },
      vocative: { singular: "um", plural: "a" },
    },
    "3mf1": {
      // panis
      nominative: { singular: "is", plural: "ēs" },
      accusative: { singular: "em", plural: "ēs" },
      genitive: { singular: "is", plural: "um" }, // um at plural
      dative: { singular: "ī", plural: "ibus" },
      ablative: { singular: "e", plural: "ibus" },
      vocative: { singular: "is", plural: "ēs" },
    },
    "3mf2": {
      // ovis
      nominative: { singular: "is", plural: "ēs" },
      accusative: { singular: "em", plural: "ēs" },
      genitive: { singular: "is", plural: "ium" }, // ium at plural
      dative: { singular: "ī", plural: "ibus" },
      ablative: { singular: "e", plural: "ibus" },
      vocative: { singular: "is", plural: "ēs" },
    },
  },
  verb: {
    conjugation: {
      1: {
        active: {
          unfinished: {
            indicative: {
              present: [
                ["", "ā", "ā", "ā", "ā", "a"],
                ["", "", "", "", "", ""],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["ā", "ā", "ā", "ā", "ā", "ā"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["ā", "ā", "ā", "ā", "ā", "ā"],
                ["b", "bi", "bi", "bi", "bi", "bu"],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              present: [
                ["e", "ē", "e", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["ā", "ā", "ā", "ā", "ā", "ā"],
                ["re", "rē", "re", "rē", "rē", "re"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
            imperative: {
              present: [
                ["-", "ā", "-", "-", "ā", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "", "-", "-", "te", "-"],
              ],
              future: [
                ["-", "ā", "-", "-", "ā", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tō", "-", "-", "tōte", "-"],
              ],
            },
          },
          finished: {
            indicative: {
              perfect: [
                ["āv", "āv", "āv", "āv", "āv", "āv"],
                ["", "", "", "", "", ""],
                ["ī", "istī", "it", "imus", "istis", "ērunt"],
              ],
              pluperfect: [
                ["āv", "āv", "āv", "āv", "āv", "āv"],
                ["era", "erā", "era", "erā", "erā", "era"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["āv", "āv", "āv", "āv", "āv", "āv"],
                ["er", "eri", "eri", "eri", "eri", "eri"],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              perfect: [
                ["āv", "āv", "āv", "āv", "āv", "āv"],
                ["eri", "eri", "eri", "eri", "eri", "eri"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              pluperfect: [
                ["āv", "āv", "āv", "āv", "āv", "āv"],
                ["isse", "issē", "isse", "issē", "issē", "isse"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
          },
        },
      },
    },
  },
};

export default endings;

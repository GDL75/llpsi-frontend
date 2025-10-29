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
        passive: {
          unfinished: {
            indicative: {
              present: [
                ["", "ā", "ā", "ā", "ā", "a"],
                ["", "", "", "", "", ""],
                ["or", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["ā", "ā", "ā", "ā", "ā", "ā"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              future: [
                ["ā", "ā", "ā", "ā", "ā", "ā"],
                ["b", "be", "bi", "bi", "bi", "bu"],
                ["or", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            subjunctive: {
              present: [
                ["e", "ē", "e", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["ā", "ā", "ā", "ā", "ā", "ā"],
                ["re", "rē", "rē", "rē", "rē", "re"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            imperative: {
              present: [
                ["-", "ā", "-", "-", "ā", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "re", "-", "-", "minī", "-"],
              ],
              future: [
                ["-", "ā", "-", "-", "-", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tōr", "-", "-", "-", "-"],
              ],
            },
          },
          finished: {
            // pas complété
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
      2: {
        active: {
          unfinished: {
            indicative: {
              present: [
                ["e", "ē", "ē", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["b", "bi", "bi", "bi", "bi", "bu"],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              present: [
                ["e", "e", "e", "e", "e", "e"],
                ["a", "ā", "a", "ā", "ā", "a"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["re", "rē", "re", "rē", "rē", "re"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
            imperative: {
              present: [
                ["-", "ē", "-", "-", "ē", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "", "-", "-", "te", "-"],
              ],
              future: [
                ["-", "ē", "-", "-", "ē", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tō", "-", "-", "tōte", "-"],
              ],
            },
          },
          finished: {
            indicative: {
              perfect: [
                ["", "", "", "", "", ""],
                ["", "", "", "", "", ""],
                ["ī", "istī", "it", "imus", "istis", "ērunt"],
              ],
              pluperfect: [
                ["", "", "", "", "", ""],
                ["era", "erā", "era", "erā", "erā", "era"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["", "", "", "", "", ""],
                ["er", "eri", "eri", "eri", "eri", "eri"],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              perfect: [
                ["", "", "", "", "", ""],
                ["eri", "eri", "eri", "eri", "eri", "eri"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              pluperfect: [
                ["", "", "", "", "", ""],
                ["isse", "issē", "isse", "issē", "issē", "isse"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
          },
        },
        passive: {
          unfinished: {
            indicative: {
              present: [
                ["e", "ē", "ē", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["or", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              future: [
                ["ē", "ē", "ē", "ē", "ē", "e"],
                ["b", "be", "bi", "bi", "bi", "bu"],
                ["or", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            subjunctive: {
              present: [
                ["e", "e", "e", "e", "e", "e"],
                ["a", "ā", "ā", "ā", "ā", "a"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["re", "rē", "rē", "rē", "rē", "re"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            imperative: {
              present: [
                ["-", "ē", "-", "-", "ē", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "re", "-", "-", "minī", "-"],
              ],
              future: [
                ["-", "ē", "-", "-", "-", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tōr", "-", "-", "-", "-"],
              ],
            },
          },
          finished: {
            // pas complété
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
      3: {
        active: {
          unfinished: {
            indicative: {
              present: [
                ["", "i", "i", "i", "i", "u"],
                ["", "", "", "", "", ""],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["a", "ē", "e", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              present: [
                ["a", "ā", "a", "ā", "ā", "a"],
                ["", "", "", "", "", ""],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["e", "e", "e", "e", "e", "e"],
                ["re", "rē", "re", "rē", "rē", "re"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
            imperative: {
              present: [
                ["-", "e", "-", "-", "i", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "", "-", "-", "te", "-"],
              ],
              future: [
                ["-", "i", "-", "-", "i", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tō", "-", "-", "tōte", "-"],
              ],
            },
          },
          finished: {
            indicative: {
              perfect: [
                ["", "", "", "", "", ""],
                ["", "", "", "", "", ""],
                ["ī", "istī", "it", "imus", "istis", "ērunt"],
              ],
              pluperfect: [
                ["", "", "", "", "", ""],
                ["era", "erā", "era", "erā", "erā", "era"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["", "", "", "", "", ""],
                ["er", "eri", "eri", "eri", "eri", "eri"],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              perfect: [
                ["", "", "", "", "", ""],
                ["eri", "eri", "eri", "eri", "eri", "eri"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              pluperfect: [
                ["", "", "", "", "", ""],
                ["isse", "issē", "isse", "issē", "issē", "isse"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
          },
        },
        passive: {
          unfinished: {
            indicative: {
              present: [
                ["", "ē", "i", "i", "i", "u"],
                ["", "", "", "", "", ""],
                ["or", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              future: [
                ["a", "ē", "ē", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            subjunctive: {
              present: [
                ["a", "ā", "ā", "ā", "ā", "a"],
                ["", "", "", "", "", ""],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["e", "e", "e", "e", "e", "e"],
                ["re", "rē", "rē", "rē", "rē", "re"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            imperative: {
              present: [
                ["-", "e", "-", "-", "i", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "re", "-", "-", "minī", "-"],
              ],
              future: [
                ["-", "i", "-", "-", "-", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tōr", "-", "-", "-", "-"],
              ],
            },
          },
          finished: {
            // pas complété
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
      4: {
        active: {
          unfinished: {
            indicative: {
              present: [
                ["", "i", "i", "i", "i", "u"],
                ["", "", "", "", "", ""],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["a", "ē", "e", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              present: [
                ["a", "ā", "a", "ā", "ā", "a"],
                ["", "", "", "", "", ""],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              imperfect: [
                ["e", "e", "e", "e", "e", "e"],
                ["re", "rē", "re", "rē", "rē", "re"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
            imperative: {
              present: [
                ["-", "e", "-", "-", "i", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "", "-", "-", "te", "-"],
              ],
              future: [
                ["-", "i", "-", "-", "i", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tō", "-", "-", "tōte", "-"],
              ],
            },
          },
          finished: {
            indicative: {
              perfect: [
                ["", "", "", "", "", ""],
                ["", "", "", "", "", ""],
                ["ī", "istī", "it", "imus", "istis", "ērunt"],
              ],
              pluperfect: [
                ["", "", "", "", "", ""],
                ["era", "erā", "era", "erā", "erā", "era"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              future: [
                ["", "", "", "", "", ""],
                ["er", "eri", "eri", "eri", "eri", "eri"],
                ["ō", "s", "t", "mus", "tis", "nt"],
              ],
            },
            subjunctive: {
              perfect: [
                ["", "", "", "", "", ""],
                ["eri", "eri", "eri", "eri", "eri", "eri"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
              pluperfect: [
                ["", "", "", "", "", ""],
                ["isse", "issē", "isse", "issē", "issē", "isse"],
                ["m", "s", "t", "mus", "tis", "nt"],
              ],
            },
          },
        },
        passive: {
          unfinished: {
            indicative: {
              present: [
                ["", "ē", "i", "i", "i", "u"],
                ["", "", "", "", "", ""],
                ["or", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["ē", "ē", "ē", "ē", "ē", "ē"],
                ["ba", "bā", "ba", "bā", "bā", "ba"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              future: [
                ["a", "ē", "ē", "ē", "ē", "e"],
                ["", "", "", "", "", ""],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            subjunctive: {
              present: [
                ["a", "ā", "ā", "ā", "ā", "a"],
                ["", "", "", "", "", ""],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
              imperfect: [
                ["e", "e", "e", "e", "e", "e"],
                ["re", "rē", "rē", "rē", "rē", "re"],
                ["r", "ris", "tur", "mur", "minī", "ntur"],
              ],
            },
            imperative: {
              present: [
                ["-", "e", "-", "-", "i", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "re", "-", "-", "minī", "-"],
              ],
              future: [
                ["-", "i", "-", "-", "-", "-"],
                ["-", "", "-", "-", "", "-"],
                ["-", "tōr", "-", "-", "-", "-"],
              ],
            },
          },
          finished: {
            // pas complété
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

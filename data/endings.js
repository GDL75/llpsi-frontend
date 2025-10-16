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
  verb: {},
};

export default endings;

import { useSelector } from "react-redux";
import { useMorph } from "utils/useMorph";
import { addEnding } from "utils/addEnding";

export default function WordSummary({ word }) {
  const m = useMorph();

  if (!word) return "";

  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const genderAbbreviation = {
    masculine: "m.",
    feminine: "f.",
    neuter: "n.",
    both: "m./f.",
  };

  if (word.type === "noun") {
    if (currentChapter === 1) {
      return (
        <>
          {m({
            token: addEnding({ word, case: "nominative", number: "singular" }),
            morph: "nominative",
            gender: word.gender,
          })}
          {", "}
          {m({
            token: addEnding({ word, case: "nominative", number: "plural" }),
            morph: "nominative",
            gender: word.gender,
          })}
          {", "}
          {genderAbbreviation[word.gender]}
        </>
      );
    } else {
      return (
        <>
          {m({
            token: addEnding({ word, case: "nominative", number: "singular" }),
            morph: "nominative",
            gender: word.gender,
          })}
          {", "}
          {m({
            token: addEnding({ word, case: "genitive", number: "singular" }),
            morph: "genitive",
            gender: word.gender,
          })}
          {`, ${genderAbbreviation[word.gender]}`}
        </>
      );
    }
  } else if (word.type === "adjective") {
    return (
      <>
        {m({
          token: addEnding({
            word,
            case: "nominative",
            number: "singular",
            gender: "masculine",
          }),
          morph: "nominative",
          gender: "masculine",
        })}
        ,{" "}
        {m({
          token: addEnding({
            word,
            case: "nominative",
            number: "singular",
            gender: "feminine",
          }),
          morph: "nominative",
          gender: "feminine",
        })}
        {currentChapter > 1 && (
          <>
            {", "}
            {m({
              token: addEnding({
                word,
                case: "nominative",
                number: "singular",
                gender: "neuter",
              }),
              morph: "nominative",
              gender: "neuter",
            })}
          </>
        )}
      </>
    );
  } else if (word.type === "pronoun") {
    return (
      <>
        {m({
          token: word.forms[0][0],
          morph: "nominative",
          gender: "masculine",
        })}
        ,{" "}
        {m({
          token: word.forms[0][1],
          morph: "nominative",
          gender: "feminine",
        })}
        ,{" "}
        {m({
          // no test here: there is no pronoun in chapter 1
          token: word.forms[0][2],
          morph: "nominative",
          gender: "neuter",
        })}
      </>
    );
  } else if (word.type === "verb") {
    return word.llpsi;
  } else {
    return word.word;
  }
}

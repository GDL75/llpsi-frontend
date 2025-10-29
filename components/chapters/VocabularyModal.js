import styles from "styles/VocabularyModal.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { TableNoun, TableAdjPro, TableVerb } from "ui/Table";
import VerbOptions from "ui/VerbOptions";   
import morphologyConfig from "data/morphologyConfig";
import Text from "components/ui/Text";

export default function VocabularyModal({ vocab }) {
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  if (!vocab) return null;

  // états pour voice / aspect
  const [voice, setVoice] = useState("active");
  const [aspect, setAspect] = useState("unfinished");

  // ordre d’affichage
  const orderedKeys = ["type", "gender", "declension", "class", "conjugation", "infinitive", "perfect", "supine"];

  const visibleKeys = orderedKeys.filter((key) => vocab[key] !== undefined);

  const chapFrom = (key) => morphologyConfig.find((item) => item.key === key)?.fromChapter ?? 1;

  return (
    <aside className={styles.vocabModal}>
      <h3>{vocab.type === "verb" ? vocab.llpsi : vocab.word}</h3>

      <div className={styles.details}>
        {visibleKeys.map(
          (key) =>
            currentChapter >= chapFrom(key) && (
              <p key={key}>
                <strong>{key}</strong> : {vocab[key]}
              </p>
            )
        )}
      </div>

      {/* TABLEAU DES FORMES */}
      {vocab.type === "noun" && <TableNoun word={vocab} />}
      {(vocab.type === "adjective" || vocab.type === "pronoun") && <TableAdjPro word={vocab} />}
      {vocab.type === "verb" && (
        <>
          <VerbOptions voice={voice} aspect={aspect} setVoice={setVoice} setAspect={setAspect} />
          <TableVerb radical={vocab.radical} conjugation={vocab.conjugation} voice={voice} aspect={aspect} />
        </>
      )}

      {vocab.note && (
        <div className={styles.noteContainer}>
          <p className="blink">Note :</p>
          <Text data={{ text: vocab.note }} />
        </div>
      )}

      {vocab.image && (
        <div className={styles.imageContainer}>
          <img src={vocab.image.path} alt={vocab.word} className={styles.image} />
        </div>
      )}
    </aside>
  );
}

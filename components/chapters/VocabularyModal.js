import styles from "styles/VocabularyModal.module.css";
import { useSelector } from "react-redux";
import { TableNoun, TableAdjPro } from "ui/Table";
import morphologyConfig from "data/morphologyConfig";

export default function VocabularyModal({ vocab }) {
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  if (!vocab) return null;

  // Ordre d’affichage voulu
  const orderedKeys = [
    "type",
    "gender",
    "declension",
    "class",
    "conjugation",
    "infinitive",
    "perfect",
    "supine",
    // "note"  rejected after the table, so it is more visible
  ];

  // On filtre les clés qui existent effectivement pour ce mot
  const visibleKeys = orderedKeys.filter((key) => vocab[key] !== undefined);

  // from which chapter a key is available
  const chapFrom = (key) => {
    return morphologyConfig.find((item) => item.key === key)?.fromChapter ?? 1;
  };

  return (
    <aside className={styles.vocabModal}>
      <h3>{vocab.type === "verb" ? vocab.llpsi : vocab.word}</h3>

      {/* Métadonnées grammaticales */}
      {visibleKeys.map(
        (key) =>
          currentChapter >= chapFrom(key) && (
            <p key={key}>
              <strong>{key}</strong> : {vocab[key]}
            </p>
          )
      )}

      {/* Tableau des formes, si présent */}
      {vocab.type === "noun" && <TableNoun word={vocab} />}
      {(vocab.type === "adjective" || vocab.type === "pronoun") && (
        <TableAdjPro word={vocab} />
      )}

      {vocab.note && (
        <p>
          <strong className="blink">Note</strong> : {vocab.note}
        </p>
      )}

      {/* Image à la fin */}
      {vocab.image && (
        <div className={styles.imageContainer}>
          <img src={vocab.image.path} alt={vocab.word} className={styles.image} />
        </div>
      )}
    </aside>
  );
}

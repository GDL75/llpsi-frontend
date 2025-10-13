import styles from "styles/VocabularyModal.module.css";
import Table from "ui/Table"
import { useMorph } from "utils/useMorph";

export default function VocabularyModal({ vocab }) {
  console.log("vocab", vocab);
  const m = useMorph();

  return (
    <aside className="vocab-modal">
      <h3>{vocab.word}</h3>
      {vocab.image && <img src={vocab.image} alt={vocab.word} />}
      <p>
        <strong>{vocab.translation.fr}</strong> ({vocab.translation.en})
      </p>

      {vocab.forms && (
        <Table
          table={vocab.forms}
          renderCell={(token, morph, gender) => m({ token, morph, gender })}
        />
      )}
    </aside>
  );
}

import styles from "styles/LemmaModal.module.css";
import Text from "layout/Text";

export default function LemmaModal({ lemma, onClose }) {
  if (!lemma) return null;

  return (
    <div className={styles.lemmaOverlay} onClick={onClose}>
      <div
        className={styles.lemmaModal}
        onClick={(e) => e.stopPropagation()} // empêche la fermeture en cliquant sur le contenu
      >
        <div className={styles.content}>
          <h3>{lemma.title}</h3>
          {lemma.image && (
            <div className={styles.imageContainer}>
              <img src={lemma.image} alt={lemma.title} />
            </div>
          )}
          <Text chapter={lemma} />
        </div>
      </div>
    </div>
  );
}

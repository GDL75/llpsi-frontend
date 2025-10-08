import styles from "styles/LemmaModal.module.css";
import Text from "layout/Text";

export default function LemmaModal({ lemma, onClose }) {
  if (!lemma) return null;

  const image = lemma.image && (
    <div className={styles.imageContainer}>
      <img src={lemma.image.path} alt={lemma.title} />
    </div>
  );

  const isLandscape = lemma.image?.orientation === "landscape"; // if not -> portrait

  return (
    <div className={styles.lemmaOverlay} onClick={onClose}>
      <div
        className={`${styles.lemmaModal} ${
          isLandscape ? styles.landscapeLayout : styles.portraitLayout
        }`}
        onClick={(e) => e.stopPropagation()} // empêche la fermeture en cliquant sur le contenu
      >
        {isLandscape ? (
          // Landscape -> Data in one column
          <div className={styles.content}>
            <h3>{lemma.title}</h3>
            {image}
            <Text chapter={lemma} />
          </div>
        ) : (
          // Portrait -> two columns : image + rest of data
          <>
            {image}
            <div className={styles.content}>
              <h3>{lemma.title}</h3>
              <Text chapter={lemma} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

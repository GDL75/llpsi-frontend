import styles from "styles/CommentModal.module.css";
import Text from "components/ui/Text";

export default function CommentModal({ comment, onClose }) {
  if (!comment) return null;

  const image = comment.image && (
    <div className={styles.imageContainer}>
      <img src={comment.image.path} alt={comment.title} />
    </div>
  );

  const isLandscape = comment.image?.orientation === "landscape"; // if not -> portrait

  return (
    <div className={styles.commentOverlay} onClick={onClose}>
      <div
        className={`${styles.commentModal} ${
          isLandscape ? styles.landscapeLayout : styles.portraitLayout
        }`}
        onClick={(e) => e.stopPropagation()} // empêche la fermeture en cliquant sur le contenu
      >
        {isLandscape ? (
          // Landscape -> Data in one column
          <div className={styles.content}>
            <h3>{comment.title}</h3>
            {image}
            <Text data={comment} />
          </div>
        ) : (
          // Portrait -> two columns : image + rest of data
          <>
            {image}
            <div className={styles.content}>
              <h3>{comment.title}</h3>
              <Text data={comment} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

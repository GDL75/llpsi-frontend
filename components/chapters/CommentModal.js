import React, { useMemo } from "react";
import styles from "styles/CommentModal.module.css";
import Text from "components/ui/Text";
import WordSummary from "ui/WordSummary";
import { TableNoun, TableAdjPro } from "ui/Table";

export default function CommentModal({ comment, onClose, vocabulary }) {
  if (!comment) return null;

  // Recherche du mot correspondant
  const word = useMemo(() => {
    if (!vocabulary || !comment.id) return null;
    return vocabulary.find((w) => w.id === comment.id) || null;
  }, [vocabulary, comment]);

  // Image (si présente)
  const imagePath = comment.image || word?.image;
  const image = imagePath && (
    <div className={styles.imageContainer}>
      <img src={imagePath} alt={word?.word || comment.title} />
    </div>
  );

  const renderContent = () => {
    if (word) {
      return (
        <>
          <h3>
            <WordSummary word={word} />
          </h3>
          <div className={styles.content}>
            {/* <Text data={comment} /> */}
            {image}
            {word.type === "noun" && <TableNoun word={word} />}
            {(word.type === "adjective" || word.type === "pronoun") && (
              <TableAdjPro word={word} />
            )}
            {word.note && <p className={styles.note}>{word.note}</p>}
            {comment.note && <p className={styles.note}>{comment.note}</p>}
          </div>
        </>
      );
    } else {
      return (
        <>
          <h3>{comment.title}</h3>
          <Text data={comment} />
          {image}
          {comment.note && <p className={styles.note}>{comment.note}</p>}
        </>
      );
    }
  };

  return (
    <div className={styles.commentOverlay} onClick={onClose}>
      <div
        className={styles.commentModal} 
        onClick={(e) => e.stopPropagation()}
      >
        {renderContent()}
      </div>
    </div>
  );
}

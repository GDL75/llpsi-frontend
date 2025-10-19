import React, { useMemo } from "react";
import styles from "styles/CommentModal.module.css";
import Text from "ui/Text";
import WordSummary from "ui/WordSummary";
import { TableNoun, TableAdjPro } from "ui/Table";

export default function CommentModal({ comment, onClose, vocabulary }) {
  if (!comment) return null;

  // Recherche du mot correspondant
  const word = useMemo(() => {
    if (!vocabulary || !comment.id) return null;
    return vocabulary.find((w) => w.id === comment.id) || null;
  }, [vocabulary, comment]);

  const details = (comment?.text?.length || word.note || comment.note) && (
    <div className={styles.details}>
      <Text data={comment} />
      {word?.note && <Text data={{ text: word.note }} />}
    </div>
  );

  // Image (si présente)
  const imagePath = comment.image?.path || word?.image?.path;
  const isLandscape = imagePath && (comment.image?.isLandscape || word?.image?.isLandscape);
  const image = imagePath && (
    <div className={styles.imageContainer} style={{ padding: !details && "0px" }}>
      <img src={imagePath} alt={word?.word || comment.title} />
    </div>
  );

  const renderContent = () => {
    return (
      <>
        <h3 className={styles.header}>{word ? <WordSummary word={word} /> : comment.title}</h3>
        <div className={styles.content}>
          {/* right column */}
          {image && (
            <div className={styles.column}>
              {isLandscape && details}
              {image}
            </div>
          )}
          <div className={styles.column}>
            {/* left column */}
            {!isLandscape && details}
            {word?.type === "noun" && <TableNoun word={word} />}
            {(word?.type === "adjective" || word?.type === "pronoun") && <TableAdjPro word={word} />}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.commentOverlay} onClick={onClose}>
      <div className={styles.commentModal} onClick={(e) => e.stopPropagation()}>
        {renderContent()}
      </div>
    </div>
  );
}

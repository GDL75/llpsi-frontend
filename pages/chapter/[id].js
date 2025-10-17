import styles from "styles/[id].module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "components/layout/MainLayout";
import Text from "components/ui/Text";
import Vocabulary from "components/chapters/Vocabulary";
import { chapters } from "data/chapters"; // means: from "data/chapters/index.js";
import CommentModal from "components/chapters/CommentModal";
import VocabularyModal from "components/chapters/VocabularyModal";

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;

  const [openComment, setOpenComment] = useState(null);
  const currentSection = useSelector((state) => state.navigation.value.section);

  // Getting data from the requested chapter, needs to be AFTER the previous states
  const chapterData = chapters[Number(id)];
  if (!chapterData) return;
  const {
    chapter,
    comments,
    vocabulary,
    // grammar,
    // exercises
  } = chapterData;

  if (!id) return null; // needed because id can be null at first render. Must be placed AFTER all other hooks
  const handleOpenComment = (commentId) => {
    let comment = null;
    if (currentSection === "text") {
      comment = comments.find((c) => c.id === commentId);
    } else if (currentSection === "vocabulary") {
      comment = commentId;
    }
    setOpenComment(comment);
  };

  const handleCloseComment = () => setOpenComment(null);

  if (!chapterData) {
    return (
      <MainLayout>
        <p>Chapitre introuvable.</p>
      </MainLayout>
    );
  }

  // Rendu conditionnel selon la rubrique
  const renderContent = () => {
    switch (currentSection) {
      case "text":
        return (
          <>
            <img
              src="/images/09-main-commented.png"
              alt="A shepherd and his dog"
              loading="lazy"
              className="responsive-img" // defined in globals.css
            />
            <Text data={chapter} openComment={handleOpenComment} />
            {openComment && (
              <CommentModal
                comment={openComment}
                onClose={handleCloseComment}
                vocabulary={vocabulary}
              />
            )}
          </>
        );
      case "grammar":
        return <p>Voici la grammaire du chapitre {chapterData.number}.</p>;
      case "exercises":
        return (
          <>
            <p>Voici les exercices du chapitre {chapterData.number}.</p>
            <p>toto</p>
          </>
        );
      case "vocabulary":
        return (
          <div className={styles.vocabPage}>
            <div className={styles.vocabContainer}>
              <Vocabulary data={vocabulary} openComment={handleOpenComment} />
            </div>
            <div className={styles.commentPanel}>
              {openComment && (
                <VocabularyModal
                  vocab={openComment}
                  onClose={handleCloseComment}
                />
              )}
            </div>
          </div>
        );
      default:
        return <p>Sélectionne une rubrique.</p>;
    }
  };

  return <MainLayout>{renderContent()}</MainLayout>;
}

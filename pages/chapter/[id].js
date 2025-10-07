import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "components/layout/MainLayout";
import Text from "components/layout/Text";
import * as chapters from "data/chapters";
import lemmas from "data/chapters/09-lemmas";
import LemmaModal from "ui/LemmaModal";

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;

  const [openLemma, setOpenLemma] = useState(null);
  const currentSection = useSelector((state) => state.navigation.value.section);

  if (!id) return null; // needed because id can be null at first render. Must be placed AFTER all other hooks

  const handleOpenLemma = (lemmaId) => {
    const lemma = lemmas[lemmaId];
    console.log("lemma", lemma);
    setOpenLemma(lemma);
  };

  const handleCloseLemma = () => setOpenLemma(null);

  // Getting data from the requested chapter
  const chapterData = chapters[`chapter${id.padStart(2, "0")}`];

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
            <Text chapter={chapterData} openLemma={handleOpenLemma} />
            {openLemma && (
              <LemmaModal lemma={openLemma} onClose={handleCloseLemma} />
            )}
          </>
        );
      case "grammar":
        return <p>Voici la grammaire du chapitre {chapterData.number}.</p>;
      case "exercises":
        return <p>Voici les exercices du chapitre {chapterData.number}.</p>;
      case "vocabulary":
        return <p>Voici le vocabulaire du chapitre {chapterData.number}.</p>;
      default:
        return <p>Sélectionne une rubrique.</p>;
    }
  };

  return <MainLayout>{renderContent()}</MainLayout>;
}

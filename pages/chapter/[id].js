import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import MainLayout from "components/layout/MainLayout";
import Text from "components/layout/Text";
import * as chapters from "data/chapters";

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null; // needed because id can be null at first render

  const currentSection = useSelector((state) => state.navigation.value.section);

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
            <Text chapter={chapterData} />
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
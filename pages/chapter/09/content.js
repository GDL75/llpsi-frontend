import { useRouter } from "next/router";
import MainLayout from "components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { m } from "utils/morphFunction";

export default function ChapterPage() {
  // const router = useRouter();
  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const currentSection = useSelector((state) => state.navigation.value.section);
  // const { id, section } = router.query;

  // Rendu conditionnel selon la rubrique
  const renderContent = () => {
    switch (currentSection) {
      case "text":
        return (
          <>
            <p>Voici le texte du chapitre {currentChapter}.</p>
            <p>
              <span className="masculine">
                Domin<span className="nominative">us</span>
              </span>{" "}
              can
              <span className="accusative">em</span> videt
            </p>
            <p>
              <span className="masculine">
                Domin<span className="nominative">us</span>
              </span>
            </p>
            <p>
              {m("Domin-us", "mas-nom")} {m("can-em", "mas-acc")} videt
            </p>
          </>
        );
      case "grammar":
        return <p>Voici la grammaire du chapitre {currentChapter}.</p>;
      case "exercises":
        return <p>Voici les exercices du chapitre {currentChapter}.</p>;
      case "vocabulary":
        return <p>Voici le vocabulaire du chapitre {currentChapter}.</p>;
      default:
        return <p>Sélectionne une rubrique.</p>;
    }
  };

  return (
    <MainLayout>
      <h5>Chapitre {currentChapter}</h5>
      {renderContent()}
    </MainLayout>
  );
}

import { useRouter } from "next/router";
import MainLayout from "../../../components/layout/MainLayout";

export default function ChapterPage() {
  const router = useRouter();
  const { id, section } = router.query;

  // Rendu conditionnel selon la rubrique
  const renderContent = () => {
    switch (section) {
      case "text":
        return <p>Voici le texte du chapitre {id}.</p>;
      case "grammar":
        return <p>Voici la grammaire du chapitre {id}.</p>;
      case "exercises":
        return <p>Voici les exercices du chapitre {id}.</p>;
      case "vocabulary":
        return <p>Voici le vocabulaire du chapitre {id}.</p>;
      default:
        return <p>Sélectionne une rubrique.</p>;
    }
  };

  return (
    <MainLayout chapterId={id} section={section}>
      <h1>Chapitre {id}</h1>
      {renderContent()}
    </MainLayout>
  );
}

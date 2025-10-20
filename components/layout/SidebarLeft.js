import styles from "styles/SidebarLeft.module.css";
import { setChapter } from "reducers/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "components/hooks/useTranslation";
import { romanNumber } from "utils/numbers";

export default function SidebarLeft() {
  const dispatch = useDispatch();
  const t = useTranslation();

  // État global
  const currentBook = useSelector((state) => state.navigation.value.book);
  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const currentLanguage = useSelector((state) => state.settings.value.language);

  // Construction de la liste des chapitres
  const chapterList = {
    book1: { from: 1, to: 35 },
    book2: { from: 36, to: 56 },
  };
  const bookRange = chapterList[currentBook];
  const chapters = Array.from({ length: bookRange.to - bookRange.from + 1 }, (_, i) => i + bookRange.from);

  const activeIndex = chapters.findIndex((c) => c === currentChapter);

  return (
    <aside className={styles.leftSide}>
      <div className={styles.chaptersContainer}>
        {/* Slider */}
        <div
          className={styles.chapterSlider}
          style={{
            top: `${activeIndex * (100 / chapters.length)}%`,
            height: `${100 / chapters.length}%`,
          }}
        />
        {chapters.map((num) => (
          <button
            key={num}
            className={`${styles.chapterButton} ${currentChapter === num ? styles.active : ""}`}
            onClick={() => dispatch(setChapter(num))}
          >
            {t("chapter")} {currentLanguage === "la" ? romanNumber(num) : num}
          </button>
        ))}
      </div>
    </aside>
  );
}

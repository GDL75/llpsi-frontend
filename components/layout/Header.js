import styles from "styles/Header.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CustomButton from "ui/CustomButton";
import { setSection } from "reducers/navigation";
import { useTranslation } from "data/translation/useTranslation";
import Settings from "components/Settings";
import titles from "data/chapterTitles";

export default function Header() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const [isSettings, setIsSettings] = useState(false);

  // section courante stockée en Redux (ex: "text", "grammar", "exercises", "vocabulary")
  const currentSection = useSelector((state) => state.navigation.value.section);
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  const sections = [
    { value: "text", label: t("text") },
    { value: "grammar", label: t("grammar") },
    { value: "exercises", label: t("exercises") },
    { value: "vocabulary", label: t("vocabulary") },
  ];

  const activeIndex = sections.findIndex((s) => s.value === currentSection);

  // const handleClickSection = (id) => {
  //   dispatch(setSection(id));
  //   // Optionnel : si tu veux aussi naviguer vers /chapter/x/<section>, utilise next/router ici
  //   // router.push(`/chapter/${currentChapter}/${id}`);
  // };

  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          {/* left section */}
            <nav className={styles.sectionContainer}>
              {/* Slider */}
              <div
                className={styles.sectionSlider}
                style={{ left: `${activeIndex * 25}%` }}
              />
              {sections.map((s, i) => (
                <button
                  key={s.value}
                  className={`${styles.sectionButton} ${
                    currentSection === s.value ? styles.active : ""
                  }`}
                  onClick={() => dispatch(setSection(s.value))}
                >
                  {s.label}
                </button>
              ))}
            </nav>

          {/* droite : settings / profile */}
          <nav className={styles.rightGroup}>
            <CustomButton
              bColor="3"
              tColor="0"
              wSize="150px"
              text={t("profile")}
              handleFunction={() => {}}
            />
            <CustomButton
              bColor="3"
              tColor="0"
              wSize="150px"
              text={t("settings")}
              handleFunction={() => setIsSettings((prev) => !prev)}
            />
          </nav>
        </header>

        {/* Column Capitals */}
        <div className={styles.container}>
          <div className={styles.leftCapital}>
            <div className={styles.layerLeft1}></div>
            <div className={styles.layerLeft2}></div>
            <div className={styles.layerLeft3}></div>
            <div className={styles.layerLeft4}></div>
          </div>
          <h2 className={styles.title}>{titles[currentChapter - 1]}</h2>
          <div className={styles.rightCapital}>
            <div className={styles.layerRight1}></div>
            <div className={styles.layerRight2}></div>
            <div className={styles.layerRight3}></div>
            <div className={styles.layerRight4}></div>
          </div>
        </div>
      </div>

      {/* The Settings modal needs to be outside of the main return */}
      {isSettings && (
        <Settings bColor="0" onClose={() => setIsSettings(false)} />
      )}
    </>
  );
}

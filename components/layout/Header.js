import styles from "styles/Header.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CustomButton from "ui/CustomButton";
import { setSection } from "reducers/navigation";
import { useTranslation } from "assets/translation/useTranslation";
import Settings from "components/Settings";

export default function Header() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const [isSettings, setIsSettings] = useState(false);

  // section courante stockée en Redux (ex: "text", "grammar", "exercises", "vocabulary")
  const currentSection = useSelector((state) => state.navigation.value.section);

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
      <header className={styles.header}>
        {/* gauche : sections */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionContainer}>
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
          </div>
        </div>

        {/* droite : settings / profile */}
        <div className={styles.rightGroup}>
          <CustomButton
            bColor="3"
            tColor="0"
            text={t("profile")}
            handleFunction={() => {}}
          />
          <CustomButton
            bColor="3"
            tColor="0"
            text={t("settings")}
            handleFunction={() => setIsSettings((prev) => !prev)}
          />
        </div>
      </header>
      {/* The Settings modal needs to be outside of the main return */}
      {isSettings && (
        <Settings bColor="0" onClose={() => setIsSettings(false)} />
      )}
    </>
  );
}

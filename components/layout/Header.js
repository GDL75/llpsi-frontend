import styles from "styles/Header.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "ui/CustomButton";
import { setSection } from "reducers/navigation";
import { useTranslation } from "components/hooks/useTranslation";
import Settings from "components/Settings";
import titles from "data/chapterTitles";
import AudioPlayerBox from "ui/AudioPlayerBox";

export default function Header() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const [isSettings, setIsSettings] = useState(false);

  const currentSection = useSelector((state) => state.navigation.value.section);
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  const sections = [
    { value: "text", label: t("text") },
    { value: "grammar", label: t("grammar") },
    { value: "exercises", label: t("exercises") },
    { value: "vocabulary", label: t("vocabulary") },
  ];

  const activeIndex = sections.findIndex((s) => s.value === currentSection);

  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          {/* left section */}
          <nav className={styles.sectionContainer}>
            <div className={styles.sectionSlider} style={{ left: `${activeIndex * 25}%` }} />
            {sections.map((s) => (
              <button
                key={s.value}
                className={`${styles.sectionButton} ${currentSection === s.value ? styles.active : ""}`}
                onClick={() => dispatch(setSection(s.value))}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* droite : settings / profile */}
          <nav className={styles.rightGroup}>
            <CustomButton bColor="3" tColor="0" wSize="150px" text={t("profile")} onClick={() => {}} />
            <CustomButton
              bColor="3"
              wSize="150px"
              text={t("settings")}
              onClick={() => setIsSettings((prev) => !prev)}
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

          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{titles[currentChapter - 1]}</h2>
            {currentSection === "text" && <AudioPlayerBox />}
          </div>

          <div className={styles.rightCapital}>
            <div className={styles.layerRight1}></div>
            <div className={styles.layerRight2}></div>
            <div className={styles.layerRight3}></div>
            <div className={styles.layerRight4}></div>
          </div>
        </div>
      </div>

      {isSettings && <Settings bColor="0" onClose={() => setIsSettings(false)} />}
    </>
  );
}

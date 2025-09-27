import styles from "../styles/Settings.module.css";
import { useDispatch } from "react-redux";
import { setLanguage, setTheme } from "../reducers/settings";
import { useTranslation } from "../assets/translation/useTranslation";
import { useState } from "react";

function Settings({ bColor, tColor, onClose }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  // Radio buttons
  const [rbLanguage, setRbLanguage] = useState("en");
  const [rbTheme, setRbTheme] = useState("light");

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div
        className={styles.modal}
        style={{
          "--bColor": `var(--color-${bColor})`,
          "--tColor": `var(--color-${tColor})`,
        }}
      >
        {/* ---------- Language ---------- */}
        <h5>{t("language")}</h5>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="language"
              value="la"
              checked={rbLanguage === "la"}
              onChange={(e) => {
                const value = e.target.value;
                setRbLanguage(value);
                dispatch(setLanguage(value));
              }}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            Latina
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="language"
              value="en"
              checked={rbLanguage === "en"}
              onChange={(e) => {
                const value = e.target.value;
                setRbLanguage(value);
                dispatch(setLanguage(value));
              }}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            English
          </label>

          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="language"
              value="fr"
              checked={rbLanguage === "fr"}
              onChange={(e) => {
                const value = e.target.value;
                setRbLanguage(value);
                dispatch(setLanguage(value));
              }}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            Français
          </label>
        </div>
        <div className={styles.separator}></div>
        {/* ---------- Theme ---------- */}
        <h5>{t("theme")}</h5>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={rbTheme === "light"}
              onChange={(e) => {
                const value = e.target.value;
                setRbTheme(value);
                dispatch(setTheme(value));
              }}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            {t("light")}
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={rbTheme === "dark"}
              onChange={(e) => {
                const value = e.target.value;
                setRbTheme(value);
                dispatch(setTheme(value));
              }}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            {t("dark")}
          </label>
          <div />
        </div>
      </div>
    </>
  );
}

export default Settings;

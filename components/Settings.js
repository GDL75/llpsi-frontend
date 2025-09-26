import styles from "../styles/Settings.module.css";
import { useDispatch } from "react-redux";
import { setLanguage, setTheme } from "../reducers/settings";
import { useTranslation } from "../assets/translation/useTranslation";

function Settings({ appearance, onClose }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const modalStyle = `${styles.modal} ${
    appearance === "home" ? styles.homeModal : styles.xxxx
  }`;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={modalStyle}>
        <p>{t("language")}</p>
        <button onClick={() => dispatch(setLanguage("la"))}>Latina</button>
        <button onClick={() => dispatch(setLanguage("en"))}>English</button>
        <button onClick={() => dispatch(setLanguage("fr"))}>Français</button>
      </div>
    </>
  );
}

export default Settings;

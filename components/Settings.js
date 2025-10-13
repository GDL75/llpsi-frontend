import styles from "styles/Settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setTheme } from "reducers/settings";
import { useTranslation } from "data/translation/useTranslation";
import CustomRadio from "ui/CustomRadio";
import ModalPortal from "components/chapters/ModalPortal";

function Settings({ bColor, tColor, onClose }) {
  const t = useTranslation();
  const dispatch = useDispatch();

  const language = useSelector((state) => state.settings.value.language);
  const theme = useSelector((state) => state.settings.value.theme);

  const languages = [
    { value: "la", label: "Latina" },
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
  ];

  const themes = [
    { value: "light", label: t("light") },
    { value: "dark", label: t("dark") },
  ];

  return (
    <ModalPortal>
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
          style={{
            "--bColor": `var(--color-${bColor})`,
            "--tColor": `var(--color-${tColor})`,
          }}
        >
          {/* ---------- Language ---------- */}
          <h5>{t("language")}</h5>
          <div className={styles.radioGroup}>
            {languages.map(({ value, label }) => (
              <CustomRadio
                key={value}
                label={label}
                value={value}
                name="language"
                checked={language === value}
                onChange={() => dispatch(setLanguage(value))}
              />
            ))}
          </div>

          <div className="separator"></div>

          {/* ---------- Theme ---------- */}
          <h5>{t("theme")}</h5>
          <div className={styles.radioGroup}>
            {themes.map(({ value, label }) => (
              <CustomRadio
                key={value}
                label={label}
                value={value}
                name="theme"
                checked={theme === value}
                onChange={() => dispatch(setTheme(value))}
              />
            ))}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export default Settings;

import styles from "../styles/Header.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../reducers/language";
import { useTranslation } from "../assets/translation/useTranslation";
import CustomButton from "./CustomButton";

function Header() {
  const t = useTranslation();
  const [isModalLanguage, setIsModalLanguage] = useState(false);

  return (
    <header className={styles.header}>
      <p style={{ fontWeight: "800" }}>llpsi coloribus</p>
      <div className={styles.connection}>
        <CustomButton appearance="light" text={t("signup")} />
        <CustomButton appearance="dark" text={t("signin")} />
      </div>
      <CustomButton
        appearance="dark"
        text={t("language")}
        handleFunction={() => setIsModalLanguage((prev) => !prev)}
      />

      {/* Language modal */}
      {isModalLanguage && (
        <div className={styles.modal}>
          <button onClick={() => onSelectLanguage("fr")}>Français</button>
          <button onClick={() => onSelectLanguage("en")}>English</button>
          <button onClick={() => onSelectLanguage("la")}>Latina</button>
        </div>
      )}
    </header>
  );
}

export default Header;

import styles from "../styles/Header.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../reducers/settings";
import { useTranslation } from "../assets/translation/useTranslation";
import CustomButton from "./CustomButton";

function Header() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [isModalLanguage, setIsModalLanguage] = useState(false);
  
  return (
    <header className={styles.header}>
      <p style={{ fontWeight: "800" }}>llpsi coloribus</p>
      <div className={styles.connection}>
        <CustomButton appearance="primary" text={t("signup")} />
        <CustomButton appearance="secondary" text={t("signin")} />
      </div>
      <CustomButton
        appearance="secondary"
        text={t("settings")}
        handleFunction={() => setIsModalLanguage((prev) => !prev)}
      />
    </header>
  );
}

export default Header;

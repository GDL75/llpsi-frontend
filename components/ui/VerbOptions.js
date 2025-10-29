// ui/VerbOptions.js
import { useState } from "react";
import CustomRadio from "ui/CustomRadio";
import { useTranslation } from "components/hooks/useTranslation";
import styles from "styles/VerbOptions.module.css"; 

export default function VerbOptions({ voice, aspect, setVoice, setAspect }) {
  const t = useTranslation();

  return (
    <div className={styles.verbOptions}>
      <div className={styles.radioGroup}>
        <strong className={styles.label}>{t("aspect")}&nbsp;:</strong>
        <CustomRadio
          label={t("unfinished")}
          name="aspect"
          value="unfinished"
          checked={aspect === "unfinished"}
          onChange={() => setAspect("unfinished")}
        />
        <CustomRadio
          label={t("finished")}
          name="aspect"
          value="finished"
          checked={aspect === "finished"}
          onChange={() => setAspect("finished")}
        />
      </div>

      <div className={styles.radioGroup}>
        <strong className={styles.label}> {t("voice")}&nbsp;:</strong>
        <CustomRadio
          label={t("active")}
          name="voice"
          value="active"
          checked={voice === "active"}
          onChange={() => setVoice("active")}
        />
        <CustomRadio
          label={t("passive")}
          name="voice"
          value="passive"
          checked={voice === "passive"}
          onChange={() => setVoice("passive")}
        />
      </div>
    </div>
  );
}

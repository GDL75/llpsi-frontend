import { useSelector, useDispatch } from "react-redux";
import morphologyConfig from "data/morphologyConfig";
import { toggleMorphology, setAll } from "reducers/morphology";
import styles from "styles/SidebarRight.module.css";
import CustomCheckbox from "ui/CustomCheckbox";
import CustomButton from "ui/CustomButton";
import { useTranslation } from "data/translation/useTranslation";

export default function SidebarRight() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const enabled = useSelector((state) => state.morphology);
  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const separatorBefore = ["nominative", "lemma", "imperative", "comparative"];

  return (
    <aside className={styles.rightSide}>
      <div className={styles.fixedContainer}>
        <h5 className={styles.title}>{t("morphology")}</h5>
        <div className={styles.btnContainer}>
          <CustomButton
            bColor="2"
            tColor="0"
            wSize="80px"
            text={t("all")}
            handleFunction={() => dispatch(setAll(true))}
          />
          <CustomButton
            bColor="2"
            tColor="0"
            wSize="80px"
            text={t("none")}
            handleFunction={() => dispatch(setAll(false))}
          />
        </div>
        <div className={styles.checkboxList}>
          {morphologyConfig
            .filter(
              (morph) => morph.fromChapter <= currentChapter && morph.styleClass
            )
            .map((morph) => (
              <div key={morph.key}>
                {separatorBefore.includes(morph.key) && (
                  <div className="separator"></div>
                )}
                <CustomCheckbox
                  label={t(morph.key)}
                  labelClassName={morph.key}
                  checked={enabled[morph.key]}
                  onChange={() => dispatch(toggleMorphology(morph.key))}
                />
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
}

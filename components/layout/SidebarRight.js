import { useSelector, useDispatch } from "react-redux";
import morphologyConfig from "assets/morphologyConfig";
import { toggleMorphology } from "reducers/morphology";
import styles from "styles/SidebarRight.module.css";
import CustomCheckbox from "ui/CustomCheckbox";
import { useTranslation } from "assets/translation/useTranslation";

export default function SidebarRight() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const enabled = useSelector((state) => state.morphology);
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  return (
    <aside className={styles.rightSide}>
      <h5 className={styles.title}>Morphologie</h5>
      <div className={styles.checkboxList}>
        {morphologyConfig
          .filter((morph) => morph.fromChapter <= currentChapter)
          .map((morph) => (
            <CustomCheckbox
              key={morph.key}
              label={t(morph.key)}
              labelClassName={morph.styleClass}
              checked={enabled[morph.key]}
              onChange={() => dispatch(toggleMorphology(morph.key))}
            />
          ))}
      </div>
    </aside>
  );
}

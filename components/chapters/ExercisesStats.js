// components/ui/ExercisesStats.js
import { useSelector, useDispatch } from "react-redux";
import { checkExercise } from "reducers/exercises";
import styles from "styles/ExercisesStats.module.css";
import { useTranslation } from "components/hooks/useTranslation";
import { romanNumber } from "utils/numbers";
import CustomButton from "ui/CustomButton";

export default function ExercisesStats({ exercises }) {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.settings.value.language);
  const t = useTranslation();

  const stats = useSelector((state) => state.exercises.stats);
  const answers = useSelector((state) => state.exercises.answers);
  const checkedAll = useSelector((state) => state.exercises.checked);

  const handleCheck = (exercise) => {
    const exerciseAnswers = answers[exercise.id] || {};
    let correctInputs = 0;
    let correctSelects = 0;
    const details = {};

    exercise.text.forEach((item, index) => {
      const ans = exerciseAnswers[index];
      if (!ans) return;
      let isCorrectInput = false;
      let isCorrectSelect = false;

      if (item.gap && ans.text?.trim().toLowerCase() === item.solution.toLowerCase()) {
        correctInputs++;
        isCorrectInput = true;
      }
      if (item.gap && ans.morph === item.morphSolution) {
        correctSelects++;
        isCorrectSelect = true;
      }

      if (item.gap) details[index] = { isCorrectInput, isCorrectSelect };
    });

    dispatch(
      checkExercise({
        exerciseId: exercise.id,
        correctInputs,
        correctSelects,
        details,
      })
    );
  };

  // To upper case each letter of a word
  const toProperCase = (str) => str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className={styles.exercisesStats}>
      {Object.entries(stats).map(([id, ex]) => {
        const allGapsAnswered = ex.answeredGaps >= ex.totalGaps;
        const allSelectsAnswered = ex.answeredSelects >= ex.totalSelects;
        const allAnswered = allGapsAnswered && allSelectsAnswered;

        const exercise = exercises.find((e) => e.id === Number(id));
        const checked = checkedAll?.[id];

        return (
          <div key={id} className={styles.statsBox}>
            <h4>{toProperCase(exercises[Number(id) - 1].text[0].token)}</h4>
            <p>
              {t("completedGaps")} : {currentLanguage === "la" ? romanNumber(ex.answeredGaps) : ex.answeredGaps} /{" "}
              {currentLanguage === "la" ? romanNumber(ex.totalGaps) : ex.totalGaps}
            </p>
            {exercise.list && (
              <p>
                {t("completedLists")} :{" "}
                {currentLanguage === "la" ? romanNumber(ex.answeredSelects) : ex.answeredSelects} /{" "}
                {currentLanguage === "la" ? romanNumber(ex.totalSelects) : ex.totalSelects}
              </p>
            )}

            <CustomButton
              text={t("check")}
              onClick={() => handleCheck(exercise)}
              disabled={!allAnswered}
              wSize="80px"
            />

            {checked && (
              <div className={styles.results}>
                <p>
                  ✅ {t("correctGaps")} {": "}
                  {currentLanguage === "la" ? romanNumber(checked.correctInputs) : checked.correctInputs} /{" "}
                  {currentLanguage === "la" ? romanNumber(ex.totalGaps) : ex.totalGaps}
                </p>
                {exercise.list && (
                  <p>
                    🎯 {t("correctLists")} {": "}
                    {currentLanguage === "la" ? romanNumber(checked.correctSelects) : checked.correctSelects} /{" "}
                    {currentLanguage === "la" ? romanNumber(ex.totalSelects) : ex.totalSelects}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

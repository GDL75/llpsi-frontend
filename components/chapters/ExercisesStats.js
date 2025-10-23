// components/ui/ExercisesStats.js
import { useSelector, useDispatch } from "react-redux";
import { checkExercise } from "reducers/exercises";
import styles from "styles/ExercisesStats.module.css";

export default function ExercisesStats({ exercises }) {
  const dispatch = useDispatch();

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
            <h4>Exercice {id}</h4>
            <p>
              Inputs complétés : {ex.answeredGaps} / {ex.totalGaps}
            </p>
            <p>
              Listes complétées : {ex.answeredSelects} / {ex.totalSelects}
            </p>

            <button disabled={!allAnswered} onClick={() => handleCheck(exercise)}>
              Check
            </button>

            {checked && (
              <div className={styles.results}>
                <p>
                  ✅ {checked.correctInputs} bonnes réponses sur {ex.totalGaps}
                </p>
                <p>
                  🎯 {checked.correctSelects} dropdowns corrects sur {ex.totalSelects}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

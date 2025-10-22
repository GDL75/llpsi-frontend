import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer, updateStats } from "reducers/exercises";
import { useMorph } from "components/hooks/useMorph";
import { useAudio } from "context/AudioContext";
import Table from "ui/Table";
import { GapInput, DropDown } from "ui/UserInput";
import styles from "styles/Text.module.css";

export default function Text({ data, openComment }) {
  const m = useMorph();
  const { playAt } = useAudio();
  const dispatch = useDispatch();

  // Variables used for the exercises --------------------------------------------
  const answers = useSelector((state) => state.exercises?.answers?.[data.id]) || {};
  const totalGaps = data.text.filter((t) => t.gap).length;
  const totalSelects = data.text.filter((t) => t.gap && t.list).length;
  const answeredGaps = Object.values(answers).filter((a) => a.text?.trim()).length;
  const answeredSelects = Object.values(answers).filter((a) => a.morph?.trim()).length;

  // Mise à jour automatique des stats dans Redux
  useEffect(() => {
    dispatch(
      updateStats({
        exerciseId: data.id,
        totalGaps,
        totalSelects,
        answeredGaps,
        answeredSelects,
      })
    );
  }, [answeredGaps, answeredSelects, totalGaps, totalSelects, data.id, dispatch]);

  // Mise à jour des réponses utilisateur
  const handleChange = (index, field, value) => {
    dispatch(updateAnswer({ exerciseId: data.id, index, field, value }));
  };
  // End of variables used for the exercises ----------------------------------------

  const paragraphs = [];
  let currentParagraph = [];
  let isItalic = false;
  let isBold = false;

  // --- fonction utilitaire pour vider le paragraphe en cours ---
  const flushParagraph = (key) => {
    if (currentParagraph.length > 0) {
      paragraphs.push(
        <p key={key} className="chapter-text">
          {currentParagraph}
        </p>
      );
      currentParagraph = [];
    }
  };

  data.text?.forEach((item, index) => {
    // --- cas d'un titre ---
    if (item.markup && /^h[1-6]$/.test(item.markup)) {
      flushParagraph(`before-${item.markup}-${index}`);
      const Tag = item.markup;
      paragraphs.push(<Tag key={`${item.markup}-${index}`}>{item.token || ""}</Tag>);
      return;
    }

    // --- cas d'un mot ---
    if (item.token) {
      let tokenElement = m(item);

      if (isItalic) tokenElement = <em>{tokenElement}</em>;
      if (isBold) tokenElement = <strong>{tokenElement}</strong>;

      // --- si le mot déclenche l'audio ---
      if (item.audio) {
        const [min, sec] = item.audio.split(":").map((v) => parseFloat(v) || 0);
        const seconds = min * 60 + sec;
        tokenElement = (
          <span className={styles.audioWord} onClick={() => playAt(seconds)}>
            {tokenElement}
          </span>
        );
      }

      // si le mot contient un commentaire
      const styledToken = item.comment ? (
        <span key={`word-${index}`} className="comment" onClick={() => openComment(item.comment)}>
          {tokenElement}
        </span>
      ) : (
        <React.Fragment key={`word-${index}`}>{tokenElement}</React.Fragment>
      );

      currentParagraph.push(styledToken);

      if (item.suffix) currentParagraph.push(item.suffix);
    }

    // --- cas d’un gap (dans les exercices) ---
    if (item.gap) {
      currentParagraph.push(
        <GapInput
          key={`gap-input-${index}`}
          value={answers[index]?.text || ""}
          onChange={(e) => handleChange(index, "text", e.target.value)}
          placeholder=""
          width={`${data.gapWidth}ch`}
          dropValue={answers[index]?.morph || ""}
        />
      );

      currentParagraph.push(
        <DropDown
          key={`gap-select-${index}`}
          listType={item.list}
          value={answers[index]?.morph || ""}
          onChange={(e) => handleChange(index, "morph", e.target.value)}
        />
      );

      if (item.suffix) currentParagraph.push(item.suffix);
    }

    // --- cas d'une image ---
    if (item.image) {
      flushParagraph(`p-${index}`);
      paragraphs.push(
        <img key={`image-${index}`} src={item.image} alt="" style={{ display: "block", margin: "1rem 0" }} />
      );
    }

    // --- cas d'un tableau ---
    if (item.table) {
      flushParagraph(`p-${index}`); // a table cannot be rendered wthin a <p> -> p close + new div
      paragraphs.push(
        <div key={`noun-${index}`} style={{ margin: "1rem 0" }}>
          <Table table={item.table} renderCell={(token, morph) => m({ token, morph })} />
        </div>
      );
    }

    // --- traite la balise markup (hors grands titres, cf. ci-dessus) ---
    if (item.markup) {
      switch (item.markup) {
        case "i":
          isItalic = true;
          break;
        case "/i":
          isItalic = false;
          break;
        case "b":
          isBold = true;
          break;
        case "/b":
          isBold = false;
          break;
        case "br":
          currentParagraph.push(<br key={`br-${index}`} />);
          break;
        case "/p":
          flushParagraph(`p-${index}`);
          break;
        default:
          break;
      }
    }
  });

  // --- ajoute le dernier paragraphe s'il reste du contenu ---
  flushParagraph("last");

  return <div className="xxxxx">{paragraphs}</div>;
}

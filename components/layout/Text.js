import React from "react";
import { useMorph } from "utils/useMorph";

export default function Text({ chapter, openLemma }) {
  const m = useMorph();

  const paragraphs = [];
  let currentParagraph = [];
  let isItalic = false;
  let isBold = false;

  chapter.text.forEach((word, index) => {
    let tokenElement = m(word);

    // --- applique les styles actuels ---
    if (isItalic) tokenElement = <em>{tokenElement}</em>;
    if (isBold) tokenElement = <strong>{tokenElement}</strong>;

    // add lemma
    const styledToken = word.lemma ? (
      <span
        key={`word-${index}`}
        className="lemma"
        onClick={() => openLemma(word.lemma)}
      >
        {tokenElement}
      </span>
    ) : (
      <React.Fragment key={`word-${index}`}>{tokenElement}</React.Fragment>
    );

    currentParagraph.push(styledToken);

    // --- ajoute le suffixe (ponctuation / espace) ---
    if (word.suffix) {
      currentParagraph.push(word.suffix);
    }

    // --- traite la balise markup si elle existe ---
    if (word.markup) {
      switch (word.markup) {
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
          currentParagraph.push(<br key={"br-" + index} />);
          break;
        case "/p":
          paragraphs.push(
            <p key={`p-${index}`} className="chapter-text">
              {currentParagraph}
            </p>
          );
          currentParagraph = [];
          break;
        default:
          break;
      }
    }
  });

  // --- ajoute le dernier paragraphe s'il reste du contenu ---
  if (currentParagraph.length > 0) {
    paragraphs.push(
      <p key="last" className="chapter-text">
        {currentParagraph}
      </p>
    );
  }

  return <div className="chapter">{paragraphs}</div>;
}

import React from "react";
import { useMorph } from "utils/useMorph";
import Noun from "ui/Noun";

export default function Text({ chapter, openLemma }) {
  const m = useMorph();

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

  chapter.text.forEach((item, index) => {
    // --- cas d'un mot ---
    if (item.token) {
      let tokenElement = m(item);

      if (isItalic) tokenElement = <em>{tokenElement}</em>;
      if (isBold) tokenElement = <strong>{tokenElement}</strong>;

      const styledToken = item.lemma ? (
        <span
          key={`word-${index}`}
          className="lemma"
          onClick={() => openLemma(item.lemma)}
        >
          {tokenElement}
        </span>
      ) : (
        <React.Fragment key={`word-${index}`}>{tokenElement}</React.Fragment>
      );

      currentParagraph.push(styledToken);

      if (item.suffix) currentParagraph.push(item.suffix);
    }

    // --- cas d'une image ---
    if (item.image) {
      flushParagraph(`p-${index}`);
      paragraphs.push(
        <img
          key={`image-${index}`}
          src={item.image}
          alt=""
          style={{ display: "block", margin: "1rem 0" }}
        />
      );
    }

    // --- cas d'un tableau Noun ---
    if (item.noun) {
      flushParagraph(`p-${index}`);
      paragraphs.push(
        <div key={`noun-${index}`} style={{ margin: "1rem 0" }}>
          <Noun data={item.noun} />
        </div>
      );
    }

    // --- traite la balise markup ---
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

  return <div className="chapter">{paragraphs}</div>;
}

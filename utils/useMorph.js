import React from "react";
import { morphMap } from "data/morphologyConfig";
import { useSelector } from "react-redux";

// A custom HOOK is required to avoid render errors
export function useMorph() {
  const morphology = useSelector((state) => state.morphology);

  const m = ({ token, morph, gender }) => {
    let result;

    // === 1) Traitement de la morphologie ===
    if (morph) {
      const parts = token.split("-");

      // Cas 1a : aucun tiret
      if (parts.length === 1) {
        result = <span className={morph}>{token}</span>;
      }

      // Cas 1b : un seul tiret
      else if (parts.length === 2) {
        let [radical, ending] = parts;

        // Si le tiret est final, on remplace par "•" seulement si la morphologie est active
        if (token.endsWith("-") && morphology[morph]) {
          ending = "•";
        }

        result = (
          <>
            {radical}
            {ending && <span className={morph}>{ending}</span>}
          </>
        );
      }

      // Cas 1c : deux tirets
      else if (parts.length === 3) {
        const [radical, middle, ending] = parts;
        result = (
          <>
            {radical}
            <span className={morph}>{middle}</span>
            {ending}
          </>
        );
      }
    }

    // === 2) Si morph n’existe pas ===
    if (!result) {
      result = token;
    }

    // === 3) Application du genre si présent ===
    if (gender) {
      result = <span className={gender}>{result}</span>;
    }

    return result;
  };

  return m;
}

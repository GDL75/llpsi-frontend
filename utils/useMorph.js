import React from "react";
import { morphMap } from "data/morphologyConfig";
import { useSelector } from "react-redux";

// A custom HOOK is required to avoid render errors
export function useMorph() {
  // Getting the state morphology from store
  const morphology = useSelector((state) => state.morphology);

  const m = (text, code) => {
    // Separating radical and flexional ending
    let [radical, desinence] = text.split("-");

    // Separating codes and getting corresponding classes
    const codes = code.split("-");
    const classes = codes.map((c) => morphMap[c]);

    const mainClass = classes[0] || "";
    const endingClass = classes[1] || "";

    // Special case : word ending with "-" but with no desisnence
    if (text.endsWith("-") && !desinence) {
      // "•" is only added if the morphology is active
      if (morphology[endingClass]) {
        desinence = "•";
      }
    }

    if (!desinence) {
      return <span className={mainClass}>{radical}</span>;
    }

    return (
      <span className={mainClass}>
        {radical}
        <span className={endingClass}>{desinence}</span>
      </span>
    );
  };
  return m;
}

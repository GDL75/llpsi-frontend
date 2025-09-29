import styles from "styles/TextHighlightExamples.module.css";

export default function TextHighlightExamples() {
  const examples = [
    { label: "Couleur", className: styles.color },
    { label: "Gras", className: styles.bold },
    { label: "Italique", className: styles.italic },
    { label: "Souligné (continu)", className: styles.underline },
    { label: "Souligné (pointillé)", className: styles.underlineDashed },
    { label: "Souligné (vague)", className: styles.underlineWavy },
    { label: "Surligné", className: styles.highlight },
    { label: "Majuscules", className: styles.uppercase },
    { label: "Ombre portée", className: styles.shadow },
    { label: "Contour", className: styles.stroke },
    { label: "Dégradé", className: styles.gradient },
    { label: "Encadré", className: styles.box },
    { label: "Pastille", className: styles.badge },
    { label: "Effet au survol", className: styles.hover },
    { label: "Clignotant", className: styles.blink },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Exemples de mise en évidence de texte</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Méthode</th>
            <th>Exemple</th>
          </tr>
        </thead>
        <tbody>
          {examples.map((ex, i) => (
            <tr key={i}>
              <td>{ex.label}</td>
              <td>
                <span className={ex.className}>Exemple</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

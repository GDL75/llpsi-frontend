import styles from "styles/LemmaModal.module.css";

export default function LemmaModal({ lemma, onClose }) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <h3>{lemma}</h3>
        <img src={`/images/lemmas/${lemma}.jpg`} alt={lemma} />
        <p>Texte explicatif pour {lemma}...</p>
      </div>
    </>
  );
}

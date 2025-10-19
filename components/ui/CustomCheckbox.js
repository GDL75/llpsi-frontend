import styles from "styles/CustomCheckbox.module.css";

export default function CustomCheckbox({ label, checked, onChange, labelClassName }) {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" checked={checked} onChange={onChange} className={styles.checkboxInput} />
      <span className={styles.customCheckbox}></span>
      <span className={labelClassName}>{label}</span>
    </label>
  );
}

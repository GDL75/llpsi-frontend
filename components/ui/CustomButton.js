import styles from "styles/CustomButton.module.css";

function CustomButton({ bColor, tColor, text, handleFunction }) {

  return (
    <button
      className={styles.button}
      style={{
        "--bColor": `var(--color-${bColor})`,
        "--tColor": `var(--color-${tColor})`,
      }}
      onClick={handleFunction}
    >
      {text}
    </button>
  );
}

export default CustomButton;

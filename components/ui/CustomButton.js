import styles from "styles/CustomButton.module.css";

function CustomButton({ bColor = "2", tColor = "0", wSize = "auto", text, ...props }) {
  return (
    <button
      className={styles.button}
      style={{
        "--bColor": `var(--color-${bColor})`,
        "--tColor": `var(--color-${tColor})`,
        "--wSize": `${wSize}`,
      }}
      {...props}
    >
      {text}
    </button>
  );
}

export default CustomButton;

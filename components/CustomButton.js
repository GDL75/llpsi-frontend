import styles from "../styles/CustomButton.module.css";

function CustomButton({appearance, text, handleFunction}) {
  const buttonStyle = `${styles.button} ${
    appearance === "dark" ? styles.darkButton : styles.lightButton
  }`;

  return (
    <button className={buttonStyle} onClick={handleFunction}>
      {text}
    </button>
  );
}

export default CustomButton;

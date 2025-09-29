import { useState } from "react";
import styles from "styles/ToggleButton.module.css";

export default function ToggleButton({ options, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (value, index) => {
    setActiveIndex(index);
    if (onChange) onChange(value); // un seul appel, toujours la string
  };

  return (
    <div className={styles.toggleContainer}>
      <div
        className={styles.toggleSlider}
        style={{ left: activeIndex === 0 ? "0" : "50%" }}
      ></div>
      {options.map((opt, i) => (
        <p
          key={opt.value}
          className={`${styles.toggleOption} ${
            activeIndex === i ? "active" : ""
          }`}
          onClick={() => handleClick(opt.value, i)}
        >
          {opt.label}
        </p>
      ))}
    </div>
  );
}

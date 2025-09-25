import Image from "next/image";
import styles from "../styles/FramedImage.module.css";

export default function FramedImage() {
  return (
    <div>
      <h2>Cadre avec border-image</h2>
      <div className={styles.borderImage}>
        <Image
          src="/images/caveCanem.png"
          alt="Exemple"
          width={300}
          height={200}
        />
      </div>

      <h2>Cadre avec box-shadow multiples</h2>
      <div className={styles.boxShadow}>
        <Image
          src="/images/caveCanem.png"
          alt="Exemple"
          width={300}
          height={200}
        />
      </div>

      <h2>Cadre SVG décoratif</h2>
      <div className={styles.svgWrapper}>
        <svg
          viewBox="0 0 340 240"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgFrame}
        >
          <rect
            x="5"
            y="5"
            width="330"
            height="230"
            fill="none"
            stroke="goldenrod"
            strokeWidth="10"
            rx="15"
            ry="15"
          />
        </svg>
        <Image
          src="/images/caveCanem.png"
          alt="Exemple"
          width={300}
          height={200}
          className={styles.svgImage}
        />
      </div>

      <h2>Cadre style antique (CSS pur)</h2>
      <div className={styles.antique}>
        <Image
          src="/images/caveCanem.png"
          alt="Exemple"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
}

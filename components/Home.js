import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "../assets/translation/useTranslation";
import CustomButton from "./CustomButton";
import Settings from "./Settings";

function Home() {
  const t = useTranslation();
  const [isSettings, setIsSettings] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <h5>llpsi coloribus</h5>
          <h3>Hans H. Ørberg</h3>
          <CustomButton
            bColor="3"
            tColor="0"
            text={t("settings")}
            handleFunction={() => setIsSettings((prev) => !prev)}
          />
        </div>
        <h1>
          Lingua latīna
          <br /> per sē illūstrāta
        </h1>
        <h4 style={{ marginBottom: "0px" }}>Pars I</h4>
        <h4 style={{ marginBottom: "40px", marginTop: "0px" }}>
          Familia rōmāna
        </h4>
        <div className={styles.picContainer}>
          <Image
            src="/images/caveCanem.png"
            alt="A dog guarding a Roman villa"
            width={624}
            height={416}
          />
        </div>
      </main>
      {/* The Settings modal needs to be outside of <main> */}
      {isSettings && <Settings onClose={() => setIsSettings(false)} />}
    </>
  );
}

export default Home;

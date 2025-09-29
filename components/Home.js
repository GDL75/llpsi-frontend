import styles from "styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "assets/translation/useTranslation";
import { setBook } from "reducers/settings";
import CustomButton from "ui/CustomButton";
import ToggleButton from "ui/ToggleButton";
import Settings from "./Settings";
import Image from "next/image";

function Home() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSettings, setIsSettings] = useState(false);
  const book = useSelector((state) => state.settings.value.book);
  const image =
    book === "book1" ? "/images/caveCanem.png" : "/images/romaAeterna.png";

  return (
    <>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <ToggleButton
            options={[
              { value: "book1", label: t("book1") },
              { value: "book2", label: t("book2") },
            ]}
            onChange={(value) => dispatch(setBook(value))}
          />
          <h4>Hans H. Ørberg</h4>
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
        <h3>{book === "book1" ? "Pars I" : "Pars II"}</h3>
        <h3 style={{ marginBottom: "20px" }}>
          {book === "book1" ? "FAMILIA RŌMĀNA" : "RŌMA ÆTERNA"}
        </h3>
        <div className={styles.connectionContainer}>
          <CustomButton
            bColor="3"
            tColor="0"
            text={t("signup")}
            // handleFunction={() => setIsSettings((prev) => !prev)}
          />
          <CustomButton
            bColor="3"
            tColor="0"
            text={t("signin")}
            handleFunction={() => router.push("/test")}
          />
        </div>
        <div className={styles.picContainer}>
          <Image
            src={image}
            alt="A dog guarding a Roman villa"
            width={624}
            height={416}
          />
        </div>
      </main>
      {/* The Settings modal needs to be outside of <main> */}
      {isSettings && (
        <Settings bColor="0" onClose={() => setIsSettings(false)} />
      )}
    </>
  );
}

export default Home;

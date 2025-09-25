import styles from "../styles/Home.module.css";
import Header from "./Header";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h3>Hans H. Ørberg</h3>
        <h1>
          Lingua latīna
          <br /> per sē illūstrāta
        </h1>
        <h4>Pars 1</h4>
        <h4>Familia rōmāna</h4>
        <Image
          src="/images/caveCanem.png"
          alt="A dog guarding a Roman villa"
          width={624}
          height={416}
          // style={{
          //   borderRadius: "10px",
          //   border: "12px ridge peru",
          // }}
        />
      </main>
    </>
  );
}

export default Home;

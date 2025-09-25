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
        <h4 style={{ marginBottom: "0px" }}>Pars I</h4>
        <h4 style={{ marginBottom: "40px", marginTop: "0px" }}>
          Familia rōmāna
        </h4>
        <div
          style={{
            border: "2px solid #000000",
            borderRadius: "50px",
            overflow: "hidden",
            lineHeight: 0,
            borderColor: "#924311",
            boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Image
            src="/images/caveCanem.png"
            alt="A dog guarding a Roman villa"
            width={624}
            height={416}
          />
        </div>
      </main>
    </>
  );
}

export default Home;

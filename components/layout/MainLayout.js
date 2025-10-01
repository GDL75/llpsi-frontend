import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Footer from "./Footer";
import styles from "styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <SidebarLeft />
        <main className={styles.main}>{children}</main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

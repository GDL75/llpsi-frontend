import styles from "styles/MainLayout.module.css";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import Footer from "./Footer";
import AudioPlayer from "ui/AudioPlayer";
import { useAudio } from "context/AudioContext";

export default function MainLayout({ children }) {
  const { playerRef } = useAudio();

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.body}>
        <SidebarLeft />
        <main className={styles.main}>{children}</main>
        <SidebarRight />
      </div>
      <Footer />
      
      <AudioPlayer src="/audio/09-audio.mp3" playerRef={playerRef} />
    </div>
  );
}

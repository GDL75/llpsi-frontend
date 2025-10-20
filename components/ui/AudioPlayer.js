// components/ui/AudioPlayer.js
import React, { useRef, useEffect } from "react";
import styles from "styles/AudioPlayer.module.css";

export default function AudioPlayer({ src, playerRef, visible = false }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (playerRef) {
      playerRef.current = audioRef.current;
    }
  }, [playerRef]);

  return (
    <audio
      ref={audioRef}
      src={src}
      preload="metadata"
      controls={visible}
      controlsList="nodownload noplaybackrate"
      className={visible ? styles.visiblePlayer : styles.hiddenPlayer}
    />
  );
}

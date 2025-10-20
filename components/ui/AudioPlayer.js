// components/ui/AudioPlayer.js
import React, { useRef, useEffect } from "react";
import styles from "styles/AudioPlayer.module.css";
import { useAudio } from "context/AudioContext";

export default function AudioPlayer({ src, visible = false }) {
  const audioRef = useRef(null);
  const { registerPlayer } = useAudio();

  useEffect(() => {
    if (audioRef.current) {
      registerPlayer(audioRef.current);
    }
  }, [audioRef.current]); // se déclenche au montage

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

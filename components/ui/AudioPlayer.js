import React, { useRef, useEffect, useState } from "react";
import styles from "styles/AudioPlayer.module.css";
import { useAudio } from "context/AudioContext";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const { registerPlayer, togglePlay, isPlaying } = useAudio();

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const formatTime = (t) => {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const newTime = (e.target.value / 100) * duration;
    a.currentTime = newTime;
    setProgress(e.target.value);
  };

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    // Enregistre le player dans le contexte une seule fois
    registerPlayer(a);

    const handleLoaded = () => setDuration(a.duration || 0);
    const handleTimeUpdate = () => {
      if (!a.duration) return;
      setCurrent(a.currentTime);
      setProgress((a.currentTime / a.duration) * 100);
    };

    a.addEventListener("loadedmetadata", handleLoaded);
    a.addEventListener("timeupdate", handleTimeUpdate);

    // Synchroniser dès le départ
    if (a.readyState >= 1) handleLoaded();

    return () => {
      a.removeEventListener("loadedmetadata", handleLoaded);
      a.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []); // <-- vide : on n'écoute pas registerPlayer ici

  return (
    <div className={styles.playerWrapper}>
      <audio ref={audioRef} src={src} preload="metadata" />

      <button onClick={togglePlay} className={styles.playButton}>
        <img
          src={isPlaying ? "/images/_cursorPause.png" : "/images/_cursorPlay.png"}
          alt={isPlaying ? "Pause" : "Play"}
          className={styles.playIcon}
        />
      </button>

      <input
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={progress}
        onChange={handleSeek}
        className={styles.progressBar}
      />

      <div className={styles.timeDisplay}>
        {formatTime(current)} / {formatTime(duration)}
      </div>
    </div>
  );
}

import { useAudio } from "context/AudioContext";
import styles from "styles/AudioPlayerBox.module.css";

export default function AudioPlayerBox() {
  const { togglePlay, seekTo, setPlayerVolume, isPlaying, progress, current, duration, volume } = useAudio();

  const formatTime = (t) => {
    if (!t || isNaN(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e) => seekTo(parseFloat(e.target.value));
  const handleVolume = (e) => setPlayerVolume(parseFloat(e.target.value));

  return (
    <div className={styles.playerBox}>
      <button onClick={togglePlay} className={styles.playButton}>
        <img
          src={isPlaying ? "/images/_cursorPause.png" : "/images/_cursorPlay.png"}
          alt={isPlaying ? "Pause" : "Play"}
          className={styles.playIcon}
        />
      </button>
      <div className={styles.progressBarContainer}>
        <div className={styles.timeDisplay}>{formatTime(current)}</div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleSeek}
          className={styles.progressBar}
          style={{ "--fill": `${progress}%` }}
        />
        <div className={styles.timeDisplay}>{formatTime(duration)}</div>
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
        className={styles.volumeSlider}
        style={{ "--fill": `${volume * 100}%` }}
      />
    </div>
  );
}

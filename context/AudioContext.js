// context/AudioContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fonction que le lecteur appelle pour s’enregistrer
  const registerPlayer = (audioElement) => {
    if (!audioElement) return;
    setPlayer(audioElement);
  };

  useEffect(() => {
    if (!player) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    player.addEventListener("play", handlePlay);
    player.addEventListener("pause", handlePause);
    player.addEventListener("ended", handleEnded);

    return () => {
      player.removeEventListener("play", handlePlay);
      player.removeEventListener("pause", handlePause);
      player.removeEventListener("ended", handleEnded);
    };
  }, [player]); // <— se déclenche dès que le lecteur est monté

  const playAt = (seconds) => {
    if (!player) return;

    if (!player.paused) {
      player.pause();
    } else {
      player.currentTime = seconds;
      player.play();
    }
  };

  return <AudioContext.Provider value={{ registerPlayer, playAt, isPlaying }}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  return useContext(AudioContext);
}

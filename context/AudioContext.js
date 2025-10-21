import { createContext, useContext, useState, useEffect } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const registerPlayer = (audioElement) => {
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

    setIsPlaying(!player.paused);

    return () => {
      player.removeEventListener("play", handlePlay);
      player.removeEventListener("pause", handlePause);
      player.removeEventListener("ended", handleEnded);
    };
  }, [player]);

  const togglePlay = () => {
    if (!player) return;
    if (player.paused) player.play();
    else player.pause();
  };

  const playAt = (seconds) => {
    if (!player) return;
    player.currentTime = seconds;
    player.play();
  };

  return (
    <AudioContext.Provider value={{ registerPlayer, togglePlay, playAt, isPlaying, player }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}

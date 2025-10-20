// context/AudioContext.js
import { createContext, useContext, useRef } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const playerRef = useRef(null);

  const isPlaying = () => {
    const player = playerRef.current;
    return player && !player.paused;
  };

  const playAt = (seconds) => {
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying()) {
      player.pause();
    } else {
      player.currentTime = seconds;
      player.play();
    }
  };

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    if (player.paused) player.play();
    else player.pause();
  };

  return <AudioContext.Provider value={{ playerRef, playAt, togglePlay, isPlaying }}>{children}</AudioContext.Provider>;
}

export function useAudio() {
  return useContext(AudioContext);
}

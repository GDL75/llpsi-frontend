import { createContext, useContext, useRef } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const playerRef = useRef(null);

  const playAt = (seconds) => {
    const player = playerRef.current?.audio?.current;
    if (player) {
      player.currentTime = seconds;
      player.play();
    }
  };

  return (
    <AudioContext.Provider value={{ playerRef, playAt }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}

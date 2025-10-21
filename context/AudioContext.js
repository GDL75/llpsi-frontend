import { createContext, useContext, useState, useEffect } from "react";

// This Context stores all the props used in the AudioPlayer (hidden in MainLayout)
const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const registerPlayer = (audioElement) => setPlayer(audioElement);

  useEffect(() => {
    if (!player) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      if (!player.duration) return;
      setCurrent(player.currentTime);
      setProgress((player.currentTime / player.duration) * 100);
    };
    const handleLoaded = () => setDuration(player.duration || 0);

    player.addEventListener("play", handlePlay);
    player.addEventListener("pause", handlePause);
    player.addEventListener("ended", handleEnded);
    player.addEventListener("timeupdate", handleTimeUpdate);
    player.addEventListener("loadedmetadata", handleLoaded);

    // Synchroniser
    setIsPlaying(!player.paused);
    setDuration(player.duration || 0);
    setVolume(player.volume);

    return () => {
      player.removeEventListener("play", handlePlay);
      player.removeEventListener("pause", handlePause);
      player.removeEventListener("ended", handleEnded);
      player.removeEventListener("timeupdate", handleTimeUpdate);
      player.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [player]);

  const togglePlay = () => {
    if (!player) return;
    player.paused ? player.play() : player.pause();
  };

  const seekTo = (percent) => {
    if (!player || !duration) return;
    player.currentTime = (percent / 100) * duration;
  };

  const playAt = (seconds) => {
    if (!player) return;
    player.currentTime = seconds;
    player.play();
  };

  const setPlayerVolume = (v) => {
    if (!player) return;
    player.volume = v;
    setVolume(v);
  };

  return (
    <AudioContext.Provider
      value={{
        registerPlayer,
        togglePlay,
        seekTo,
        playAt,
        setPlayerVolume,
        isPlaying,
        progress,
        current,
        duration,
        volume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}

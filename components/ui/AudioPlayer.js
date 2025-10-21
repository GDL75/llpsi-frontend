import React, { useEffect, useRef } from "react";
import { useAudio } from "context/AudioContext";

// this player is the actual sound source. It is hidden and positioned in Layout.js
// the actual controllers are in AudioPlayerBox, which LOOKS LIKE an audio player
// but is in fact only a basic component capturing the right props.
export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const { registerPlayer } = useAudio();

  useEffect(() => {
    if (audioRef.current) registerPlayer(audioRef.current);
  }, [registerPlayer]);

  return <audio ref={audioRef} src={src} preload="metadata" style={{ display: "none" }} />;
}

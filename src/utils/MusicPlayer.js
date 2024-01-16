import { useState, useRef, useEffect } from "react";

// MusicPlayer Component: Manages the playback of a looping music track.
const MusicPlayer = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  // Set up the audio element and handle cleanup when the component unmounts.
  useEffect(() => {
    audioRef.current = new Audio("/assets/zen_music_tetris.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Function to play music, handling playback errors.
  const playMusic = () => {
    if (isMusicPlaying && audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error.message);
      });
    }
  };

  // Effect to control music playback based on the isMusicPlaying state.
  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying]);

  // Return relevant data and functions for external use.

  return { isMusicPlaying, playMusic, setIsMusicPlaying, audioRef };
};

export default MusicPlayer;

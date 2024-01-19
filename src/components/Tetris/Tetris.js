import React, { useState, useEffect } from "react";
import MusicPlayer from "./../../utils/MusicPlayer";
// Game helper functions
import { createStage, checkCollision } from "../../gameHelpers";

// Styles
import "../../components/Tetris/styles/AvatarTetris.css";
import "../../components/Tetris/styles/TetrisStyles.css";
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import RainbowText from "./../RainbowText/RainbowText";
// Custom Hook
import { useUser } from "../../context/UserContext";

// Tetris Hooks
import { useInterval } from "../../hooks/useInterval";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useGameStatus } from "../../hooks/useGameStatus";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import HomeButton from "../HomeButton/HomeButton";
import HookInfoDisplay from "./../HookInfoDisplay/ HookInfoDisplay";

const Tetris = () => {
  const { user } = useUser();
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const { score, setScore, rows, setRows, level, setLevel, getRandomMessage } =
    useGameStatus(rowsCleared);

  //Music
  const { isMusicPlaying, playMusic, setIsMusicPlaying } = MusicPlayer();
  const [buttonText, setButtonText] = useState("Stop Music");
  const [isMusicButtonVisible, setIsMusicButtonVisible] = useState(false);

  const stopStartMusic = () => {
    if (isMusicPlaying) {
      setIsMusicPlaying(false);
      setButtonText("Start Music");
    } else {
      setIsMusicPlaying(true);
      setButtonText("Stop Music");
    }
  };

  const renderMusicButton = () => {
    return (
      <button onClick={stopStartMusic}>
        {isMusicPlaying ? "Stop Music" : "Start Music"}
      </button>
    );
  };

  //Get Message

  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    if (rowsCleared && rowsCleared !== 0) {
      const newMessage = getRandomMessage();
      setRandomMessage(newMessage);
    }
  }, [rowsCleared, getRandomMessage]);

  //Game Functions

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  // StartButton Logic
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    // Common actions, regardless of whether the game has started or not
    setIsGameStarted(true);
    setIsMusicButtonVisible(true);
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
    setRandomMessage("");

    if (!isGameStarted) {
      // Specific actions for when the game starts for the first time
      playMusic();
      setIsMusicPlaying(true);
    } else {
      // Specific actions for restarting the game
      //setIsMusicPlaying(false);
    }
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  //Render Components
  return (
    <StyledTetrisWrapper
      className="StyledTetrisWrapper"
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <h1 className="game-title">
        <RainbowText text="Hooked Tetris" />
      </h1>
      <StyledTetris className="StyledTetris">
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              {isMusicButtonVisible &&
                renderMusicButton(
                  <button onClick={stopStartMusic}>{buttonText}</button>
                )}
            </div>
          )}
          <StartButton callback={startGame} isGameStarted={isGameStarted} />
          <HomeButton className="HomeButton" />
          {user.avatar && (
            <div className="avatar-container-tetris">
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                  user.avatar
                )}`}
                alt="Avatar"
                className="avatar-image-tetris"
              />
              <div className="avatar-text-tetris">
                {user.name && <h1>{user.name}</h1>}
              </div>
            </div>
          )}
        </aside>
        <div className="container-info-display">
          <HookInfoDisplay message={randomMessage} />
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;

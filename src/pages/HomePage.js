// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import AvatarCreator from "../components/AvatarCreator/AvatarCreator";
import NameInput from "../components/NameInput/NameInput";
import IntroParagraph from "../components/IntroParagraph/IntroParagraph";
import "./HomePage.css";

const HomePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/game");
  };

  return (
    <div className="home-page-container">
      <h1 className="game-title">Hooked Tetris</h1>
      <h2 className="home-page-title">Welcome, {user.name}!</h2>
      <IntroParagraph className="intro-paragraph" />
      <NameInput className="name-input" />
      <AvatarCreator className="avatar-creator" />
      <button className="play-button" onClick={handlePlayClick}>
        PLAY
      </button>
    </div>
  );
};

export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Game.css";
import { Btn } from "../Components/Btn";

export const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="game-cover">
      <div className="game-image">
        <img src="/dices.png" alt="" />
      </div>
      <div className="game-content">
        <div className="game-heading">DICE GAME</div>
        <Btn onClick={() => navigate("/dicegame")} text="Play Now" />
      </div>
    </div>
  );
};

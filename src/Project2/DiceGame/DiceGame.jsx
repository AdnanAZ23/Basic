import React, { useState } from "react";
import { Btn } from "../Components/Btn";
import "./DiceGame.css";
import { Box } from "../Components/Box";

export const DiceGame = () => {
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleText = () => {
    setRules(!rules);
    console.log(rules);
  };

  const rollDice = () => {
    if (!selectedNumber) return setError("You have not selected any number");
    const getRandomNumber = randomNumber(1, 7);

    setCurrentDice(getRandomNumber);
    if (selectedNumber === getRandomNumber) {
      setScore((prev) => prev + selectedNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber();
  };

  return (
    <div className="dicegame-cover">
      <div className="dicegame-top">
        <div className="total-score">
          <div className="number">{score}</div>
          <div className="score">Total Score</div>
        </div>
        <div className="table">
          <div className="error-msg">{error}</div>
          <div>
            <Box
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
              setError={setError}
            />
          </div>
          <div className="select-number">Select Number</div>
        </div>
      </div>
      <div className="dicegame-bottom">
        <div onClick={rollDice} className="dice-image">
          <img src={`/dice_${currentDice}.png`} alt="" />
        </div>
        <div>Click on Dice to roll</div>
        <Btn onClick={resetScore} isOutline={true} text="Reset Score"></Btn>
        <Btn
          onClick={toggleText}
          text={`${rules ? "Hide Rules" : "Show Rules"}`}
        ></Btn>
        {rules && (
          <div className="rules-container">
            <div className="rule-heading">How to play dice game</div>
            <div className="rule-text">
              <p> Select any number</p>
              <p>Click on dice image</p>
              <p>
                After click on dice if selected number is equal to dice number
                you will get same point as dice
              </p>
              <p>If you get wrong guess then 2 point will be dedcuted</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

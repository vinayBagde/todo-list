import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, SetArr] = useState(["no moves"]);

  let updateBlue = () => {
    setMoves((previousmoves) => {
      return { ...previousmoves, blue: previousmoves.blue + 1 };
    });

    SetArr((previousArr) => {
      return [...previousArr, "blue moves"];
    });
    console.log(arr);
  };
  let updateYellow = () => {
    setMoves((previousmoves) => {
      return { ...previousmoves, yellow: previousmoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((previousmoves) => {
      return { ...previousmoves, green: previousmoves.green + 1 };
    });
  };
  let updateRed = () => {
    setMoves((previousmoves) => {
      return { ...previousmoves, red: previousmoves.red + 1 };
    });
  };
  return (
    <>
      <div>
        <p>Game Begins!</p>
        <p>{arr}</p>
        <div className="board">
          <p>Blue moves = {moves.blue}</p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
            +1
          </button>
          <p>yellow moves = {moves.yellow} </p>
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={updateYellow}
          >
            +1
          </button>
          <p>Green moves = {moves.green} </p>
          <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
            +1
          </button>
          <p>Red moves = {moves.red} </p>
          <button style={{ backgroundColor: "red" }} onClick={updateRed}>
            +1
          </button>
        </div>
      </div>
    </>
  );
}

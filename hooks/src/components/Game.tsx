import React, { useState } from "react";

import { Histories, ISquare } from "../domain/entity";
import {
  calculateWinner,
  getStatus,
  createNewSquares
} from "../domain/services";
import Board from "./Board";
import Moves from "./Moves";

const Game = () => {
  const [histories, setHistory] = useState<Histories>([
    {
      squares: Array<ISquare>(9).fill(null)
    }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    // 参照かどうかを気にしなくていいので完結にかける
    const _squares = histories[stepNumber].squares;

    // すでに勝者が決まっている場合 or すでに選んだボタンのときはbreak
    if (calculateWinner(_squares) || _squares[i]) {
      return;
    }

    // imuutableに
    // squares[i] = xIsNext ? "X" : "O";
    const squares = createNewSquares(_squares, xIsNext, i);

    const newHistories = [...histories, { squares }];

    setHistory(newHistories);
    setStepNumber(histories.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = histories[stepNumber];

  const winner = calculateWinner(current.squares);

  // renderする関数を書くのは基本NG
  //   const moves = histories.map((_, move) => {
  //     const desc = move ? "Go to move #" + move : "Go to game start";
  //     return (
  //       <li key={move}>
  //         <button onClick={() => jumpTo(move)}>{desc}</button>
  //       </li>
  //     );
  //   });

  const status = getStatus(winner, xIsNext);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves histories={histories} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default Game;

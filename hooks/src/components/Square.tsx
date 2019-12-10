import React from "react";
import { ISquare } from "../domain/entity";

interface SquareProps {
  value: ISquare;
  onClick: () => void;
}

const Square: React.SFC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

import { useState } from "react";

const useGame = () => {
  const initialboard = () => Array(9).fill(null);

  const [board, setBoard] = useState(initialboard());
  const [isXturn, setXturn] = useState(true);
  const win_logic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (board) => {
    for (let i = 0; i < win_logic.length; i++) {
      const [a, b, c] = win_logic[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    // console.log(winner);
    if (winner || board[index]) return;

    const newboard = [...board];

    newboard[index] = isXturn ? "X" : "O";
    setBoard(newboard);
    setXturn(!isXturn);
  };

  const getStatusMsg = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins the game!`;
    if (!board.includes(null)) return "It's a draw!";
    return `Player ${isXturn ? "X" : "O"} turn`
  };

  const resetGame = () => {
    setBoard(initialboard());
    setXturn(true);
  };

  return { board, handleClick, calculateWinner, getStatusMsg, resetGame };
};

export default useGame;

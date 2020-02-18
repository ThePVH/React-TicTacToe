import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Square from "./Square";
import Status from "./Status";

const defaultBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const defaultPlayer = "X";

export default function Board() {
    const [boardSquares, setBoardSquares] = useState(defaultBoard);
    const [player, setPlayer] = useState(defaultPlayer);
    const [winner, setWinner] = useState();

    //Handling button click - X or O
    function handleClick(index) {
        const isValid = boardSquares[index] === index;
        if (isValid && !winner) {
            const newBoardSquares = [...boardSquares];
            newBoardSquares[index] = player;

            setBoardSquares(newBoardSquares);
            setPlayer(player === "X" ? "O" : "X");

            const winner = calculateWinner(newBoardSquares);
            setWinner(winner);
        }
    }

    //Render square
    function renderSquare(index) {
        return (
            <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
        )
    }

    //refresh page
    function refreshPage() {
        setBoardSquares(defaultBoard);
        setWinner(undefined);
    }

    //Board
    return (
        <Grid>
            <Grid className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </Grid>
            <Grid className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </Grid>
            <Grid className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </Grid>
            <Status name={player} winner={winner} handleRestart={refreshPage} />
        </Grid>
    );
}

//Calculate the winner
function calculateWinner(squares) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //check winning lines if matches
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
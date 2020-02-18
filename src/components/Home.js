import React from 'react';

import Board from './Board';


// imagine index page
export function Home() {
    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <Board />
        </div>
    );
}

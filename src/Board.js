import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    render() {
        return (
            <div className="body">
                <div className="oujia-board">
                    <h2>Code Oujia</h2>
                    <h5>&copy; mdjm</h5>
                    <span>truthy</span>
                    <span>falsey</span>
                    <span>You're missing a semicolon</span>
                    <span>Try a Hard Refresh</span>
                    <span>Restart the Complier</span>
                    <span>Check yuor spellign</span>
                </div>
            </div>
        );
    }
}

export default Board;

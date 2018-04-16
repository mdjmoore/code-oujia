import React, { Component } from 'react';
import './Board.css';


class Board extends Component {
    render() {
        return (
            <div className="body">
                <div className="oujia-board">
                    <h2>Code Oujia</h2>
                    <h5>&copy; mdjm</h5>
                    <img src={require('./assets/sun.png')} className="sun-top" alt="Black icon of a sun with rays" />
                    <img src={require('./assets/moon.png')} className="moon-top" alt="Black icon of a waxing cresent moon" />
                    <p className="truthy">truthy</p>
                    <p className="falsey">falsey</p>
                    <p className="semicolon">You're missing a semicolon</p>
                    <p className="refresh">Try a Hard Refresh</p>
                    <p className="complier">Restart the Complier</p>
                    <p className="spelling">Check yuor spellign</p>
                    <p className="google">Try Google</p>
                    <img src={require('./assets/sun.png')} className="sun-bottom" alt="Black icon of a sun with rays" />
                    <img src={require('./assets/moon.png')} className="moon-bottom" alt="Black icon of a waxing cresent moon" />
                </div>
            </div>
        );
    }
}

export default Board;

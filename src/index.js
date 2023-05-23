import React from 'react';
import ReactDOM from 'react-dom';

var fName = "Tyler"
var lName = "Hikida"
var luckyNum = 42

ReactDOM.render(
    <div>
        <h1>wazzzzup</h1>
        <p>lfg, {fName} {lName}!  Today your lucky number is {luckyNum}.</p>
    </div>,
    document.getElementById("root")
)
import React, { Component } from 'react'
import './Result.css'

export default class Result extends Component {
    render() {
        return (
            <div id='container'>
                <div id='head-container'>
                     <h1>Result</h1>
                </div>
                <div id='second-container'>
                    <p id='p1'>You need more practice!</p>
                    <p id='p2'>Your score is 20%</p>
                    <div>
                        <p>Total number of questions:</p>
                        <p>15</p>
                    </div>
                    <div>
                        <p>Number of attempted questions:</p>
                        <p>9</p>
                    </div>
                    <div>
                        <p>Number of correct answers:</p>
                        <p>3</p>
                    </div>
                    <div>
                        <p>Number of wrong questions:</p>
                        <p>6</p>
                    </div>
                    </div>
                    <div id='last-container'>
                        <button id='btn1'>Play Again</button>
                        <button id='btn2'>Back to Home</button>
                    </div>                
            </div>
        )
    }
}

import React, { Component } from 'react'
import './Quiz.css'

export default class Quiz extends Component {
    render() {
        return (
            <div id='container'>
                    <h1>Question</h1>
                    <div id='second-container'>
                    <p>1 of 3</p>
                    <p id='question'>Which is the only mammal that can't jump</p>
                    </div>
                    <div id='third-container'>
                    <button id='option-btn'>Dog</button>
                    <button id='option-btn'>Goat</button>
                    <button id='option-btn'>Elephant</button>
                    <button id='option-btn'>Lion</button>
                    </div>
                    <div id='last-container'>
                    <button id='previous-btn'>Previous</button>
                    <button id='next-btn'>Next</button>
                    <button id='quit-btn'>Quit</button>
                    </div>
                 </div>

        )
    }
}

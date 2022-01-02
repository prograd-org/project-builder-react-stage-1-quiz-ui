import React from "react"
import "./components.css"
class QuizComponent extends React.Component{

    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                    <div className='quiz-content'>
                        <h1 className='header'>Question</h1>
                        <p id='p2'>Which is the only mammal that can't jump?</p>
                    <div className='options'>
                        <button className='btncls' >Dog</button>
                        <button className='btncls' >Goat</button>
                        <button className='btncls' >Elephant</button>
                        <button className='btncls' >Lion</button>
                   </div>          
                   <div className='button-items'>
                        <button id="prev">Previous</button>
                        <button id="nxt">Next</button>
                        <button id="qt">Quit</button>
                   </div>
            </div></div>
            </center>
            </React.Fragment>
        )
    }

}
export default QuizComponent;
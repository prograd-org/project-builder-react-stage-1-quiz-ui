import React from "react"
import "./components.css"
class ResultComponent extends React.Component{

    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <h1 className='result'>Result</h1>

                    <div className='result-content'>
                        <h1 id="h2">You need more practice!</h1>
                        <h1 id="score">Your Score: 20%</h1>
                        <div id="stats">
                        <div id="inner1">
                        <p>Total number of questions</p>
                        <p>Number of attempted questions</p>
                        <p>Number of Correct Answers</p>
                        <p>Number of Wrong Answers</p>
                        </div>
                        <div id="inner2">
                        <p>15</p>
                        <p>9</p>
                        <p>3</p>
                        <p>6</p>
                        </div>
                        </div>
                    </div>
                    <div className="button-items">
                        <button id="play">Play Again</button>
                        <button id="home">Back to Home</button>
                    </div>
            </div>
            </center>
            </React.Fragment>
        )
    }

}
export default ResultComponent;
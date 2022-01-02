import React from "react"
import "./components.css"
class HomeComponent extends React.Component{

    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                    <div className='content'>
                        <h1 id='h1'>Quiz App</h1>
               <button id='btn' className='btncls' >Play</button>              
            </div></div>
            </center>
            </React.Fragment>
        )
    }

}
export default HomeComponent;
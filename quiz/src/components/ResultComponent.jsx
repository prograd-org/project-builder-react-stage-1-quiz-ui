import React from "react";
export default function ResultComponent() {
  return (
    <div className="result-component">
      <p className="result">Result</p>
      <div className="inner-result-component">
        <p>You need more practice!</p>
        <h1>Your Score: 20%</h1>
        <table>
          <tr className="tr1">
            <td>Total nuber of questions:</td>
            <td className="count">15</td>
          </tr>
          <tr>
            <td>Number of attempted questions:</td>
            <td className="count">09</td>
          </tr>
          <tr>
            <td>Number of Correct Answers:</td>
            <td className="count">03</td>
          </tr>
          <tr>
            <td>Number of Wrong Answers:</td>
            <td className="count">06</td>
          </tr>
        </table>
      </div>
      <div className="btn-result">
          <button className="btn-r1">Play Again</button>
          <button className="btn-r2">Back to Home</button>
      </div>
    </div>
  );
}

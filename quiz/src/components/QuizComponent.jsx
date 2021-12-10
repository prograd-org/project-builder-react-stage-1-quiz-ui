import React from "react";
export default function QuizComponent() {
  return (
    <div className="quiz-component">
      <div className="inner-quiz-component">
        <h1>Question</h1>
        <span className="number">4 0f 15</span>
        <span>Which is the only mammal that can't jump?</span>
        <div className="btn">
          <button className="btn-quiz">Dog</button>
          <button className="btn-quiz">Goat</button>
          <button className="btn-quiz">Elephant</button>
          <button className="btn-quiz">Lion</button>
        </div>
        <div className="nav-btn">
          <button className="btn1">Previous</button>
          <button className="btn2">Next</button>
          <button className="btn3">Quit</button>
        </div>
      </div>
    </div>
  );
}

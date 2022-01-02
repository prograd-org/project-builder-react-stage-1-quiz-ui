import React from 'react'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
     <HomeComponent/>
     <QuizComponent/>
     <ResultComponent/>
    </div>
  );
}

export default App;

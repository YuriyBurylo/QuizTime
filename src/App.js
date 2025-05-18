import React, { useState } from 'react';
import './App.css';
import Progress from './components/Progress/Progress';
import Questions from './components/Questions/Questions';
import Results from './components/Results/Results';
import questions from './questions';


function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  let question = questions[step];
  let percentage = Math.round(step/questions.length * 100); 

  function checkCorrect(index) {
    if (index === question.correct && correct < questions.length) {
      setCorrect(prev => prev + 1);
    };
    console.log(correct);
    setStep(step + 1);
  }

  return (
    <div className="App">
      <h1>QuizTime</h1>
      <h2>What do you know about artificial intelligence ?</h2>
      <Progress progress={percentage}/>
      {step < questions.length ? 
        <Questions test={question} check={checkCorrect}/> :       
        <Results result={correct} />}
    </div>
  );
}

export default App;

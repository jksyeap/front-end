import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import qAndAs from './QandA.json';

function App(props) {
  let questions = props.qAndAs;
  let currentQuestionIndex = 0;
  let currentQuestion = questions[currentQuestionIndex];
  let showAnswer = false;
  let panel = <QandAPanel showAnswer={showAnswer} question={currentQuestion.question} answer={currentQuestion.answer}/>;
  return <div>
          {panel}
         </div>;
}

function QandAPanel(props) {
  if(props.showAnswer === false) {
    return <div>
            <h1>Test Yourself</h1>
            <h2>Question</h2>
            <p>{props.question}</p>
           </div>;
  }
  else {
    return <div>
            <h1>Test Yourself</h1>
            <h2>Question</h2>
            <p>{props.question}</p>
            <p>{props.answer}</p>
           </div>;
  }
}

const element = <div><App qAndAs={qAndAs}/></div>;

ReactDOM.render(element, document.getElementById('root'));
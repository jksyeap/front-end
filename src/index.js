import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import qAndAs from './QandA.json';

function App(props) {
  let questions = props.qAndAs;
  let currentQuestion = 0;
  let showAnswer = false;
  let panel = <QandAPanel showAnswer={showAnswer} currentQuestion={currentQuestion} questions={questions}/>;
  return <div>
          {panel}
         </div>;
}

function QandAPanel(props) {
  if(props.showAnswer === false) {
    return <div>
            <h1>Test Yourself</h1>
            <h2>Question</h2>
            <p>{props.questions[props.currentQuestion].question}</p>
           </div>;
  }
  else {
    return <div>
            <h1>Test Yourself</h1>
            <h2>Question</h2>
            <p>{props.questions[props.currentQuestion].question}</p>
            <p>{props.questions[props.currentQuestion].answer}</p>
           </div>;
  }
}

const element = <div><App qAndAs={qAndAs}/></div>;

ReactDOM.render(element, document.getElementById('root'));
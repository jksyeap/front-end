import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import qAndAs from './QandA.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions:qAndAs,
                  currentQuestionIndex:0,
                  showAnswer:false};
  }
  
  render() {
    let currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    let panel = <QandAPanel showAnswer={this.state.showAnswer} 
                 question={currentQuestion.question} 
                 answer={currentQuestion.answer}/>;
    return <div>
            {panel}
           </div>;
  }
}

class QandAPanel extends React.Component {
  render() {
    if(this.props.showAnswer === false) {
      return <div>
              <h1>Test Yourself</h1>
              <h2>Question</h2>
              <p>{this.props.question}</p>
             </div>;
    }
    else {
      return <div>
              <h1>Test Yourself</h1>
              <h2>Question</h2>
              <p>{this.props.question}</p>
              <p>{this.props.answer}</p>
             </div>;
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
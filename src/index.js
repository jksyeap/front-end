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
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }
  
  render() {
    let currentQuestion = this.state.questions[this.state.currentQuestionIndex];
    let panel = <QandAPanel showAnswer={this.state.showAnswer} 
                            question={currentQuestion.question} 
                            answer={currentQuestion.answer}/>;
    
    let controlPanel = <ControlPanel nextQuestion={this.nextQuestion}
                                     prevQuestion={this.prevQuestion}
                                     toggleAnswer={this.toggleAnswer}
                                     currentQuestionIndex={this.state.currentQuestionIndex}
                                     showAnswer={this.state.showAnswer}
                                     howManyQs={this.state.questions.length}/>;
                                     
    return <div>
            {controlPanel}
            {panel}
           </div>;
  }
  
  nextQuestion() {
    let inc = (this.state.currentQuestionIndex + 1) % this.state.questions.length;
    this.setState({currentQuestionIndex:inc});
  }
  
  prevQuestion() {
    let dec = this.state.currentQuestionIndex - 1;
    if(dec === -1) {dec = this.state.questions.length - 1;}
    this.setState({currentQuestionIndex:dec});
  }
  
  toggleAnswer() {
    let show = !this.state.showAnswer;
    this.setState({showAnswer:show});
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

class ControlPanel extends React.Component {
  render() {
    return <div>
            <button onClick={this.props.nextQuestion}>Forward</button>
            <button onClick={this.props.prevQuestion}>Back</button>
            <button onClick={this.props.toggleAnswer}>{this.props.showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
            <p>Question {this.props.currentQuestionIndex + 1} of {this.props.howManyQs}</p>
           </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
import React from 'react';
import qAndAs from './QandA.json';
import './index.css';
import QandAPanel from './QandAPanel.js';
import ControlPanel from './ControlPanel.js';
import CreateQAPanel from './CreateQAPanel.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions:qAndAs,
                  currentQuestionIndex:0,
                  showAnswer:false,
                  newQ:'',
                  newA:'',
                  showCreator:false};
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.toggleAnswer = this.toggleAnswer.bind(this);
    this.toggleCreator = this.toggleCreator.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
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
                                     showCreator={this.state.showCreator}
                                     toggleCreator={this.toggleCreator}
                                     deleteQuestion={this.deleteQuestion}
                                     howManyQs={this.state.questions.length}/>;
   
    let creator = <CreateQAPanel addQ={this.addQuestion}
                                 handleChange={this.handleChange}
                                 newQ={this.state.newQ}
                                 newA={this.state.newA}/>;
   
    if(this.state.showCreator === false)
      {return <div>{controlPanel}{panel}</div>;} 
    else
      {return <div>{controlPanel}{panel}{creator}</div>;}
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
  
  toggleCreator() {
    let show = !this.state.showCreator;
    this.setState({showCreator:show});
  }
  
  addQuestion(event) {
    this.setState({[event.target.name]:event.target.value});
    let tempQs = this.state.questions;
    tempQs.push({question:this.state.newQ, answer:this.state.newA});
    this.setState({questions:tempQs, newQ:'', newA:''});
    event.preventDefault();
  }
  
  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }
  
  deleteQuestion() {
    if(this.state.questions.length > 1) {
      let tempQs = this.state.questions;
      tempQs.splice(this.state.currentQuestionIndex,1);
      this.setState({questions:tempQs, currentQuestionIndex:0});
    }
  }
}

export default App;
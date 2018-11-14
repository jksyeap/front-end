import React from 'react';

class ControlPanel extends React.Component {
  render() {
    return <div>
            <button onClick={this.props.nextQuestion}>Forward</button>
            <button onClick={this.props.prevQuestion}>Back</button>
            <button onClick={this.props.toggleAnswer}>{this.props.showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
            <button onClick={this.props.toggleCreator}>{this.props.showCreator ? 'Hide Question Creator' : 'Show Question Creator'}</button>
            <button onClick={this.props.deleteQuestion}>Remove Question</button>
            <p>Question {this.props.currentQuestionIndex + 1} of {this.props.howManyQs}</p>
           </div>;
  }
}

export default ControlPanel;
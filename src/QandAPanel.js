import React from 'react';

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

export default QandAPanel;
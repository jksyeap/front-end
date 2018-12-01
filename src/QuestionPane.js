import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';

class QuestionPane extends React.Component {
  render() {
    let instructions = this.props.tasklist;
    let items = instructions.map(function(element) {
      return <Tab.Pane eventKey={"#"+element["task-name"]}>
               {element["instructions"]};
             </Tab.Pane>
    });
    return <Tab.Content>{items}</Tab.Content>;
  }
}

export default QuestionPane;
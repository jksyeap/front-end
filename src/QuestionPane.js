import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
var commonmark = require('commonmark');
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

class QuestionPane extends React.Component {
  render() {
    let instructions = this.props.tasklist;
    let items = instructions.map(function(element) {
      let parsed = reader.parse(element["instructions"]);
      let result = writer.render(parsed);
      return <Tab.Pane eventKey={"#"+element["task-name"]}>
               <div dangerouslySetInnerHTML={{__html:result}}></div>
             </Tab.Pane>;
    });
    return <Tab.Content>{items}</Tab.Content>;
  }
}

export default QuestionPane;
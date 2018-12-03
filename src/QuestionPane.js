import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import commonmark from 'commonmark';
// eslint-disable-next-line
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

class QuestionPane extends React.Component {
  render() {
    let instructions = this.props.tasklist;
    let items = instructions.map(function(element) {
      let parsed = reader.parse(element["instructions"]);
      let result = writer.render(parsed);
      return <Tab.Pane eventKey={"#"+element["task-name"]} key={element["task-name"]}>
               <Tabs defaultActiveKey="rendered">
                 <Tab eventKey="rendered" title="Rendered"><div dangerouslySetInnerHTML={{__html:result}}></div></Tab>
                 <Tab eventKey="raw" title="Markdown">
                   <textarea className="raw" value={element["instructions"]} readOnly/>
                 </Tab>
               </Tabs>
             </Tab.Pane>;
    });
    return <Tab.Content>{items}</Tab.Content>;
  }
}

export default QuestionPane;
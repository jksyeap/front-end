import React from 'react';
import tlist from './tasks1.json';
import Tasks from './TaskList';
import Instructions from './QuestionPane.js';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class APR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasklist:tlist,
                  currentTask:""
    };
    this.setCurrentTask = this.setCurrentTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  
  render() {
    let list = <Tasks tasklist={this.state.tasklist}/>;
    let instructions = <Instructions tasklist={this.state.tasklist}/>;
    
    return <Tab.Container onSelect={this.setCurrentTask}>
             <Row>
               <Col sm="auto">{list}</Col>
               <Col>{instructions}</Col>
             </Row>
             <button onClick={this.deleteTask}>Delete Selected Task</button>
           </Tab.Container>;
  }
  
  setCurrentTask(eventKey) {
    let taskName = eventKey.substring(1);
    this.setState({currentTask:taskName});
  }
  
  deleteTask() {
    let temp = this.state.tasklist;
    let currentTask = this.state.currentTask;
    temp = temp.filter(function(element) {
      if(element["task-name"] === currentTask)
        return false;
      else
        return true;
    });
    this.setState({tasklist:temp, currentTask:""});
  }
}

export default APR;
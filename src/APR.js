import React from 'react';
import tlist from './tasks1.json';
import Tasks from './TaskList';
import Instructions from './QuestionPane';
import TaskEditor from './TaskEditor';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class APR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasklist:tlist,
                  currentTask:"",
                  currentInstruction:"",
                  showEditor:false};
                  
    this.setCurrentTask = this.setCurrentTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
  }
  
  render() {
    let list = <Tasks tasklist={this.state.tasklist}/>;
    let instructions = <Instructions tasklist={this.state.tasklist}/>;
    let editor = <TaskEditor currentInstruction={this.state.currentInstruction}
                             handleChange={this.handleChange}
                             showEditor={this.state.showEditor}
                             hideEditor={this.toggleEditor}
                             saveChanges={this.saveChanges}
                             cancelChanges={this.cancelChanges}/>;
    
    return <Tab.Container onSelect={this.setCurrentTask}>
             <Row>
               <Col sm="auto">{list}</Col>
               <Col>{instructions}</Col>
             </Row>
             <button onClick={this.deleteTask}>Delete Selected Task</button>
             <button onClick={this.toggleEditor}>Edit Selected Task</button>
             {editor}
           </Tab.Container>;
  }
  
  setCurrentTask(eventKey) {
    let taskName = eventKey.substring(1);
    let selectedTask = this.state.tasklist.find(function(element) {
      return element["task-name"] === taskName;
    });
    this.setState({currentTask:taskName, currentInstruction:selectedTask["instructions"]});
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
    this.setState({tasklist:temp, currentTask:"", currentInstruction:""});
  }
  
  handleChange(event) {
    this.setState({currentInstruction:event.target.value});
  }
  
  saveChanges() {
    let tasksCopy = this.state.tasklist;
    let currentTask = this.state.currentTask;
    let updatedTaskIndex = this.state.tasklist.findIndex(function(element) {
      return element["task-name"] === currentTask;
    });
    tasksCopy[updatedTaskIndex].instructions = this.state.currentInstruction;
    this.setState({tasklist:tasksCopy, currentInstruction:this.state.currentInstruction});
  }
  
  cancelChanges() {
    let currentTaskName = this.state.currentTask;
    let originalTask = this.state.tasklist.find(function(element) {
      return element["task-name"] === currentTaskName;
    });
    this.setState({currentInstruction:originalTask.instructions})
  }
  
  toggleEditor() {
    let show = !this.state.showEditor;
    this.setState({showEditor:show});
  }
}

export default APR;
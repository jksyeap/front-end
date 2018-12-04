import React from 'react';
import tlist from './tasks1.json';
import Tasks from './TaskList';
import Instructions from './QuestionPane';
import TaskEditor from './TaskEditor';
import TaskCreator from './TaskCreator';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
const blankTask = {"task-name":"","due":"","status":"","instructions":""};

class APR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasklist:tlist,
                  currentTask:"",
                  currentInstruction:"",
                  showEditor:false,
                  showCreator:false,
                  newTask:blankTask 
    };
    
    this.setCurrentTask = this.setCurrentTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
    this.toggleCreator = this.toggleCreator.bind(this);
    this.createTask = this.createTask.bind(this);
    this.cancelCreateTask = this.cancelCreateTask.bind(this);
    this.handleCreatorChange = this.handleCreatorChange.bind(this);
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
    let creator = <TaskCreator showCreator={this.state.showCreator}
                               newTask={Object.assign({},this.state.newTask)}
                               createTask={this.createTask}
                               cancelCreateTask={this.cancelCreateTask}
                               handleCreatorChange={this.handleCreatorChange}
                               hideCreator={this.toggleCreator}/>;
    
    return <Tab.Container onSelect={this.setCurrentTask}>
             <Row>
               <Col sm="auto">{list}</Col>
               <Col>{instructions}</Col>
             </Row>
             <button onClick={this.deleteTask}>Delete Selected Task</button>
             <button onClick={this.toggleEditor}>Edit Selected Task</button>
             <button onClick={this.toggleCreator}>Create New Task</button>
             {editor}
             {creator}
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
    this.setState({[event.target.name]:event.target.value});
  }
  
  handleCreatorChange(event) {
    let name = event.target.name;
    let val = event.target.value;
    this.setState(function(previousState) {
      previousState.newTask[name] = val;
      return previousState;
    });
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
    this.setState({currentInstruction:originalTask.instructions});
  }
  
  toggleEditor() {
    if(this.state.tasklist.length < 1 || this.state.currentTask === "") return;
    this.cancelChanges();
    let show = !this.state.showEditor;
    this.setState({showEditor:show});
  }
  
  toggleCreator() {
    this.cancelCreateTask();
    let show = !this.state.showCreator;
    this.setState({showCreator:show});
  }
  
  createTask() {
    if(this.state.newTask["task-name"] === "" || this.state.newTask["due"] === "") 
      return;
    let tasksCopy = this.state.tasklist;
    tasksCopy.push(this.state.newTask);
    this.setState({tasklist:tasksCopy, newTask:blankTask});
  }
  
  cancelCreateTask() {
    let temp = Object.assign({},blankTask);
    this.setState({newTask:temp});
  }
}

export default APR;
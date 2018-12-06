import React from 'react';
//import tlist from './tasks1.json';
import Tasks from './TaskList';
import Instructions from './QuestionPane';
import TaskEditor from './TaskEditor';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
const blankTask = {"task-name":"","due":"","status":"open","instructions":""};

class APR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasklist:[],
                  currentTask:"",
                  currentInstruction:"",
                  showEditor:false,
                  showCreator:false,
                  newTask:blankTask,
                  currentTaskObj:{}};

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
  
  componentDidMount() {
    let self = this;
    fetch('/tasks',{method:'GET'}).then(response => response.json())
      .then(function(data) {
        self.setState({tasklist:data.tasks});
        Prism.highlightAll();
    });
  }
  
  render() {
    let list = <Tasks tasklist={this.state.tasklist}/>;
    let instructions = <Instructions tasklist={this.state.tasklist}/>;
    let editor = <TaskEditor currentTaskObj={this.state.currentTaskObj}
                             handleChange={this.handleChange}
                             showEditor={this.state.showEditor}
                             hideEditor={this.toggleEditor}
                             saveChanges={this.saveChanges}
                             cancelChanges={this.cancelChanges}
                             title="Task Editor"
                             action="Save Changes"
                             editName={true}/>;
    let creator = <TaskEditor showEditor={this.state.showCreator}
                               currentTaskObj={Object.assign({},this.state.newTask)}
                               saveChanges={this.createTask}
                               cancelChanges={this.cancelCreateTask}
                               handleChange={this.handleCreatorChange}
                               hideEditor={this.toggleCreator}
                               title="Task Creator"
                               action="Create Task"
                               editName={false}/>;
    
    return <Tab.Container onSelect={this.setCurrentTask}>
             <ButtonGroup className="menuBar">
               <Button variant="primary" onClick={this.toggleCreator}>Create New Task</Button>
               <Button variant="primary" onClick={this.toggleEditor}>Edit Selected Task</Button>
               <Button variant="primary" onClick={this.deleteTask}>Delete Selected Task</Button>
             </ButtonGroup>
             <Row>
               <Col sm="auto">{list}</Col>
               <Col>{instructions}</Col>
             </Row>
             {editor}
             {creator}
           </Tab.Container>;
  }
  
  setCurrentTask(eventKey) {
    let taskName = eventKey.substring(1);
    let selectedTask = this.state.tasklist.find(function(element) {
      return element["task-name"] === taskName;
    });
    this.setState({currentTask:taskName, currentInstruction:selectedTask["instructions"], currentTaskObj:selectedTask});
  }
  
  deleteTask() {
    let self = this;
    fetch("/tasks/"+self.state.currentTask,{method:'DELETE'}).then(response => response.json())
    .then(function(data) {
      if(data.success === true)
        return fetch('/tasks',{method:'GET'})
      else
        console.log("Failed to delete task");
    })
    .then(response => response.json())
    .then(function(data) {
      self.setState({tasklist:data.tasks, currentTask:"", currentInstruction:""});
    });
  }
  
  handleChange(event) {
    let name = event.target.name;
    let val = event.target.value;
    this.setState(function(previousState) {
      previousState.currentTaskObj[name] = val;
      return previousState;
    });
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
    tasksCopy[updatedTaskIndex] = Object.assign(tasksCopy[updatedTaskIndex],this.state.currentTaskObj);
    this.setState({tasklist:tasksCopy, currentInstruction:this.state.currentInstruction});
  }
  
  cancelChanges() {
    let currentTaskName = this.state.currentTask;
    let originalTask = this.state.tasklist.find(function(element) {
      return element["task-name"] === currentTaskName;
    });
    this.setState({currentInstruction:originalTask.instructions, currentTaskObj:Object.assign({},originalTask)});
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
    let self = this;
    fetch('/tasks',{method:'POST',headers:{"Content-Type":"application/json"}, body:JSON.stringify(self.state.newTask)}).then(function(response) {
      if(response.status === 201)
        return fetch('/tasks',{method:'GET'});
      else
        console.log("Failed to create task");
    })
    .then(response => response.json())
    .then(function(data) {
      let temp = Object.assign({},blankTask);
      self.setState({tasklist:data.tasks, newTask:temp});
      Prism.highlightAll();
    });
  }
  
  cancelCreateTask() {
    let temp = Object.assign({},blankTask);
    this.setState({newTask:temp});
  }
}

export default APR;
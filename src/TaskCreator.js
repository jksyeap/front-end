import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class TaskCreator extends React.Component {
  render() {
    return <Modal show={this.props.showCreator} onHide={this.props.hideCreator} dialogClassName="editor">
             <Modal.Header closeButton>
               <Modal.Title>Task Creator</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <form>
                 <label for="task-name">Task Name</label>
                 <input type="text" value={this.props.newTask["task-name"]} onChange={this.props.handleCreatorChange} name="task-name"/>
                 <label for="due">Due Date</label>
                 <input type="text" value={this.props.newTask.due} onChange={this.props.handleCreatorChange} name="due"/>
                 <label for="status">Status</label>
                 <select onChange={this.props.handleCreatorChange} name="status">
                   <option value="open">Open</option>
                   <option value="closed">Closed</option>
                 </select>
                 <label for="instructions">Instructions</label>
                 <textarea value={this.props.newTask.instructions} className="raw" onChange={this.props.handleCreatorChange} name="instructions"/>
               </form>
             </Modal.Body>
             <Modal.Footer>
               <button onClick={this.props.createTask}>Save Changes</button>
               <button onClick={this.props.cancelCreateTask}>Cancel</button>
             </Modal.Footer>
           </Modal>;
  }
}

export default TaskCreator;
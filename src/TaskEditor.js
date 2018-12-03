import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class TaskEditor extends React.Component {
  render() {
    return <Modal show={this.props.showEditor} onHide={this.props.hideEditor} dialogClassName="taskEditor">
             <Modal.Header closeButton>
               <Modal.Title>Task Editor</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <form><textarea className="raw" value={this.props.currentInstruction} onChange={this.props.handleChange}/></form>
             </Modal.Body>
             <Modal.Footer>
               <button onClick={this.props.saveChanges}>Save Changes</button>
               <button onClick={this.props.cancelChanges}>Cancel</button>
             </Modal.Footer>
           </Modal>;
  }
}

export default TaskEditor;
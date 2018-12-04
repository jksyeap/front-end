import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';

class TaskCreator extends React.Component {
  render() {
    return <Modal show={this.props.showCreator} onHide={this.props.hideCreator} dialogClassName="editor">
             <Modal.Header closeButton>
               <Modal.Title>Task Creator</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Form>
               <Row>
                 <Col>
                   <Form.Group>
                     <Form.Label>Task Name</Form.Label>
                     <Form.Control as="input" value={this.props.newTask["task-name"]} onChange={this.props.handleCreatorChange} name="task-name"/>
                   </Form.Group>
                 </Col>
                 <Col>
                   <Form.Group>
                     <Form.Label>Due Date</Form.Label>
                     <Form.Control as="input" value={this.props.newTask.due} onChange={this.props.handleCreatorChange} name="due"/>
                   </Form.Group>
                 </Col>
                 <Col>
                   <Form.Group>
                     <Form.Label>Status</Form.Label>
                     <Form.Control value={this.props.newTask.status} as="select" onChange={this.props.handleCreatorChange} name="status">
                       <option value="open">Open</option>
                       <option value="closed">Closed</option>
                     </Form.Control>
                   </Form.Group>
                 </Col>
               </Row>
                 <Form.Group>
                   <Form.Label>Instructions</Form.Label>
                   <Form.Control as="textarea" value={this.props.newTask.instructions} className="raw" onChange={this.props.handleCreatorChange} name="instructions" rows={10}/>
                 </Form.Group>
               </Form>
             </Modal.Body>
             <Modal.Footer>
               <button onClick={this.props.cancelCreateTask}>Cancel</button>
               <button onClick={this.props.createTask}>Create Task</button>
             </Modal.Footer>
           </Modal>;
  }
}

export default TaskCreator;
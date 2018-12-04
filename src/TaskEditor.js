import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';

class TaskEditor extends React.Component {
  render() {
    return <Modal show={this.props.showEditor} onHide={this.props.hideEditor} dialogClassName="editor">
             <Modal.Header closeButton>
               <Modal.Title>Task Editor</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Form>
               <Row>
                 <Col>
                   <Form.Group>
                     <Form.Label>Task Name</Form.Label>
                     <Form.Control readOnly as="input" value={this.props.currentTaskObj["task-name"]} onChange={this.props.handleChange} name="task-name"/>
                   </Form.Group>
                 </Col>
                 <Col>
                   <Form.Group>
                     <Form.Label>Due Date</Form.Label>
                     <Form.Control as="input" value={this.props.currentTaskObj.due} onChange={this.props.handleChange} name="due"/>
                   </Form.Group>
                 </Col>
                 <Col>
                   <Form.Group>
                     <Form.Label>Status</Form.Label>
                     <Form.Control value={this.props.currentTaskObj.status} as="select" onChange={this.props.handleChange} name="status">
                       <option value="open">Open</option>
                       <option value="closed">Closed</option>
                     </Form.Control>
                   </Form.Group>
                 </Col>
               </Row>
                 <Form.Group>
                   <Form.Label>Instructions</Form.Label>
                   <Form.Control as="textarea" value={this.props.currentTaskObj.instructions} className="raw" onChange={this.props.handleChange} name="instructions" rows={10}/>
                 </Form.Group>
               </Form>
             </Modal.Body>
             <Modal.Footer>
               <button onClick={this.props.cancelChanges}>Cancel</button>
               <button onClick={this.props.saveChanges}>Save Changes</button>
             </Modal.Footer>
           </Modal>;
  }
}

export default TaskEditor;
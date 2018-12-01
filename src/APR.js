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
    this.state = {tasklist:tlist};
  }
  
  render() {
    let list = <Tasks tasklist={this.state.tasklist}/>;
    let instructions = <Instructions tasklist={this.state.tasklist}/>;
    
    return <Tab.Container>
             <Row>
               <Col sm="auto">{list}</Col>
               <Col>{instructions}</Col>
             </Row>
           </Tab.Container>;
  }
}

export default APR;
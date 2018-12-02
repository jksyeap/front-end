import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';

class TaskList extends React.Component {
  render() {
    let tasks = this.props.tasklist;
    let listItems = tasks.map(function(element) {
      if(element["status"] === "closed") {
        return <ListGroup.Item href={"#"+element["task-name"]} key={"#"+element["task-name"]} variant="success" action>
                 <h5>{element["task-name"]}</h5>
                 Due date: {element["due"]}<br/>
                 Status: {element["status"]}
               </ListGroup.Item>;
      }
      else {
              return <ListGroup.Item href={"#"+element["task-name"]} key={"#"+element["task-name"]} variant="danger" action>
               <h5>{element["task-name"]}</h5>
               Due date: {element["due"]}<br/>
               Status: {element["status"]}
             </ListGroup.Item>;
      }
    });
    return <ListGroup>{listItems}</ListGroup>;
  }
}

export default TaskList;
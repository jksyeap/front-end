# Homework 9 CS651
**Justin Yeap**  
**NetID: mq5839**  

## Question 1
## (a)
```jsx
class TaskList extends React.Component {
  render() {
    let tasks = this.props.tasklist;
    let listItems = tasks.map(function(element) {
      if(element["status"] === "closed") {
        return <ListGroup.Item href={"#"+element["task-name"]} variant="success" action>
                 <h5>{element["task-name"]}</h5>
                 Due date: {element["due"]}<br/>
                 Status: {element["status"]}
               </ListGroup.Item>;
      }
      else {
              return <ListGroup.Item href={"#"+element["task-name"]} variant="danger" action>
               <h5>{element["task-name"]}</h5>
               Due date: {element["due"]}<br/>
               Status: {element["status"]}
             </ListGroup.Item>;
      }
    });
    return <ListGroup>{listItems}</ListGroup>;
  }
}
```
![Image](1a.png)  

## (b)
```jsx
class QuestionPane extends React.Component {
  render() {
    let instructions = this.props.tasklist;
    let items = instructions.map(function(element) {
      return <Tab.Pane eventKey={"#"+element["task-name"]}>
               {element["instructions"]};
             </Tab.Pane>
    });
    return <Tab.Content>{items}</Tab.Content>;
  }
}
```
![Image](1b.png)
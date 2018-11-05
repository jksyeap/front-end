# Homework 8 CS651
**Justin Yeap**
**NetID: mq5839**

## Question 1

This is not the answer to question 1 but just sample text. Here is
a code snippet in JavaScript:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleString()};
    }

    tick() {
        this.setState({date: new Date().toLocaleString()});
    }

    componentDidMount() {
        this.timerId = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timerId);
    }

    render() {
        return <div>
            <h2>The date and time is:</h2>
            <h2>{this.state.date}</h2>
        </div>
    }
}
```

## Question 2

This isn't the answer to question to but shows including a screen shot with Markdown.

![Screen Capture](Capture.png)

## Question 3

Blah, *Blah*, **Blah**...


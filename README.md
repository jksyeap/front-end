# Homework 8 CS651
**Justin Yeap**  
**NetID: mq5839**  

## Question 1
## (a)
![Screen Capture](1a.png)

## (b)
There are 28127 files that take up about 290MB of space  

## (c)
Inside the webpack-dev-server folder there is a package.json file that says one of the dependencies is express  

## Question 2
## (b)
![Image](2b1.png) ![Image](2b2.png)

## Question 3
## (a)
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import qAndAs from './QandA.json';

const element = <div>
                  <h1>There are {qAndAs.length} questions</h1>
                  <div></div>
                  <h1>The questions in JSON form</h1>
                  <div></div>
                  <p>{JSON.stringify(qAndAs)}</p>
                </div>;

ReactDOM.render(element, document.getElementById('root'));
```

## (b)
![Image](3b.png)
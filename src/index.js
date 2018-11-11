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
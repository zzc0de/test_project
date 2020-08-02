import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useReducer } from 'react';


const showSum(x, y) => x + y;
let x = 5;
let y = 12;

const disolayInfo = (
<h1>Summa:{showSumm}</h1>
);

ReactDOM.render(
  disolayInfo,
  document.getElementById('root')
);

serviceWorker.unregister();

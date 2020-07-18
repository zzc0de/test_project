import React from 'react';
import ReactDOM from 'react-dom';


const ToDoList = () => {
    return (
      <ul>
        <li>Learn React</li>
        <li>Build Awesome APP</li>
      </ul>
    );
};

const AppHeader = () => {
  return (
    <h1>My TodoList</h1>
  );
};

const SearchPanel = () => {
  return (
    <input placeholder='Searching' />
  );
};

const el = (
<div>
  <AppHeader />
  <SearchPanel />
  <ToDoList />
</div>
);

ReactDOM.render(el, document.getElementById('root'));

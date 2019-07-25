import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import { reducer, initialState } from './reducer/reducer';

import List from './components/List';
import Form from './components/Form';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const toggleItem = itemId => {
    console.log('id', itemId)
    dispatch({ type: 'TOGGLE_ITEM', payload: itemId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <Form addItem={addItem} />
      </div>
      <List
        todo={state.todo}
        toggleItem={toggleItem}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
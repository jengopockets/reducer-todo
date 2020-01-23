import React, { useReducer } from 'react';
import logo from './logo.svg';

// Reducers
import { initialState, reducer } from './reducers/reducer';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TodoContext } from './context/TodoContext';

// CSS
import './App.css';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learn Reducers List</h1>
        <TodoContext.Provider value={{ state, dispatch }}>
          <TodoList/>
          <TodoForm/>

        </TodoContext.Provider>
      </header>
    </div>
  );
}

export default App;

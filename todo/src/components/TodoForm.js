import React, { useState, useContext } from 'react';
import {TodoContext} from "../context/TodoContext";

export const TodoForm = () => {
    const {dispatch} = useContext(TodoContext);
    const [todoText, setTodoText] = useState("");
    
    const handleChanges = e => {
        e.preventDefault();
        setTodoText(e.target.value);
    }

    return(
        <div>
            <input 
                name='todo' 
                type='text'
                value={todoText} 
                onChange={handleChanges}
            />
            <button onClick={() => dispatch({type: "ADD_TODO", payload: todoText})}>Add Todo</button>
            <button onClick={() => dispatch({type: "REMOVE_TODO"})}>Clear Todo</button>
        </div>
    )
}


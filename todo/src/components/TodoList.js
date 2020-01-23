import React, {useContext} from 'react';
import Todo from './Todo';
import {TodoContext} from '../context/TodoContext';


export const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext) 
    console.log(state)
    return (
        <>
            {state.map(todo => (
                <div onClick={()=>dispatch({type:'TOGGLE_TODO', payload:todo.id})} className={`todo${todo.completed ? ' completed' : ''}`}>
                    <Todo key={todo.id} todo={todo.task} completed={todo.completed} />
                </div>
                )
            )  }
        </>
    )
}

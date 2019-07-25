import React from 'react';

import Item from './Item';

const TodoList = props => {
  return (
    <div className="shopping-list">
      {props.todo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
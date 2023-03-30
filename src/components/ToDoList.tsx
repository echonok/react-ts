import React from 'react';

import './ToDoList.css';

export interface TodoItem {
  id: string,
  text: string,
}

interface ToDoListProps {
  items: TodoItem[];
  onAddDelete: (todoId: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return <ul>
    {props.items.map((todo) => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={props.onAddDelete.bind(null, todo.id)}>Delete</button>
      </li>
    ))}
  </ul>;
}

export default ToDoList;

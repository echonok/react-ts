import React from 'react';

export interface TodoItem {
  id: string,
  text: string,
}

interface ToDoListProps {
  items: TodoItem[];
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
  return <ul>
    {props.items.map((todo) => <li key={todo.id}>{todo.text}</li>)}
  </ul>;
}

export default ToDoList;

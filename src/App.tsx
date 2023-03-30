import React, { useState } from 'react';
import ToDoList, { TodoItem } from './components/ToDoList';
import NewToDo from './components/NewToDo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  }
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler}/>
      <ToDoList items={todos}/>
    </div>
  );
}

export default App;

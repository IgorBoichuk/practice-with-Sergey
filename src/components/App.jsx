import React, { useState } from 'react';
import Header from './header/Header';
import './index.scss';
import CreateTodos from './creatortoodoos/creatortoodoos';
import Toodoolist from './toodoolist/Toodoolist';

export const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = title => {
    setTodos([...todos, { id: new Date().getTime(), title, completed: false }]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(id);
  };

  const handleComplete = id => {
    const currentItem = todos.find(item => item.id === id);
    currentItem.completed = !currentItem.completed;
    setTodos([...todos]);
  };

  return (
    <div>
      <Header />
      <CreateTodos addTodo={handleAddTodo} todos={todos} />
      <Toodoolist
        todos={todos}
        deleteTodo={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
};

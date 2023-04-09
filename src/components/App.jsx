import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import './index.scss';
import CreateTodos from './creatortoodoos/Creatortoodoos';
import Toodoolist from './toodoolist/Toodoolist';
import { Filtertodos } from './filtertodos/Filtertodos';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterStr, setFilterStr] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch (filterStr) {
      case 'All':
        setFilteredTodos(todos.filter(todo => todo));
        break;

      case 'Active':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;

      case 'Complited':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;

      default:
        break;
    }
  }, [filterStr, todos]);

  const handleAddTodo = title => {
    setTodos([...todos, { id: new Date().getTime(), title, completed: false }]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleComplete = id => {
    const currentItem = todos.find(item => item.id === id);
    currentItem.completed = !currentItem.completed;
    setTodos([...todos]);
  };

  const filteredData = filterValue => {
    setFilterStr(filterValue);
  };

  const countActivTodos = () => {
    return todos.reduce((acc, item) => {
      return acc + !item.completed;
    }, 0);
  };

  const handleCleareCompleted = () => {
    setTodos(todos.filter(todo => todo.completed === false));
  };

  return (
    <div>
      <Header />
      <CreateTodos addTodo={handleAddTodo} todos={todos} />
      <Toodoolist
        todos={filteredTodos}
        deleteTodo={handleDelete}
        handleComplete={handleComplete}
      />
      <Filtertodos
        filteredData={filteredData}
        countActivTodos={countActivTodos()}
        handleCleareCompleted={handleCleareCompleted}
      />
    </div>
  );
};

import React, { useState } from 'react';

import Header from './header/Header';

import './index.scss';
import CreateTodos from './creatortoodoos/creatortoodoos';

import Toodoolist from './toodoolist/Toodoolist';

export const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <CreateTodos setTodos={setTodos} todos={todos} />
      <Toodoolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

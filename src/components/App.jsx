import React, { useState } from 'react';

import Header from './header/Header';

// import style from './index.scss';
import './index.scss';
import CreateTodos from './creatortoodoos/creatortoodoos';

import Toodoolist from './toodoolist/Toodoolist';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  return (
    <div>
      <Header />
      <CreateTodos setTodos={setTodos} todos={todos} id={id} setId={setId} />
      <Toodoolist todos={todos} id={id} />
    </div>
  );
};

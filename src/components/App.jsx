import React from 'react';

import Header from './header/Header';

// import style from './index.scss';
import './index.scss';
import CreateTodos from './creatortoodoos/creatortoodoos';
import Footer from './footer/Footer';
import Toodoolist from './toodoolist/Toodoolist';

export const App = () => {
  return (
    <div>
      <Header />
      <CreateTodos />
      <Toodoolist />
      <Footer />
    </div>
  );
};

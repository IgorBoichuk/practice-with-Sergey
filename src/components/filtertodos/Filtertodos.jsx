import React from 'react';
import style from './filtertodos.module.scss';

export const Filtertodos = ({
  filteredData,
  countActivTodos,
  handleCleareCompleted,
}) => {
  return (
    <div>
      <div className={style.filterwrapper}>
        <div className={style.text}>
          <span>{countActivTodos} items left</span>
        </div>
        <ul className={style.filterlist}>
          <li className={style.filteritem} onClick={() => filteredData('All')}>
            All
          </li>
          <li
            className={style.filteritem}
            onClick={() => filteredData('Active')}
          >
            Active
          </li>
          <li
            className={style.filteritem}
            onClick={() => filteredData('Complited')}
          >
            Complited
          </li>
        </ul>
        <button className={style.clearbtn} onClick={handleCleareCompleted}>
          Clear complited
        </button>
      </div>
    </div>
  );
};

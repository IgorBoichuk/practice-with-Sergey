import { useState } from 'react';
import style from './creatortoodoos.module.scss';

const CreateTodos = ({ todos, setTodos, id, setId }) => {
  const createToDos = event => {
    event.preventDefault();

    const form = event.currentTarget;
    setTodos([...todos, form.elements.input.value]);
  };

  return (
    <div className={style.formwrapper}>
      <form className={style.form} action="submit" onSubmit={createToDos}>
        <input className={style.input} type="text" name="input" />
      </form>
    </div>
  );
};
export default CreateTodos;

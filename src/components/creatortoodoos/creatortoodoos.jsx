import style from './creatortoodoos.module.scss';

const CreateTodos = ({ addTodo }) => {
  const createToDos = event => {
    event.preventDefault();

    const form = event.currentTarget;
    addTodo(form.input.value);
    form.reset();
    form.input.focus();
  };

  return (
    <div className={style.formwrapper}>
      <form className={style.form} action="submit" onSubmit={createToDos}>
        <input className={style.input} type="text" name="input" />
        <button type="submit" className={style.button}>
          Add
        </button>
      </form>
    </div>
  );
};
export default CreateTodos;

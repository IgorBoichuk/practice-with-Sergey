import style from './creatortoodoos.module.scss';

const CreateTodos = ({ todos, setTodos }) => {
  const createToDos = event => {
    event.preventDefault();
    const setId = () => {
      return todos.length + 1;
    };

    const form = event.currentTarget;
    setTodos([
      ...todos,
      {
        id: setId(),
        title: form.elements.input.value,
      },
    ]);
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

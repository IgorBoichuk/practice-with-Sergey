import style from './creatortoodoos.module.scss';

const CreateTodos = () => {
  return (
    <div className={style.formwrapper}>
      <form className={style.form} action="submit">
        <input className={style.input} type="text" />
      </form>
    </div>
  );
};
export default CreateTodos;

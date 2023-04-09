import style from './toodoolist.module.scss';

const Toodoolist = ({ todos, setTodos }) => {
  console.log(todos);

  const handleDelete = id => {
    setTodos(prevState => [...prevState.todos.filter(todo => todo.id !== id)]);
    console.log(todos.id);
  };

  return (
    <div className={style.toodoolist}>
      <ul className={style.list}>
        {todos.map(item => (
          <li key={item.id} className={style.listitem}>
            <input type="checkbox" />
            {item.title}
            <button
              typeof="button"
              className={style.button}
              onClick={() => handleDelete(item.id)}
            >
              Delete item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Toodoolist;

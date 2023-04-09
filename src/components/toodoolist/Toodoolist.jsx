import style from './toodoolist.module.scss';

const Toodoolist = ({ todos, deleteTodo, handleComplete }) => {
  const handleDelete = id => {
    deleteTodo(id);
  };

  return (
    <div className={style.toodoolist}>
      <ul className={style.list}>
        {todos.map(item => (
          <li key={item.id} className={style.listitem}>
            <input
              type="checkbox"
              onChange={() => handleComplete(item.id)}
              checked={item.completed}
            />
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

import style from './toodoolist.module.scss';

const Toodoolist = ({ todos }) => {
  console.log(todos);

  return (
    <div className={style.toodoolist}>
      <ul className={style.list}>
        {todos.map(item => (
          <li key={todos.id} className={style.listitem}>
            <input type="checkbox" />
            {item}
            <button typeof="button" className={style.button}>
              Delete item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Toodoolist;

import style from './header.module.scss';
import img from '../galary/images/icon-sun.svg';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerwrapper}>
        <h1>T O D O</h1>
        <span>
          <img className={style.modeicon} src={img} alt="" />
        </span>
      </div>
    </div>
  );
};
export default Header;

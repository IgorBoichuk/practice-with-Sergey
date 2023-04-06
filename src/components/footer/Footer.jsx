import style from './footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerwrapper}>
        <span className={style.footertext}>Drag and drop to reader list</span>
      </div>
    </div>
  );
};
export default Footer;

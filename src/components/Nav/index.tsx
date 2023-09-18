import style from "./style.module.css";

function Navbar() {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <h2 className={style.title}>Navbar</h2>
        <ul className={style.listLink}>
          <li className={style.link}>About</li>
          <li className={style.link}>Contact</li>
          <li className={style.link}>Projects</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

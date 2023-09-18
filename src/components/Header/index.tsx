import style from "./style.module.css";
function Header() {
  return (
    <div className={style.containerHeader}>
      <h1 className={style.title}>Cultivating A Sustainable Future </h1>
      <h2 className={style.subTitle}>Through </h2>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id tenetur
        vero quos voluptate accusamus veniam distinctio nulla nesciunt vitae
        eligendi a odio nostrum sint, ad ipsam aperiam voluptatibus hic.
      </p>
    </div>
  );
}

export default Header;

import style from "./style.module.css";
import prueba from "../../assets/flower.png";

function Banner() {
  return (
    <div className={style.containerBanner}>
      <picture className={style.picture}>
        <img src={prueba} alt="" />
      </picture>
      <h2 className={style.title}>Become a Part of Our Growing Community!</h2>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam fuga
        hic, quaerat ex possimus quia totam adipisci praesentium qui nemo dolor
        cum velit ipsa quo quibusdam. Eaque architecto repudiandae cum.
      </p>
      <button className={style.button}>Get Started</button>
    </div>
  );
}

export default Banner;

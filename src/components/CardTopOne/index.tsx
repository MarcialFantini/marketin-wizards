import React from "react";
import image from "../../assets/farmTop/boy.jpg";

import style from "./style.module.css";

function CardTopOne() {
  return (
    <div className={style.container}>
      <picture className={style.picture}>
        <img src={image} alt="" className={style.img} />
      </picture>
      <div className={style.containerText}>
        <h3 className={style.title}>
          Cultivating Growth Through Modern Agriculture
        </h3>

        <p className={style.text}>
          There are many variations of passages of lorem ipsum available, but
          the Majority
        </p>
        <button className={style.button}>Learn About</button>
      </div>
    </div>
  );
}

export default CardTopOne;

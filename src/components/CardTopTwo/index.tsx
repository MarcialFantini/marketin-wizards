import React from "react";
import img from "../../assets/farmTop/middle.jpg";
import plant from "../../assets/flower.png";

import style from "./style.module.css";

function CardTopTwo() {
  return (
    <div className={style.container}>
      <div className={style.containerText}>
        <picture className={style.picture}>
          <img className={style.flower} src={plant} alt="" />
        </picture>

        <h3 className={style.title}>
          Cultivating Growth Through Modern Agriculture
        </h3>

        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit veritatis odit veniam! Consequuntur voluptatum quidem
          recusandae a quasi ipsam necessitatibus exercitationem, maxime, magni
          neque nesciunt error, minima voluptate ipsa velit!
        </p>
      </div>

      <picture className={style.picture}>
        <img src={img} alt="" className={style.img} />
      </picture>
    </div>
  );
}

export default CardTopTwo;

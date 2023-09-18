import React from "react";
import style from "./style.module.css";

import prueba from "../../assets/farmChoose/farmChoose.jpg";

import farm1 from "../../assets/farm/farm1.png";
import farm2 from "../../assets/farm/farmer2.png";
import farm3 from "../../assets/farm/farmer3.png";
import farm4 from "../../assets/farm/farmer4.png";

function ProductDetails() {
  return (
    <div className={style.containerAll}>
      <div className={style.containerColumn}>
        <h2 className={style.title}>
          We're Top Agriculture & Organic Enterprises
        </h2>
        <picture className={style.picture}>
          <img className={style.img} src={prueba} alt="" />
        </picture>
      </div>

      <div className={style.containerColumn}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          possimus in alias doloribus recusandae ipsam est velit cumque rerum
          quia. Quibusdam vero sequi quo necessitatibus? Asperiores totam eius
          consequatur nostrum.
        </p>
        <button className={style.button}>View More</button>

        <ul className={style.list}>
          <li>
            <picture>
              <img className={style.img} src={farm1} alt="" />
            </picture>

            <div>
              <h4>organic Corn</h4>
              <p>explore oru range of tractors and attachments</p>
            </div>
          </li>
          <li>
            <picture>
              <img className={style.img} src={farm2} alt="" />
            </picture>

            <div>
              <h4>organic Corn</h4>
              <p>explore oru range of tractors and attachments</p>
            </div>
          </li>
          <li>
            <picture>
              <img className={style.img} src={farm3} alt="" />
            </picture>

            <div>
              <h4>organic Corn</h4>
              <p>explore oru range of tractors and attachments</p>
            </div>
          </li>
          <li>
            <picture>
              <img className={style.img} src={farm4} alt="" />
            </picture>

            <div>
              <h4>organic Corn</h4>
              <p>explore oru range of tractors and attachments</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;

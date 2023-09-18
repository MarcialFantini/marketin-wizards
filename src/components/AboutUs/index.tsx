import React from "react";
import style from "./style.module.css";

import large from "../../assets/farmLarge/farm.jpg";
import CardAbout from "../CardAbout";
import flower from "../../assets/flower.png";

const cards = ["", "", "", ""];

function AboutUs() {
  return (
    <div className={style.containerAllAbout}>
      <div className={style.containerTextTop}>
        <h2>Cultivating a Future of Sustainable Agriculture</h2>
        <picture className={style.flower}>
          <img src={flower} alt="" />
        </picture>
        <div className={style.containerTextColumn}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur saepe cupiditate obcaecati necessitatibus voluptates
            amet voluptas harum ut pariatur voluptatibus sunt fuga error vero,
            unde earum dolor iste exercitationem molestias.
          </p>
          <button>Learn More {"->"}</button>
        </div>
      </div>

      <picture className={style.picture}>
        <img className={style.img} src={large} alt="" />
      </picture>

      <div className={style.containerCards}>
        {cards.map((item) => {
          return <CardAbout></CardAbout>;
        })}
      </div>
    </div>
  );
}

export default AboutUs;

import style from "./style.module.css";
import img from "../../assets/farmTop/tomattos.jpg";
import flower from "../../assets/flower.png";

function CardTopThree() {
  return (
    <div className={style.container}>
      <picture className={style.picture}>
        <img src={img} alt="" className={style.img} />
      </picture>

      <div className={style.containerText}>
        <picture className={style.picture}>
          <img className={style.imgFlower} src={flower} alt="" />
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
        <button className={style.button}>Learn More</button>
      </div>
    </div>
  );
}

export default CardTopThree;

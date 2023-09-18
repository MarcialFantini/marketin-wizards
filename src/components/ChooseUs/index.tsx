import style from "./style.module.css";
import prueba from "../../assets/farmChoose/farmChoose2.jpg";
import prueba2 from "../../assets/farmChoose/farmChoose.jpg";

import flower from "../../assets/flower.png";

function ChooseUs() {
  return (
    <div className={style.containerChooseUs}>
      <h2>Comprehensive Agricultural Offerings</h2>

      <div className={style.containerGrid}>
        <div className={style.containerColumn}>
          <picture className={style.picture}>
            <img className={style.img} src={prueba} alt="" />
          </picture>
          <div className={style.containerBottomFirst}>
            <picture className={style.picture}>
              <img className={style.imgSmall} src={flower} alt="" />
            </picture>
            <h4 className={style.titleColumn}>Explore Our Farm Products</h4>
            <p className={style.textColumn}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
              doloremque recusandae? Ut provident sapiente quia eos maiores fuga
              beatae earum, temporibus dolorem voluptatum mollitia corrupti
              doloribus voluptatibus voluptas laboriosam hic!
            </p>
          </div>
        </div>
        <div className={style.containerColumn}>
          <div className={style.containerTop}>
            <p className={style.textColumn + " " + style.middleText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              reprehenderit nesciunt tempore est dolorem dignissimos praesentium
              hic commodi quos numquam quidem, eum expedita assumenda non
              aperiam cupiditate odio esse dicta?
            </p>
            <div className={style.containerSmallCards}>
              <div style={{ background: "#46973B" }} className={style.boxCard}>
                <h4>25 Years</h4>
                <p>Of Experience in Agriculture</p>
              </div>
              <div style={{ background: "#d9bb2f" }} className={style.boxCard}>
                <h4>100%</h4>
                <p>Natural Healthy Food</p>
              </div>
            </div>
          </div>
          <div className={style.containerBottom}>
            <ul className={style.listMiddle}>
              <li className={style.firstList}>Seeds and Seedlings</li>
              <li>Fertilizers and Soil Enhancers</li>
              <li>Crop Protection</li>
            </ul>
          </div>
        </div>
        <div className={style.containerColumn}>
          <picture className={style.picture}>
            <img className={style.img} src={prueba2} alt="" />
          </picture>
          <ul className={style.list}>
            <li>
              Choose from a variety of premium seeds and healthy seedlings to
              ensure a strong start for your crops.
            </li>
            <li>
              {" "}
              Enhancer soil fertility and promote healthy plant growth with our
              range of organic fertilizers and soil amendments.{" "}
            </li>
            <li>
              Choose from a variety of premium seeds and healthy seedlings to
              ensure a strong start for your crops.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

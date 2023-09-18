import style from "./style.module.css";

function CardAbout() {
  return (
    <div className={style.containerCard}>
      <h3 className={style.title}>title</h3>
      <h4 className={style.subTitle}>sub title</h4>
      <p className={style.text}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum,
        pariatur fuga temporibus eligendi et perspiciatis tempora autem ipsam
        laborum? Laudantium expedita ea assumenda nesciunt sint quod voluptatem
        dicta tempora!
      </p>
    </div>
  );
}

export default CardAbout;

import CardTopOne from "../CardTopOne";
import CardTopThree from "../CardTopThre";
import CardTopTwo from "../CardTopTwo";

import style from "./style.module.css";

function GridCards() {
  return (
    <div className={style.containerGrid}>
      <CardTopOne></CardTopOne>
      <CardTopTwo></CardTopTwo>
      <CardTopThree></CardTopThree>
    </div>
  );
}

export default GridCards;

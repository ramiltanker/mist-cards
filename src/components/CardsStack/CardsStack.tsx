import { FC } from "react";
import styles from "./CardsStack.module.css";
import CryptoValue from "../CryptoValue/CryptoValue";
import ratingImage from "../../images/rating-image.png";
import cardImage1 from "../../images/card-image1.png";
import cardImage2 from "../../images/card-image2.png";
import cardImage3 from "../../images/card-image3.png";
import cardImage4 from "../../images/card-image4.png";
import cardImage5 from "../../images/card-image5.png";
import timerImage from "../../images/timer-clock.png";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";
import WarriorCard from "../WarriorCard/WarriorCard";

interface CardsStackProps {}

const cardsData = [
  {
    id: 0,
    image: cardImage1,
  },
  {
    id: 1,
    image: cardImage2,
  },
  {
    id: 2,
    image: cardImage3,
  },
  {
    id: 3,
    image: cardImage4,
  },
  {
    id: 4,
    image: cardImage5,
  },
  {
    id: 5,
    image: cardImage1,
  },
];

const CardsStack: FC<CardsStackProps> = ({}) => {
  return (
    <div className={styles.stack}>
      <div className={styles.content}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.rating}>
            <img
              src={ratingImage}
              alt="rating"
              className={styles.rating_image}
            />
            <p className={styles.rating_value}>5546</p>
          </div>
          <div className={styles.cards}>
            {cardsData.map(({ image, id }, index) => {
              return <WarriorCard image={image} key={id} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.box}>
          <CryptoValue />
          <Button text="Claim" type="outline" className={styles.claim_button} />
        </div>
        <div className={styles.timer_box}>
          <img src={timerImage} alt="timer" className={styles.timer_image} />
          <Timer />
          <div className={styles.multiplier}>
            <p className={styles.multiplier_text}>
              <span>1.5x</span> multiplier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsStack;

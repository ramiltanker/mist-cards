import classNames from "classnames";
import { FC } from "react";
import styles from "./WarriorCard.module.css";

interface WarriorCardProps {
  image?: string;
  className?: string;
}

const WarriorCard: FC<WarriorCardProps> = ({ image, className }) => {
  return (
    <div className={classNames(styles.card, className)}>
      <img src={image} alt="card" className={styles.card_image} />
    </div>
  );
};

export default WarriorCard;

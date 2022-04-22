import { FC } from "react";
import classNames from "classnames";
import EmptyWarriorCard from "../EmptyWarriorCard/EmptyWarriorCard";
import Button from "../Button/Button";
import styles from "./Desk.module.css";
import heroImage from "../../images/hero-card.png";

const Desk = () => {
  return (
    <div className={styles.desk}>
      <div className={styles.box}>
        <div className={styles.hero}>
          <img src={heroImage} alt="hero" className={styles.hero_image} />
        </div>
        <div className={styles.cards}>
          <EmptyWarriorCard />
          <EmptyWarriorCard />
          <EmptyWarriorCard />
          <EmptyWarriorCard />
          <EmptyWarriorCard />
          <EmptyWarriorCard />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="solid" text="FIGHT" className={styles.button} />
        <Button type="solid" text="OPEN" className={styles.button} />
      </div>
    </div>
  );
};

export default Desk;

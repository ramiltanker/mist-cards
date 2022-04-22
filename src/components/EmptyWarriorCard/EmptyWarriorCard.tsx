import classNames from "classnames";
import { FC } from "react";
import styles from "./EmptyWarriorCard.module.css";

interface EmptyWarriorCardProps {
  className?: string;
}

const EmptyWarriorCard: FC<EmptyWarriorCardProps> = ({ className }) => {
  return <div className={classNames(styles.card, className)}></div>;
};

export default EmptyWarriorCard;

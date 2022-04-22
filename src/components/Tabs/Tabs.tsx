import { FC } from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import styles from "./Tabs.module.css";

interface TabsProps {
  className?: string;
}

const Tabs: FC<TabsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.tabs, className)}>
      <Button text="claim all" type="solid" />
      <Button text="fight all" type="solid" />
    </div>
  );
};

export default Tabs;

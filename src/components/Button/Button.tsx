import { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps {
  onCLick?: () => void;
  className?: string;
  text?: string;
  type?: "solid" | "outline";
}

const Button: FC<ButtonProps> = ({ onCLick, className, text, type }) => {
  return (
    <button
      type="button"
      onClick={onCLick}
      className={classNames(
        styles.button,
        className,
        type === "solid"
          ? styles.button_solid
          : type === "outline"
          ? styles.button_outline
          : ""
      )}
    >
      {text}
    </button>
  );
};

export default Button;

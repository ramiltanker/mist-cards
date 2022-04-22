import { FC } from "react";
import classNames from "classnames";
import styles from "./CryptoValue.module.css";
import logo from "../../images/crypto-logo.png";

interface CryptoValueProps {
  className?: string;
}

const CryptoValue: FC<CryptoValueProps> = ({ className }) => {
  return (
    <div className={classNames(styles.crypto, className)}>
      <p className={styles.name}>MITHRIL</p>
      <div className={styles.box}>
        <p className={styles.value}>45 464</p>
        <img src={logo} alt="MITHRIL" className={styles.image} />
      </div>
    </div>
  );
};

export default CryptoValue;

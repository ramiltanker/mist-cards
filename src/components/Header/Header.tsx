import { FC } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.li}>
              <a href="#">My cards</a>
            </li>
            <li className={styles.li}>
              <a href="#">My decs</a>
            </li>
            <li className={styles.li}>
              <a href="#">White</a>
            </li>
            <li className={styles.li}>
              <a href="#">Marketplace</a>
            </li>
          </ul>
          <button type="button" className={styles.button}>Connect</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { FC } from "react";

import styles from "./Logo.module.css";

import logo from "../../images/logo.png";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return <img src={logo} alt="Logo" className={styles.logo} />;
};

export default Logo;

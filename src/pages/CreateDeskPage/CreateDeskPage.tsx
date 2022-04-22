import { FC } from "react";
import Header from "../../components/Header/Header";
import CryptoValue from "../../components/CryptoValue/CryptoValue";
import Tabs from "../../components/Tabs/Tabs";
import CardsStack from "../../components/CardsStack/CardsStack";
import Desk from "../../components/Desk/Desk";
import styles from "./CreateDeskPage.module.css";
import Button from "../../components/Button/Button";

const CreateDeskPage = () => {
  return (
    <section className={styles.desk}>
      <div className="container">
        <div className={styles.box}>
          <Header />
          <CryptoValue className={styles.crypto} />
          <Tabs className={styles.tabs} />
        </div>
        <CardsStack />
        <Desk />
        <Button type="outline" text="+ CREATE DECK" className={styles.button} />
      </div>
    </section>
  );
};

export default CreateDeskPage;

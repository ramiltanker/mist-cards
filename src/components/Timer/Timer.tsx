import classNames from "classnames";
import { FC, useEffect, useState } from "react";
import { getDifferenceBetweenDates } from "../../utils/timer";

import styles from "./Timer.module.css";

interface TimerProps {}

const Timer: FC<TimerProps> = ({}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const publicSalesDateTime = new Date("2022-04-23T18:00:00.000Z");

  const [days, hours, minutes, seconds] = getDifferenceBetweenDates(
    currentDateTime,
    publicSalesDateTime
  );

  useEffect(() => {
    const countdown = setInterval(() => setCurrentDateTime(new Date()), 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className={styles.timer}>
      <div className={styles.items}>
        <div className={classNames(styles.item, styles.hours)}>{hours}h</div>
        <div className={classNames(styles.item, styles.minutes)}>
          {minutes}m
        </div>
        <div className={classNames(styles.item, styles.seconds)}>
          {seconds}s
        </div>
      </div>
    </div>
  );
};

export default Timer;

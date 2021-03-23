import React from "react";
import Image from "../reward/rewardPic.jpg";
import styles from "./index.module.scss";

function Reward() {
  return (
    <div className={styles.reward}>
      <img src={Image} alt="Bingo Reward" />
    </div>
  );
}
export default Reward;

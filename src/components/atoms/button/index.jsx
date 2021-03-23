import React from "react";
import styles from "./index.module.scss";
function Button({ label, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;

import React from "react";
import styles from "./index.module.scss";

function Tile({ id, children, mark, isSet }) {
  const tileStyles = isSet
    ? `${styles.tile} ${styles["tile-set"]}`
    : styles.tile;

  return (
    <div onClick={() => mark(id)} className={tileStyles} id={id}>
      {children}
    </div>
  );
}

export default Tile;

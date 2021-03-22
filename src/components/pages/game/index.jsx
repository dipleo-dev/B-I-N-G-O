import styles from "./index.module.scss";
import React, { useState, useEffect } from "react";
import content from "../../../data/tileContent";
import Tile from "../../molecules/tile";
import { M, UM, checkForWin, MIDDLE } from "../../../utils/checker";
import Button from "../../atoms/button";


function Game() {
  const [data, setData] = useState(
    shuffleArray(content).reduce(
      (data, value, index) => ({ ...data, [index]: value }),
      {}
    )
  );
  const [markedTiles, setMarkedTiles] = useState(Array(25).fill(UM));

  const [bingos, setBingos] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  useEffect(() => {
    const tempArr = [...markedTiles];
    tempArr[MIDDLE] = M;
    setMarkedTiles(tempArr);
    setData({ ...data, [MIDDLE]: "CONFERENCE 👀 BINGO" });
  }, []);

  useEffect(() => {
    const checked = checkForWin(markedTiles);
    // If there is a new bingo you should fire your confetti or whatever
    console.log("NEW BINGO: ", !arrayEquals(checked, bingos));
    setBingos(checked);
  }, [markedTiles]);

  function toggleMark(id) {
    const marked = [...markedTiles];
    marked[id] = marked[id] === "marked" ? "unmarked" : "marked";
    setMarkedTiles(marked);
  }

  function resetGame() {
    const tempArr = Array(25).fill(UM);
    tempArr[MIDDLE] = M;
    setMarkedTiles(tempArr);
    const tempData = shuffleArray(content).reduce(
      (data, value, index) => ({ ...data, [index]: value }),
      {}
    );
    setData({ ...tempData, [MIDDLE]: "CONFERENCE 👀 BINGO" });
    setBingos([]);
  }

  return (
    <div className={styles.game}>
      <h1 className={styles.header}>Bingo Board</h1>
      <div className={styles.container}>
        {Object.keys(data).map((id) => {
          const isMiddleTile = id === MIDDLE.toString();
          const isSet = id === isMiddleTile || markedTiles[id] === M;
          return (
            <Tile key={id + data} id={id} mark={toggleMark} isSet={isSet}>
              {data[id]}
            </Tile>
          );
        })}
      </div>

      <Button label={"Reset"} onClick={resetGame} />
      
    </div>
  );
}

export default Game;
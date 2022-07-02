import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Box.module.scss";

import type { ChangeEvent } from "react";
import type { RootState } from "../store";

function Box() {
  const [boxSize, setBoxSize] = useState(30);
  const { borderRadiusText } = useSelector((state: RootState) => state);

  function boxSizeChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setBoxSize(parseFloat(e.target.value));
  }

  return (
    <div className={styles.container}>
      <div className={styles["size-range-box"]}>
        <label htmlFor="boxSize">Box Size</label>
        <input
          type="range"
          id="boxSize"
          min="10"
          max="55"
          value={boxSize}
          onChange={boxSizeChangeHandler}
        />
        <p>{boxSize * 10}px</p>
      </div>
      <div
        className={styles.box}
        style={{
          borderRadius: borderRadiusText,
          width: `${boxSize}rem`,
          height: `${boxSize}rem`,
        }}
      />
    </div>
  );
}

export default Box;

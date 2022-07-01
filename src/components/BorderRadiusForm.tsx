import type { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./BorderRadiusForm.module.scss";
import {
  setTopLeft,
  setTopRight,
  setBottomRight,
  setBottomLeft,
  setBorderRadiusText,
} from "../store/reducers/stateReducer";

import type { RootState } from "../store";

enum BorderPoint {
  topLeft = "topLeft",
  topRight = "topRight",
  bottomRight = "bottomRight",
  bottomLeft = "bottomLeft",
}

function BorderRadiusForm() {
  const dispatch = useDispatch();
  const { topLeft, topRight, bottomLeft, bottomRight } = useSelector(
    (state: RootState) => state.state
  );

  function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.id) {
      case BorderPoint.topLeft:
        dispatch(setTopLeft(parseFloat(e.target.value)));
        break;
      case BorderPoint.topRight:
        dispatch(setTopRight(parseFloat(e.target.value)));
        break;
      case BorderPoint.bottomRight:
        dispatch(setBottomRight(parseFloat(e.target.value)));
        break;
      case BorderPoint.bottomLeft:
        dispatch(setBottomLeft(parseFloat(e.target.value)));
        break;
    }
    dispatch(setBorderRadiusText());
  }

  return (
    <div className={styles["border-radius-form"]}>
      <div>
        <label htmlFor="topLeft">Top Left</label>
        <input
          type="number"
          id={BorderPoint.topLeft}
          placeholder="Top Left"
          value={topLeft}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="topRight">Top Right</label>
        <input
          type="number"
          id={BorderPoint.topRight}
          placeholder="Top Right"
          value={topRight}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="bottomLeft">Bottom Left</label>
        <input
          type="number"
          id={BorderPoint.bottomLeft}
          placeholder="Bottom Left"
          value={bottomLeft}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="bottomRight">Bottom Right</label>
        <input
          type="number"
          id={BorderPoint.bottomRight}
          placeholder="Bottom Right"
          value={bottomRight}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
}

export default BorderRadiusForm;

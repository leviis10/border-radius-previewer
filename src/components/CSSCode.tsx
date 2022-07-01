import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CSSCode.module.scss";

import type { RootState } from "../store";

function CSSCode() {
  const [isTextCopied, setIsTextCopied] = useState(false);
  const { state } = useSelector((state: RootState) => state);

  function copyCodeHandler() {
    navigator.clipboard.writeText(
      document.getElementById("borderRadiusCode")!.textContent || ""
    );
    setIsTextCopied(true);
    setTimeout(() => setIsTextCopied(false), 1000);
  }

  return (
    <div className={styles.container}>
      <code className={styles["border-radius-code"]} id="borderRadiusCode">
        border-radius: {state.borderRadiusText};
      </code>
      <button onClick={copyCodeHandler}>
        {isTextCopied ? "Copied" : "Copy this Code"}
      </button>
    </div>
  );
}

export default CSSCode;

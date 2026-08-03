import { useState } from "react";
import styles from "./CookieCounter.module.css";

function CookieCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setShowBubble(false);
  }

  function resetClick() {
    setLastCount(count);
    setCount(0);
    setShowBubble(true);
  }

  const [showBubble, setShowBubble] = useState(false);
  const [lastCount, setLastCount] = useState(0);
  return (
    <div className={styles.cookieCounter}>
      <h1>{count}</h1>
      <img
        src={`${import.meta.env.BASE_URL}cookie.png`}
        alt="Cookie"
        onClick={handleClick}
        className={styles.cookieButton}
      />

      {!showBubble && (
        <div className={styles.speechBubble}>Kan jeg få {count}? </div>
      )}

      {showBubble && (
        <div className={styles.speechBubble}>
          Tusen takk for {lastCount} kjeks!
        </div>
      )}

      <img
        src={`${import.meta.env.BASE_URL}cookiemonster.png`}
        alt="the cookie monster"
        onClick={resetClick}
        className={styles.cookieResetButton}
      />
    </div>
  );
}

export default CookieCounter;

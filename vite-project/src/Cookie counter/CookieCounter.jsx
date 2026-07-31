import { useState } from 'react';
import styles from './CookieCounter.module.css';

function CookieCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetClick() {
    setCount(0);
  }

  return (
    <div className={styles.cookieCounter}>
      <h1>{count}</h1>
      <img
        src="{`${import.meta.env.BASE_URL}cookie.png"
        alt="Cookie"
        onClick={handleClick}
        className={styles.cookieButton}
      />
      <img 
      src="{`${import.meta.env.BASE_URL}cookiemonster.png" 
      alt="the cookie monster"
      onClick={resetClick}
      className={resetClick}
      />
    </div>
  );
}

export default CookieCounter;
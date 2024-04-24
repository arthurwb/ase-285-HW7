import React from 'react';
import styles from './css/Button.module.css';

function Buttons({ onReset, onFlip }) {
  return (
    <div>
      <button className={styles.btn} onClick={onReset}>
        Reset
      </button>
      <button className={styles.btn} onClick={onFlip}>
        Flip
      </button>
    </div>
  );
}

export default Buttons;

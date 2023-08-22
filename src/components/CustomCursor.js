import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -10, y: -10 });
  const [isCursorExpanding, setCursorExpanding] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX - 10, y: e.pageY - 10 });
  };

  const handleMouseClick = () => {
    setCursorExpanding(true);
    setTimeout(() => {
      setCursorExpanding(false); 
    }, 500);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <div
        className={`${styles.cursor} ${isCursorExpanding ? styles.expand : ''}`}
        style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
      ></div>
    </div>
  );
};

export default CustomCursor;

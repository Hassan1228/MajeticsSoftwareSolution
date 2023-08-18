// components/CustomCursor.js
import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css'; 

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className={styles.customCursor}
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    ></div>
  );
};

export default CustomCursor;

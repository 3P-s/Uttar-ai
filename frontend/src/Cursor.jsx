import React, { useEffect, useRef } from 'react';
import './cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);

    const { progress } = useScrollama();
    useEffect(() => {
      const rainbowColor = `hsl(${(progress * 360).toFixed(0)}, 100%, 50%)`;
      cursorRef.current.style.backgroundColor = rainbowColor;
    }, [progress]);
  
    return <div ref={cursorRef} className="rainbow-cursor" />; 
}

export default Cursor

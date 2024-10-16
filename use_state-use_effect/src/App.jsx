import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dots, setDots] = useState([]);
  const [circlePosition] = useState({ x: window.innerWidth / 2 - 25, y: window.innerHeight / 2 - 25 });

  const handleMouseMove = (e) => {
    const newDot = { x: e.clientX, y: e.clientY, id: Date.now() };
    setDots((prevDots) => [...prevDots, newDot]);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {dots.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            left: dot.x - 5,
            top: dot.y - 5,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: 'blue',
            pointerEvents: 'none',
            opacity: 1,
          }}
        />
      ))}
      <div
        style={{
          
          position: 'absolute',
          left: '20px',
          top: circlePosition.y,
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: 'lightblue',
          border: '10px double blue',
          padding:'15px',
        }}
      />
    </div>
  );
}

export default App;

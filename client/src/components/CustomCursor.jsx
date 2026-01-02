import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Show cursor only on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsVisible(!isTouchDevice && window.innerWidth > 768);

    // Detect pointer elements
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.style.cursor === 'pointer') {
        setIsPointer(true);
      }
    };

    const handleMouseOut = () => {
      setIsPointer(false);
    };

    // Handle click animation
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75"
        style={{
          transform: `translate(${x - 12}px, ${y - 12}px)`,
        }}
      >
        <div className={`w-6 h-6 rounded-full border-2 ${
          isPointer 
            ? 'border-green-500 bg-green-500/10 scale-125' 
            : 'border-gray-500'
        } transition-all duration-150 ${isClicking ? 'scale-90' : ''}`} />
      </div>

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-50"
        style={{
          transform: `translate(${x - 4}px, ${y - 4}px)`,
        }}
      >
        <div className={`w-2 h-2 rounded-full ${
          isPointer ? 'bg-green-500' : 'bg-gray-700'
        } transition-all duration-100 ${isClicking ? 'scale-150' : ''}`} />
      </div>
    </>
  );
};

export default CustomCursor;
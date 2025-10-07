import React from 'react';
import { useCursor } from '../hooks/useCursor';

const CustomCursor = () => {
  const { cursorType, cursorPosition, isPointer, isText } = useCursor();

  // Hide default cursor
  React.useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed w-3 h-3 bg-green-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-75 ${
          isPointer ? 'scale-150 bg-green-400' : ''
        } ${isText ? 'w-1 h-6 bg-white' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />

      {/* Outer ring for pointer state */}
      {isPointer && (
        <div
          className="fixed w-12 h-12 border-2 border-green-400 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-200"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        />
      )}

      {/* Lens effect for images and interactive elements */}
      {isPointer && (
        <div
          className="fixed w-24 h-24 border border-green-300/50 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 backdrop-blur-sm"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        />
      )}

      {/* Text cursor trail */}
      {isText && (
        <div
          className="fixed w-1 h-8 bg-white/80 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-150"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
import { useState, useEffect, createContext, useContext } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(cursorPosition.x, cursorPosition.y);
      
      if (!hoveredElement) {
        setCursorType('default');
        setIsPointer(false);
        setIsText(false);
        return;
      }

      // Check if element is interactive
      const isInteractive = 
        hoveredElement.tagName === 'BUTTON' ||
        hoveredElement.tagName === 'A' ||
        hoveredElement.closest('button') ||
        hoveredElement.closest('a') ||
        hoveredElement.closest('[role="button"]') ||
        hoveredElement.style.cursor === 'pointer';

      // Check if element contains text
      const isTextElement = 
        hoveredElement.tagName === 'P' ||
        hoveredElement.tagName === 'SPAN' ||
        hoveredElement.tagName === 'H1' ||
        hoveredElement.tagName === 'H2' ||
        hoveredElement.tagName === 'H3' ||
        hoveredElement.tagName === 'H4' ||
        hoveredElement.tagName === 'H5' ||
        hoveredElement.tagName === 'H6' ||
        hoveredElement.closest('p') ||
        hoveredElement.closest('h1') ||
        hoveredElement.closest('h2') ||
        hoveredElement.closest('h3');

      setIsPointer(isInteractive);
      setIsText(isTextElement);
      
      if (isInteractive) {
        setCursorType('pointer');
      } else if (isTextElement) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', updateCursorType);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', updateCursorType);
    };
  }, [cursorPosition]);

  const value = {
    cursorType,
    cursorPosition,
    isPointer,
    isText
  };

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
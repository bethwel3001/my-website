import { useEffect } from 'react';
import { useCursor } from './CursorContext';

export const useCursorEffect = () => {
  const { setCursorType } = useCursor();

  useEffect(() => {
    // Add hover effects to interactive elements
    const interactiveSelectors = [
      'a',
      'button',
      '[role="button"]',
      'input',
      'textarea',
      'select',
      'img',
      '.project-card',
      '.service-card',
      '.tech-item'
    ];

    const handleMouseEnter = () => setCursorType('hover');
    const handleMouseLeave = () => setCursorType('default');

    // Add text cursor for text elements
    const textSelectors = [
      'p',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'span',
      'li',
      'label'
    ];

    const handleTextEnter = () => setCursorType('text');
    const handleTextLeave = () => setCursorType('default');

    // Add event listeners to all interactive elements
    interactiveSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    // Add event listeners to text elements
    textSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener('mouseenter', handleTextEnter);
        element.addEventListener('mouseleave', handleTextLeave);
      });
    });

    return () => {
      // Cleanup event listeners
      interactiveSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        });
      });

      textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.removeEventListener('mouseenter', handleTextEnter);
          element.removeEventListener('mouseleave', handleTextLeave);
        });
      });
    };
  }, [setCursorType]);
};
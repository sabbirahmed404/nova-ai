"use client"

import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (index >= text.length) {
      // Pause at the end
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false);
        setIndex(0);
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    } else if (!isTyping && index < text.length) {
      // Start over
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIsTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [text, isTyping, index]);

  return (
    <span className={`typing-container ${className}`}>
      {displayText}
    </span>
  );
};

export default AnimatedText;
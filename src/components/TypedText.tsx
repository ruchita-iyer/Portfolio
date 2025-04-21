// src/components/TypedText.tsx
import React, { useState, useEffect, useRef } from 'react';

interface TypedTextProps {
  textArray: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypedText: React.FC<TypedTextProps> = ({
  textArray,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Clean up any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // If we're paused, wait before resuming
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return;
    }
    
    const currentFullText = textArray[currentTextIndex];
    
    // If we're deleting and have no text left, move to next item
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      return;
    }
    
    // If we've finished typing the full text, pause
    if (!isDeleting && displayText === currentFullText) {
      setIsPaused(true);
      return;
    }
    
    // Set the delay based on whether we're typing or deleting
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    
    // Set timeout for next update
    timeoutRef.current = setTimeout(() => {
      setDisplayText(prevText => {
        if (isDeleting) {
          // Remove the last character
          return prevText.substring(0, prevText.length - 1);
        } else {
          // Add the next character
          return currentFullText.substring(0, prevText.length + 1);
        }
      });
    }, delay);
    
    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayText, 
    isDeleting, 
    isPaused, 
    currentTextIndex, 
    textArray, 
    typingSpeed, 
    deletingSpeed, 
    delayBetweenTexts
  ]);
  
  return (
    <span className={className}>
      {displayText}
      <span className="text-cursor"></span>
    </span>
  );
};

export default TypedText;


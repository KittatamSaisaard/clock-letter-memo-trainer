"use client";

import React, { useEffect, useImperativeHandle, useState, forwardRef } from "react";

export interface LetterRef {
  displayNextLetter: () => void;
  getCurrentLetter: () => string; 
}

interface LetterProps {
  customLetters: string[];
}

const Letter = forwardRef<LetterRef, LetterProps>(({ customLetters }, ref) => {
  const index = 0; // Current letter
  const [currentLetter, setCurrentLetter] = useState("");
  const [previousLetter, setPreviousLetter] = useState<string>("");

  function shuffle(array: number[]) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  };

  var randomIndex = Math.floor(Math.random() * customLetters.length);

  const initializeGame = () => {
    randomIndex = Math.floor(Math.random() * customLetters.length);
    setCurrentLetter(customLetters[randomIndex]);
  };

  const displayNextLetter = () => {
    let nextLetter = customLetters[randomIndex];

    // Ensure the next letter is not the same as the previous one
    while (nextLetter === previousLetter) {
      randomIndex = Math.floor(Math.random() * customLetters.length);
      nextLetter = customLetters[randomIndex];
    }

    setPreviousLetter(nextLetter);
    setCurrentLetter(nextLetter);
  };
  useImperativeHandle(ref, () => ({
    displayNextLetter,
    getCurrentLetter: () => currentLetter
  }));

  useEffect(() => {
    initializeGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customLetters]) // Reinitialize when customLetters changes

  return (
        <div className="text-center text-5xl m-5"> {currentLetter} </div>
  );
});

// Assigning displayName for better debugging
Letter.displayName = "Letter";

export default Letter;
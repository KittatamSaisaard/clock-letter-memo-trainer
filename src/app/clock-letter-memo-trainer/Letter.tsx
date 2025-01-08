"use client";

import React, { useEffect, useImperativeHandle, useState, forwardRef } from "react";

export interface LetterRef {
  displayNextLetter: () => void;
  getCurrentLetter: () => string; 
}

const Letter = forwardRef((_, ref) => {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "O"];
    const index = 0; // Current letter
    const [currentLetter, setCurrentLetter] = useState('');

    function shuffle(array: number[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    let randomOrder = shuffle([...Array(letters.length).keys()]);

    const initializeGame = () => {   
        setCurrentLetter(letters[randomOrder[index]]);
    };

    function displayNextLetter() {
      randomOrder = shuffle([...Array(letters.length).keys()]);
      setCurrentLetter(letters[randomOrder[index]]);
    }

    useImperativeHandle(ref, () => ({
      displayNextLetter,
      getCurrentLetter: () => currentLetter
    }));

    useEffect(() => {
      initializeGame();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
        <div className="text-center text-5xl m-5">{currentLetter}</div>
  );
});

// Assigning displayName for better debugging
Letter.displayName = "Letter";

export default Letter;
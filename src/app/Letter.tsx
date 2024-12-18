"use client";

import { useEffect, useState } from "react";

export default function Instructions() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "O"];
    let index = 0; // Current letter
    const [currentLetter, setCurrentLetter] = useState('A');

    function shuffle(array: number[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const initializeGame = () => {
        let randomOrder = shuffle([...Array(letters.length).keys()]);
        index = 0;
        setCurrentLetter(letters[randomOrder[index]]); // Display the correct initial letter
    };

    useEffect(() => {
      initializeGame();
    }, [])

  return (
        <div className="text-5xl m-5">{currentLetter}</div>
  );
}
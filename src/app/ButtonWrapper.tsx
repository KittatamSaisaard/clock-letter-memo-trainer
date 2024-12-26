"use client";

import React, { useRef, useState } from "react";
import Letter, { LetterRef } from "./Letter";
import Message from './Message';

export default function ButtonWrapper() {
  const letterRef = useRef<LetterRef>(null);
  const [messageColor, setMessageColor] = useState("black");
  const [message, setMessage] = useState<string>("");
  const [isProcessing, setProcessing] = useState(false); //Prevents overlapping input handling

    //Map numbers to corresponding letters
    const numberToLetterMap: Record<string, string> = {
      "1": "A",
      "2": "B",
      "3": "C",
      "4": "D",
      "5": "E",
      "6": "F",
      "-5": "G",
      "-4": "H",
      "-3": "I",
      "-2": "J",
      "-1": "K",
      "0": "O",
    };

    //Map letters to corresponding numbers
    const letterToNumberMap: Record<string, string> = {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
      E: "5",
      F: "6",
      G: "-5",
      H: "-4",
      I: "-3",
      J: "-2",
      K: "-1",
      O: "0",
    };

  function handleInput(value: string) {

    if (isProcessing) return;

    setProcessing(true);

    // Check if the clicked value matches the correct value for the current letter
    console.log(numberToLetterMap[value.toString()]);
    if (letterRef.current) {
      const correctValue = numberToLetterMap[value.toString()];
      const currentLetter = letterRef.current.getCurrentLetter();
      if (correctValue === currentLetter) {
        setMessage("Correct");
        setMessageColor("green");
      } else {
        setMessage(`Incorrect! The correct answer is: ${letterToNumberMap[currentLetter]}`);
        setMessageColor("red");
      }
    }
    
    setTimeout(() => {
      if (letterRef.current) {
        setMessageColor("black");
        setMessage("");
        letterRef.current.displayNextLetter();
        setProcessing(false);
      }
    }, 1000);
  }

  return (
    <div className="max-w-[300px]">
     <Letter
        ref={letterRef}
      />

      <div className="relative w-[300px] h-[300px] mt-12 flex items-center justify-center">
        {["1", "2", "3", "4", "5", "6", "-5", "-4", "-3", "-2", "-1", "0"].map((number, index) => {
          const radius = 140;
          const centerX = 125;
          const centerY = 125;
          const angle = ((index + 1) * 2 * Math.PI) / 12 - Math.PI / 2;
          const x = Math.round(centerX + radius * Math.cos(angle));
          const y = Math.round(centerY + radius * Math.sin(angle));

          return (
            <button
              key={index}
              style={{ left: `${x}px`, top: `${y}px` }}
              className="absolute w-[50px] h-[50px] text-lg border-none rounded-full bg-blue-500 text-white"
              onClick={() => handleInput(number)}
            >
              {number}
            </button>
          );
        })}
      </div>

      {/* Message (Win/Lose) */}
      <Message text={message} color={messageColor} />
    </div>
  );
}

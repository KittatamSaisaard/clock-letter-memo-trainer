"use client";

import React, { useRef, useState } from "react";
import Letter, { LetterRef } from "./Letter";
import Message from './Message';

export default function ButtonWrapper() {
  const letterRef = useRef<LetterRef>(null);
  const [messageColor, setMessageColor] = useState("black");
  const [message, setMessage] = useState<string>("");
  const [isProcessing, setProcessing] = useState(false); // Prevents overlapping input handling
  const [letters, setLetters] = useState<string[]>(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "O"]);
  const [isEditMode, setIsEditMode] = useState(false);

  //Unified mapping: number-to-letter and letter-to-number
  const mappings: Record<string, string> = {
    "1": "A", "2": "B", "3": "C", "4": "D", "5": "E", "6": "F",
    "-5": "G", "-4": "H", "-3": "I", "-2": "J", "-1": "K", "0": "O",
  };

  // Utility functions for lookup
  const getLetterForNumber = (number: string) => mappings[number];
  const getNumberForLetter = (letter: string) => 
    Object.keys(mappings).find(key => mappings[key] === letter);

  function handleInput(value: string) {

    if (isProcessing) return;

    setProcessing(true);

    // Check if the clicked value matches the correct value for the current letter
    if (letterRef.current) {
      const correctValue = getLetterForNumber(value);;
      const currentLetter = letterRef.current.getCurrentLetter();
      if (correctValue === currentLetter) {
        setMessage("Correct");
        setMessageColor("green");
      } else {
        const correctNumber = getNumberForLetter(currentLetter);
        setMessage(`Incorrect! The correct answer is: ${correctNumber}`);
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

  const maxCharLength = 2; // 
  const handleLetterChange = (index: number, value: string) => {
    if (value.length <= maxCharLength) {
      const updatedLetters = [...letters];
      updatedLetters[index] = value.toUpperCase();
      setLetters(updatedLetters);
    }
  };

  const saveChanges = () => {
    setIsEditMode(false);
    if (letterRef.current) { // Refresh the display
      letterRef.current.displayNextLetter();
    }
  };

  return (
    <div className="max-w-[300px]">
      {isEditMode ? (
        <div>
          <h3 className="text-center mb-4 text-lg">Click on the characters to edit them</h3>
          <div className="relative w-[300px] h-[300px] mt-12 flex items-center justify-center">
            {["1", "2", "3", "4", "5", "6", "-5", "-4", "-3", "-2", "-1", "0"].map((number, index) => {
              const radius = 140;
              const centerX = 125;
              const centerY = 125;
              const angle = ((index + 1) * 2 * Math.PI) / 12 - Math.PI / 2;
              const x = Math.round(centerX + radius * Math.cos(angle));
              const y = Math.round(centerY + radius * Math.sin(angle));

              return (
                <input
                  key={index}
                  maxLength={maxCharLength}
                  type="text"
                  value={letters[index]}
                  onChange={(e) => handleLetterChange(index, e.target.value)}
                  style={{ left: `${x}px`, top: `${y}px` }}
                  className="absolute w-[50px] h-[50px] text-lg border-none rounded-full text-center bg-blue-500 text-white"
                />
              );
            })}
          </div>
          <div className="flex justify-center my-4">
            <button
              onClick={saveChanges}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <>
        <Letter
        ref={letterRef} customLetters={letters}
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
        <div className="flex justify-center my-4">
          <button
              onClick={() => setIsEditMode(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
            Edit Letters
          </button>
        </div>
        </>
      )}
    </div>
  );
}

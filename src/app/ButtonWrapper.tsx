"use client";

import React, { useRef } from "react";
import Letter, { LetterRef } from "./Letter";

export default function ButtonWrapper() {
  const letterRef = useRef<LetterRef>(null);

  function handleInput() {
    setTimeout(() => {
      if (letterRef.current) {
        console.log('test')
        letterRef.current.displayNextLetter();
      }
    }, 1000);
  }

  return (
    <div>
      <Letter ref={letterRef} />

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
              onClick={handleInput}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}

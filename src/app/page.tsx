// import { useEffect } from "react";
import Instructions from './Instructions';

export default function Home() {

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "O"];
  const correctAnswers = ["1", "2", "3", "4", "5", "6", "-5", "-4", "-3", "-2", "-1", "0"];

  const radius = 140; // Radius of the circle
  const centerX = 125; // Center X of the container
  const centerY = 125; // Center Y of the container

  let index = 0; // Current letter
  let currentLetter;

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
    currentLetter = letters[randomOrder[index]]; // Display the correct initial letter
    console.log(currentLetter);
  };

  // useEffect(() => {
  //   initializeGame();
  // }, [])


  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-6xl p-3 pb-12">Clock Letter Memo Trainer</h1>
      {/* Instructions */}
      <Instructions />

      {/* Letter */}
      <div className="text-5xl m-5">A</div>

      {/* Buttons */}
      <div className="relative w-[300px] h-[300px] mt-12 flex items-center justify-center">

      {
        correctAnswers.map((number, index) => {
          const angle = ((index + 1) * 2 * Math.PI) / correctAnswers.length - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return(<button
            key={index} 
            style={{left: `${x}px`, top: `${y}px`}} 
            className="absolute w-[50px] h-[50px] text-lg border-none rounded-full bg-blue-500 text-white"
          >{number}</button>)
        })
      }
      </div>
    </div>
  );
}

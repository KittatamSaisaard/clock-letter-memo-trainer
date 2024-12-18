import Instructions from './Instructions';
import Letter from './Letter';

export default function Home() {

  const correctAnswers = ["1", "2", "3", "4", "5", "6", "-5", "-4", "-3", "-2", "-1", "0"];

  const radius = 140; // Radius of the circle
  const centerX = 125; // Center X of the container
  const centerY = 125; // Center Y of the container

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-6xl p-3 pb-12">Clock Letter Memo Trainer</h1>
      {/* Instructions */}
      <Instructions />

      {/* Letter */}
      <Letter />

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

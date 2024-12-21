import Instructions from './Instructions';
import ButtonWrapper from './ButtonWrapper';


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

      {/* Buttons */}
      <ButtonWrapper />
      <div>

      </div>
    </div>
  );
}

import Instructions from './Instructions';
import ButtonWrapper from './ButtonWrapper';


export default function ClockLetterMemoTrainer() {
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

import Instructions from './Instructions';
import ButtonWrapper from './ButtonWrapper';
import Link from 'next/link';


export default function ClockLetterMemoTrainer() {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* Back to Home Button */}
      <Link href="/" className="absolute top-5 left-5 px-4 py-2 bg-blue-500 text-white rounded">
        Main Menu
      </Link>

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

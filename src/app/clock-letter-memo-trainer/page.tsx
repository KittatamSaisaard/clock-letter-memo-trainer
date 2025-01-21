import Instructions from './Instructions';
import ButtonWrapper from './ButtonWrapper';
import Link from 'next/link';


export default function ClockLetterMemoTrainer() {

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="text-center text-6xl p-3 pb-12">Clock Letter Memo Trainer</h1>

      {/* Instructions */}
      <Instructions />

      {/* Buttons */}
      <ButtonWrapper />

      {/* Back to Home Button */}
      <Link href="/" className="mb-6 px-4 py-2 bg-blue-500 text-white rounded">
        Explore Other Tools!
      </Link>
    </div>
  );
}

"use client";

export default function Instructions() {
  return (
      <div className="p-3">
        <h3 className="text-center text-3xl">Instructions:</h3>
        <ul className="list-disc list-inside text-left">
          <li>A letter will appear on the screen.</li>
          <li>Select the clock hour corresponding to the letter by clicking the correct button (A-F = 1-6, G-K = 7-11, O = 0).</li>
          <li>Review the results after each round to see any mistakes and the correct answers.</li>
        </ul>
      </div>
  );
}
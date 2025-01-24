import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Cubing Tools</h1>
      <p className="text-base text-gray-700 mb-12">
        Various cubing tools to help you get better at cubing!
      </p>
      <Link className="px-6 py-3 min-w-60 text-center bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600" href="/clock-letter-memo-trainer">
        Clock Letter Memo Trainer
      </Link>
      <Link className="my-6 px-6 py-3 min-w-60 text-center bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600" href="/">
        Clock Simulator
      </Link>
    </div>
  );
}

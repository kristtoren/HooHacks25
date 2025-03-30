import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gray-900 mt-[-60px]">
      <h1 className="text-4xl font-extrabold text-center text-blue-400 animate-fade-in mb-6">
        The Energy & Water Footprint of AI
      </h1>
      
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-3xl text-center">
        <p className="text-2xl font-semibold mb-4 text-blue-300">Did you know?</p>
        
        <p className="text-lg mb-4">
          The <span className="text-yellow-400 font-bold">GPT-4</span> model consumes approximately
          <span className="text-green-400 font-bold"> 0.14 kW</span> each time it generates 100 words.
        </p>

        <p className="text-lg mb-6">
          In one day, ChatGPT consumes an estimated
          <span className="text-pink-400 font-bold"> 39.98 million kWh</span> —
          enough electricity to charge <span className="text-purple-400 font-bold">8 million iPhones!</span>
        </p>

        <p className="text-lg mb-4">
          The <span className="text-yellow-400 font-bold">GPT-4</span> model consumes approximately
          <span className="text-blue-400 font-bold"> 519 mL of water</span> each time it generates 100 words.
        </p>
        
        <p className="text-lg mb-6">
          In one day, ChatGPT consumes an estimated
          <span className="text-indigo-400 font-bold"> 39.16 million gallons</span> of water —
          enough to fill <span className="text-teal-400 font-bold">978,000 bathtubs!</span>
        </p>
      </div>
      
      <Link href="/footprintPage">
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md text-lg">
          Calculate Your Footprint
        </button>
      </Link>
    </div>
  );
}

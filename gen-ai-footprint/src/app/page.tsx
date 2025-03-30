import Link from "next/link";
import { LandingPageChart } from "@/components/charts/landingPageChart";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-start flex-wrap justify-between min-h-screen p-6 text-white bg-gray-900 mb-[-200px]">
        {/* Left side (text section) */}
        <div className="flex flex-col items-start justify-start min-h-screen p-6 text-white bg-gray-900 w-1/2 min-w-24">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-blue-500 animate-fade-in mb-6 mt-[-30px]">
            Training GPT-4 for 100 days required an estimated 28,800,000 kWh of energy.
          </h2>
        </div>
        
        {/* Right side (chart section) */}
        <div className="flex flex-col items-start justify-start min-h-screen p-6 w-1/2 mt-[-30px] min-w-24">
          <LandingPageChart />
        </div>
      </div>
      <div className="flex flex-col items-center justify-end p-6 text-white bg-gray-900 mt-20">
        <span className="text-2xl animate-pulse mb-25 mt-[-150px]">↓</span>
        <h1 className="text-4xl font-extrabold text-center text-blue-400 animate-fade-in mb-6">
          The Energy & Water Footprint of AI
        </h1>
        
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-3xl text-center">
          
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
        
        {/* Button to navigate using Link */}
        <Link href="/footprintPage" className="mt-10 mb-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md text-lg">
            Calculate Your Footprint
        </Link>
      </div>
    </div>
  );
}

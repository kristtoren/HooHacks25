"use client";
import { useState } from "react";

export default function FootprintPage() {
  const [queriesPerDay, setQueriesPerDay] = useState("");
  const [serviceType, setServiceType] = useState("Text generation");
  const [complexity, setComplexity] = useState("Short (1-2 sentences)");
  const [result, setResult] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [resultNum, setNum] = useState<number | null>(null);
  const [electricity, setkwh] = useState<number | null>(null);
  const[water, setWater] = useState<number | null>(null);
  const[bulbs, setBulbs] = useState<number | null>(null);

  //calculating footprint
  const calculateFootprint = () => {
    if (!queriesPerDay || parseInt(queriesPerDay, 10) <= 0) {
      setResult(null);
      setResult("Please enter how many queries you send per day!");
      return;
    }
  
    const queries = parseInt(queriesPerDay, 10);
    let baseMultiplier = 1;
    let electricityMultiplier = 1;

    // Assign multipliers based on service type
    if (serviceType.includes("Image")) baseMultiplier = 5;
    else if (serviceType.includes("Voice") || serviceType.includes("Audio")) baseMultiplier = 4;
    else if (serviceType.includes("Text")) baseMultiplier = 2;

    // Adjust for complexity
    if (complexity.includes("Medium")) {
      baseMultiplier *= 1.5;
      electricityMultiplier = 2;
      
    }
    else if (complexity.includes("Long")) {
      baseMultiplier *= 2;
      electricityMultiplier = 3;
    }
    else if (complexity.includes("Short")) {
      baseMultiplier *= 1; //nothing changes
      electricityMultiplier *= 1.5;
    }
    setWarning(null);
    const estimatedFootprint = queries * baseMultiplier*10;
    //setting bulbs being lighted up
    if (estimatedFootprint!=null){
      setBulbs(estimatedFootprint*25);
    } else {setBulbs(0);}
    //setting water
    if (estimatedFootprint!=null){
      setWater(estimatedFootprint*15000);
    } else {setWater(0);}
    //figure out electricity
    setNum(estimatedFootprint);
    setResult(`Your consumption uses:`);
    //setResult(`Your consumption uses ${estimatedFootprint.toFixed(2)} units.`);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800 w-full max-w-4xl mx-auto text-white">
      <div className="flex justify-between items-center w-full gap-4">
        <label className="text-lg w-3/5">How many AI queries or prompts do you send per day?</label>
        <input
          type="number"
          placeholder="Enter number"
          value={queriesPerDay}
          onChange={(e) => setQueriesPerDay(e.target.value)}
          className="p-2 w-2/5 rounded-md bg-gray-700 text-white outline-none"
        />
      </div>

      <div className="flex justify-between items-center w-full gap-4">
        <label className="text-lg w-3/5">What type of AI services did you use?</label>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="p-2 w-2/5 rounded-md bg-gray-700 text-white outline-none"
        >
          <option>Text generation (ChatGPT, Claude, Perplexity, etc.)</option>
          <option>Image generation (DALL-E, MidJourney, etc.)</option>
          <option>Voice/ Audio generation (Murf, ElevenLabs, etc.)</option>
        </select>
      </div>

      <div className="flex justify-between items-center w-full gap-4">
        <label className="text-lg w-3/5">What's the average length/ complexity of your queries?</label>
        <select
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="p-2 w-2/5 rounded-md bg-gray-700 text-white outline-none"
        >
          <option>Short (1-2 sentences)</option>
          <option>Medium (1 paragraph)</option>
          <option>Long (Multiple paragraphs or more)</option>
        </select>
      </div>

      <button
        onClick={calculateFootprint}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        CALCULATE
      </button>

      {/* Result Section */}
      {result && (
  <div className="mt-6 w-full p-6 bg-gray-700 rounded-md text-xl text-center shadow space-y-6">
    
    <p>{result}</p>
    

    {/* Breakdown Row */}
    <div className="flex justify-center items-center gap-8 text-white text-lg">
      <div className="flex flex-col items-center">
        <span className="text-yellow-400 text-4xl">⚡</span>
        <span>{resultNum} kWh/month</span>
      </div>

      <span className="text-3xl">≈</span>

      <div className="flex flex-col items-center">
        <span className="text-yellow-300 text-4xl">💡</span>
        <span>{bulbs} lightbulb hours</span>
      </div>

      <span className="text-3xl">≈</span>

      <div className="flex flex-col items-center">
        <span className="text-blue-400 text-4xl">💧</span>
        <span>{water} gallons</span>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

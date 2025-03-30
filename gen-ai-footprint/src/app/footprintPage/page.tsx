"use client";
import BarChartRateCost from "@/components/charts/BarChartRateCost";
import { WaterBottleRadial } from "@/components/charts/bottlesDrankChart";
import { PhoneChargeRadial } from "@/components/charts/PhonesChargedGraph";
import { useState, useEffect } from "react";

export default function FootprintPage() {
  const [queriesPerDay, setQueriesPerDay] = useState("");
  const [serviceType, setServiceType] = useState("Text generation");
  const [complexity, setComplexity] = useState("Short (1-2 sentences)");
  const [result, setResult] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [resultNum, setNum] = useState<number | null>(null);
  const[water, setWater] = useState<number>(0);
  const[bulbs, setBulbs] = useState<number | null>(null);
  const queries = parseInt(queriesPerDay, 10);
  const watts_per_query = 2.9;
  const mliters_per_query = 10.6;

    // Scroll to top when the component is loaded
    useEffect(() => {
      window.scrollTo(0, 0);  // Scroll to the top of the page
    }, []);

  //calculating footprint
  const calculateFootprint = () => {
    if (!queriesPerDay || parseInt(queriesPerDay, 10) <= 0) {
      setResult(null);
      setResult("Please enter how many queries you send per day!");
      return;
    }
  
    
    let baseMultiplier = 1;
    //let electricityMultiplier = 1;

    // Assign multipliers based on service type
    if (serviceType.includes("Image")) baseMultiplier = 60;
    else if (serviceType.includes("Text")) baseMultiplier = 1;

    // Adjust for complexity
    if (complexity.includes("Medium")) {
      baseMultiplier *= 1.5;
      //electricityMultiplier = 2;
      
    }
    else if (complexity.includes("Long")) {
      baseMultiplier *= 2;
      //electricityMultiplier = 3;
    }
    else if (complexity.includes("Short")) {
      baseMultiplier *= 1; //nothing changes
      //electricityMultiplier *= 1.5;
    }
    setWarning(null);
    const estimatedFootprint = queries * 4 * baseMultiplier; // 4wH per query per day
    //setting bulbs being lighted up
    if (estimatedFootprint!=null){
      let bulb_wH: number = 64/8;
      let water_mL: number = 12.4
      setBulbs(estimatedFootprint/bulb_wH);
      setWater(estimatedFootprint*water_mL);
    } else {
      setBulbs(0);
      setWater(0);}

    //figure out electricity
    setNum(estimatedFootprint);
    setResult(`Your consumption uses: `);
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
        <span>{resultNum!=null ? resultNum/1000 : 0} kWh/day</span>
      </div>

      <span className="text-3xl">≈</span>

      <div className="flex flex-col items-center">
        <span className="text-yellow-300 text-4xl">💡</span>
        <span>{bulbs} LED lightbulb hours </span>
      </div>

      <span className="text-3xl">&</span>

      <div className="flex flex-col items-center">
        <span className="text-blue-400 text-4xl">💧</span>
        <span>{water!=null ? Math.round(((water/1000)*33.8)) : 0} oz</span>
      </div>
    </div>
    
    {resultNum != null && (
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
    <PhoneChargeRadial wH={resultNum} />
    <WaterBottleRadial waterNum={((water/1000)*33.8)} />
    <BarChartRateCost rate={resultNum} />
  </div>
)}

  </div>
)}
    </div>
  );
}

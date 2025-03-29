"use client";
import { useState } from "react";

export default function FootprintPage() {
  const [queriesPerDay, setQueriesPerDay] = useState("");
  const [serviceType, setServiceType] = useState("Text generation");
  const [complexity, setComplexity] = useState("Short (1-2 sentences)");

  const calculateFootprint = () => {
      alert(`Calculating footprint for ${queriesPerDay} queries of ${complexity} using ${serviceType}.`);
  };

  return (
<div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-gray-800 w-full max-w-4xl mx-auto">
          <div className="flex justify-between items-center w-full gap-4">
                <label className="text-lg ">How many AI queries or prompts do you send per day?</label>
                <input 
                    type="number" 
                    placeholder="Enter number" 
                    value={queriesPerDay}
                    onChange={(e) => setQueriesPerDay(e.target.value)}
                    className="p-2 w-1/2 rounded-md bg-gray-700 text-white outline-none"
                />
            </div>
            <div className="flex justify-between items-center w-full gap-4">

          <label className="w-full">What type of AI services did you use?</label>
          <select 
              value={serviceType} 
              onChange={(e) => setServiceType(e.target.value)}
              className="p-2 w-full rounded-md bg-gray-700 text-white outline-none"
          >
              <option>Text generation (ChatGPT, Claude, etc.)</option>
              <option>Image generation (DALL-E, MidJourney, etc.)</option>
              <option>Voice/ Audio generation (Murf, ElevenLabs, etc.)</option>
              <option>AI search assistants (Perplexity, etc.)</option>
          </select>
</div>
<div className="flex justify-between items-center w-full gap-4">

          <label className="w-full">What's the average length/ complexity of your queries?</label>
          <select 
              value={complexity} 
              onChange={(e) => setComplexity(e.target.value)}
              className="p-2 w-full rounded-md bg-gray-700 text-white outline-none"
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
      </div>
  );
}
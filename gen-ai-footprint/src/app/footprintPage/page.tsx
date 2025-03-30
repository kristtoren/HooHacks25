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
              <option>Text generation (ChatGPT, Claude, Perplexity, etc.)</option>
              <option>Image generation (DALL-E, MidJourney, etc.)</option>
              <option>Voice/ Audio generation (Murf, ElevenLabs, etc.)</option>
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
// "use client";
// import React, { useState } from "react";
// import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// export default function FootprintPage() {
//   const [queriesPerDay, setQueriesPerDay] = useState("");
//   const [serviceType, setServiceType] = useState("Text generation");
//   const [complexity, setComplexity] = useState("Short (1-2 sentences)");

//   const calculateFootprint = () => {
//     alert(`Calculating footprint for ${queriesPerDay} queries of ${complexity} using ${serviceType}.`);
//   };

//   return (
//     <div className="flex justify-center items-start min-h-screen bg-gray-900 p-4 pt-10">
//       <Card className="w-full max-width-none bg-gray-800 text-gray 20 p-8 rounded-xl shadow-md border border-gray-700">
//         <CardContent className="space-y-6">

//           {/* Queries per day */}
//           <div className="flex flex-row gap-4">
//             <Label htmlFor="queries">How many AI queries or prompts do you send per day?</Label>
//             <Input
//               id="queries"
//               type="number"
//               placeholder="Enter number"
//               value={queriesPerDay}
//               onChange={(e) => setQueriesPerDay(e.target.value)}
//               className="bg-gray-700 text-white w-2/5 outline-none ml-auto"
//             />
//           </div>

//           {/* AI Service Type */}
//           <div className="flex flex-row gap-4 w-full">
//             <Label htmlFor="service">What type of AI services did you use?</Label>
//             <Select 
//             onValueChange={(value) => setServiceType(value)} defaultValue={serviceType}>
//               <SelectTrigger className="bg-gray-700 text-white w-2/5 ml-auto">
//                 <SelectValue placeholder="Select Service" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Text generation">Text generation (ChatGPT, Claude, etc.)</SelectItem>
//                 <SelectItem value="Image generation">Image generation (DALL-E, MidJourney, etc.)</SelectItem>
//                 <SelectItem value="Voice/Audio generation">Voice/Audio generation (Murf, ElevenLabs, etc.)</SelectItem>
//                 <SelectItem value="AI search assistants">AI search assistants (Perplexity, etc.)</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Query Complexity */}
//           <div className="flex flex-row gap-4 w-full">
//             <Label htmlFor="complexity">What's the average length/ complexity of your queries?</Label>
//             <Select onValueChange={(value) => setComplexity(value)} defaultValue={complexity}>
//               <SelectTrigger className="bg-gray-700 text-white w-2/5 ml-auto">
//                 <SelectValue placeholder="Select Complexity" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Short">Short (1-2 sentences)</SelectItem>
//                 <SelectItem value="Medium">Medium (1 paragraph)</SelectItem>
//                 <SelectItem value="Long">Long (Multiple paragraphs or more)</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Calculate Button */}
//           <div className="flex justify-center">
//             <Button onClick={calculateFootprint} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
//               CALCULATE
//             </Button>
//           </div>

//         </CardContent>
//       </Card>
//     </div>
//   );
// }

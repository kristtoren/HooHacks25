import { ChatGPTWeeklyUsersLine } from "@/components/charts/USDailyFootprint/ChatGPTusersTime";
import { EnergySourcesPie } from "@/components/charts/USDailyFootprint/USEnergySources";

export default function USDailyPage() {
  return (
    <div className="flex flex-col w-full px-2 md:px-5 gap-10">
      
      {/* Text at the top */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-fuchsia-300 animate-fade-in">
          This data shows that nearly three-quarters of U.S. energy consumption is fueled by nonrenewable sources—petroleum and natural gas. In a similar way, the massive data centers powering ChatGPT require enormous amounts of energy for training and operation. Often, these data centers are powered by the same types of nonrenewable sources, contributing to a significant carbon footprint.
        </h3>
      </div>
      <div className="flex flex-row  gap-8 justify-center">
        {/* Chart 1 */}
      <div className="w-full">
        <EnergySourcesPie />
      </div>

      {/* Chart 2 */}
      <div className="w-full">
        <ChatGPTWeeklyUsersLine />
      </div>
      </div>
      
    </div>
  );
}

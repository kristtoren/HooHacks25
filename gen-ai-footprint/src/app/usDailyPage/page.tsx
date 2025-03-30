import { ChatGPTWeeklyUsersLine } from "@/components/charts/USDailyFootprint/ChatGPTusersTime";
import { EnergySourcesPie } from "@/components/charts/USDailyFootprint/USEnergySources";

export default function USDailyPage() {
  return (
    <div className="flex flex-col w-full">
        <div className="flex-1 px-10 py-10 w-2/3">
            <div className="flex flex-row md:flex-row gap-6 ml-[-210px] mt-[-45px] mb-20 w-full">
                <div className="flex-1">
                <EnergySourcesPie />
                </div>
                <h3 className="mt-10 text-1xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-blue-500 animate-fade-in mb-6 mt-[-30px] w-300 flex-1">
                    This data shows that nearly three-quarters of U.S. energy consumption is fueled by nonrenewable sources—petroleum and natural gas. In a similar way, the massive data centers powering ChatGPT require enormous amounts of energy for training and operation. Often, these data centers are powered by the same types of nonrenewable sources, contributing to a significant carbon footprint.
                </h3>
            </div>
            <div className="flex-1">
                <ChatGPTWeeklyUsersLine />
            </div>
        </div>
    </div>
        
  );
}
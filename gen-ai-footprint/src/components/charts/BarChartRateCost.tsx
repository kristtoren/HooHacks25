'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer} from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from '@/components/ui/chart'
import { Card } from '@/components/ui/card'


/**
 * PROPS
 * rate: number - average daily chatgpt prompts
 */
interface Props {
    rate: number;
}
export default function BarChartRateCost({rate} : Props) {
    let averagePrompts: number = 5;

    const chartData = [
        { user: "You", energy: 2.9*rate, water: 10.6*rate}, //energy is in WH and water is in mL
        { user: "Average", energy: 2.9*averagePrompts, water: 10.6*averagePrompts},
        { user: "Googler", energy: 0.3*rate, water: 5.6*rate},
    ]

    return(
        <Card className="w-150">
            <h1>Daily energy/water usage</h1>
            <div>for yourself, the average ChatGPT user, and yourself if you did a google search instead of asking ChatGPT</div>
        <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="user"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    //tickFormatter={(value) => value.slice(0,3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey='energy' fill='var(--color-energy)' radius={4} />
                <Bar dataKey='water' fill='var(--color-water)' radius={4} />
            </BarChart>
        </ChartContainer>
            <div>

                <div>data:</div>
                <div>
                Energy: 2.9WH generated per ChatGPT query, 0.3WH generated per google search (
                    <a target="_blank"
                    rel="noreferrer" 
                    href="https://www.rwdigital.ca/blog/how-much-energy-do-google-search-and-chatgpt-use/#:~:text=While%20Google's%20energy%20use%20for,for%20a%20single%20Google%20search">
                        www.rwdigital.ca</a>
                )</div>
                <div>Water: 519 mL of water for every 140 WH of energy used to fuel ChatGPT = 10.6 ml for every query (
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/">
                            www.washingtonpost.com</a>
                )</div>
                <div>3.3x10^9 gallons of water used by google per year / (6x10^9 google searches per day x 365)*   (for 2021) = 5.6 mL water per search (
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://watercalculator.org/news/news-briefs/google-data-center-water/">
                            watercalculator.org</a>, 
                    <a target="_blank"
                        rel="noreferrer"
                        href="https://searchengineland.com/google-now-handles-2-999-trillion-searches-per-year-250247">
                            searchengineland.com</a>
                )</div>
                <div>*conservative estimate for 2021 based on growth from at least 5.5 billion searches per day in 2016</div>
            </div>
        </Card>
    )
}



const chartConfig = {
    energy: {
        label: "Energy (WH)",
        color: "#2563eb",
    },
    water: {
        label: 'Water (mL)',
        color: "#60a5fa",
    },
} satisfies ChartConfig
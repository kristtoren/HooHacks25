'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer} from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from '@/components/ui/chart'


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
        { user: "Googler", energy: 0.3*rate, water: 0.24*rate},
    ]

    return(
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
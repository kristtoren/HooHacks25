'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer} from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from '@/components/ui/chart'
import { Card, CardContent, CardFooter } from '@/components/ui/card'


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
        { user: "You", energy: 4*rate, water: 12.4*rate}, //energy is in WH and water is in mL
        { user: "Average", energy: 4*averagePrompts, water: 12.4*averagePrompts},
    ]

    return(
        <Card className="w-150">
            <h1>Daily energy/water usage</h1>
            <div>for yourself, the average ChatGPT user</div>
        <CardContent>
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
        </CardContent>
        <CardFooter>
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">Your wH and mL of water used</div>
      
        </CardFooter>
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
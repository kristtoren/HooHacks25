"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
const chartData = [
  { source: "Petroleum", percent: 38, fill: "var(--color-petroleum)" },
  { source: "Natural Gas", percent: 36, fill: "var(--color-natural-gas)" },
  { source: "Nuclear Electric Power", percent: 9, fill: "var(--color-nuclear)" },
  { source: "Coal", percent: 9, fill: "var(--color-coal)" },
  { source: "Renewable Energy", percent: 9, fill: "var(--color-renewable)" },
]

const chartConfig = {
  percent: {
    label: "Percent",
  },
  petroleum: {
    label: "Petroleum",
    color: "#2C3E50",
  },
  "natural-gas": {
    label: "Natural Gas",
    color: "#3498DB",
  },
  nuclear: {
    label: "Nuclear Electric Power",
    color: "#9B59B6",
  },
  coal: {
    label: "Coal",
    color: "#34495E",
  },
  renewable: {
    label: "Renewable Energy",
    color: "#27AE60",
  },
} satisfies ChartConfig

export function EnergySourcesPie() {
  return (
    <Card className="flex flex-col w-150">
      <CardHeader className="items-center pb-0">
        <CardTitle>U.S. Energy Consumption by Source</CardTitle>
        <CardDescription>Energy Source Distribution</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="percent" hideLabel />} />
            <Pie data={chartData} dataKey="percent">
              <LabelList
                dataKey="source"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Renewable energy accounts for only 9% of consumption <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Data from <a target="_blank"
                        rel="noreferrer"
                        href="https://www.eia.gov/energyexplained/us-energy-facts/">
                            eia.gov</a></div>
      </CardFooter>
    </Card>
  )
}


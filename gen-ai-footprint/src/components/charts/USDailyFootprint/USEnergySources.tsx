"use client"

import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { source: "Petroleum", percent: 38 },
  { source: "Natural Gas", percent: 36 },
  { source: "Nuclear Power", percent: 9 },
  { source: "Coal", percent: 9 },
  { source: "Renewable Energy", percent: 9 },
]

// Colors that match real-life appearance
const COLORS = [
  "#3B2E1E", // Petroleum - dark brown
  "#60A5FA", // Natural Gas - blue
  "#38BDF8", // Nuclear - light blue
  "#1F2937", // Coal - dark gray
  "#34D399", // Renewable - green
]

const chartConfig = {
  percent: {
    label: "Percent",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export function EnergySourcesPie() {
  return (
    <Card className="w-150">
      <CardHeader>
        <CardTitle>U.S. Energy Consumption by Source</CardTitle>
        <CardDescription>2023 Data</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis dataKey="source" type="category" tickLine={false} tickMargin={10} axisLine={false} hide />
            <XAxis dataKey="percent" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="percent" layout="vertical" radius={4}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <LabelList
                dataKey="source"
                position="insideLeft"
                offset={8}
                className="fill-white"
                fontSize={12}
              />
              <LabelList
                dataKey="percent"
                position="right"
                offset={8}
                className="fill-white"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Petroleum and Natural Gas account for 74% of energy consumption
        </div>
        <div className="leading-none text-muted-foreground">Data from U.S. Energy Information Administration</div>
      </CardFooter>
    </Card>
  )
}


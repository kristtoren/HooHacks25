"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Modified data with custom labels instead of months
const chartData = [
  { month: "Sydney Opera", desktop: 4.4 },
  { month: "5,000 EV's", desktop: 5.4 },
  { month: "5M Fridges", desktop: 7.5 },
  { month: "5,000 U.S. Homes", desktop: 13.6 },
  { month: "GPT-4 Training", desktop: 28 },
]

const chartConfig = {
  desktop: {
    label: "Energy (kWh): ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function LandingPageChart() {
  return (
    <Card className="min-w-[50%] w-[100%]">
      <CardHeader>
        <CardTitle>A comparison of energy used over 100 days</CardTitle>
        <CardDescription>To put it into perspective...</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // Removed the tickFormatter to show full labels
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill="rgb(59, 130, 246)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          In millions of kWh (Kilowatt-hour)
        </div>
        <div className="leading-none text-muted-foreground"></div>
      </CardFooter>
    </Card>
  )
}

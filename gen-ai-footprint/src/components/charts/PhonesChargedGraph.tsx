"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer } from "@/components/ui/chart"
const chartData = [{ phone: "iPhone-15", battery: 80, fill: "var(--color-iPhone-15)" }]

const chartConfig = {
  battery: {
    label: "battery",
  },
  iPhone15: {
    label: "iPhone-15",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

interface Props {
    wH: number;
}
export function PhoneChargeRadial({wH}: Props) {
const phoneWH: number = 13;
let charge: number = wH / phoneWH;
const chartData = [{ phone: "iPhone-15", battery: charge, fill: "var(--color-iPhone-15)" }]

  return (
    <Card className="flex flex-col w-1/3">
      <CardHeader className="items-center pb-0">
        <CardTitle>iPhone 15 Battery </CardTitle>
        <CardDescription>your daily wH consumed as represented by battery (%) of an iPhone 15</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} startAngle={0} endAngle={charge*3.6} innerRadius={80} outerRadius={110}>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="battery" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                          {chartData[0].battery.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          battery
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


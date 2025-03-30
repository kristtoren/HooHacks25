"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    {
      "date": "2025-01-01",
      "predicted_users": 352.494844,
      "energy_kWh": 98.704,
      "weekly_queries": 6169,
      "monthly_queries": 24676,
      "water_L": 305.9824
    },
    {
      "date": "2025-02-01",
      "predicted_users": 385.390194,
      "energy_kWh": 107.904,
      "weekly_queries": 6744,
      "monthly_queries": 26976,
      "water_L": 334.5024
    },
    {
      "date": "2025-03-01",
      "predicted_users": 415.102122,
      "energy_kWh": 116.224,
      "weekly_queries": 7264,
      "monthly_queries": 29056,
      "water_L": 360.2944
    },
    {
      "date": "2025-04-01",
      "predicted_users": 447.997472,
      "energy_kWh": 125.44,
      "weekly_queries": 7840,
      "monthly_queries": 31360,
      "water_L": 388.864
    },
    {
      "date": "2025-05-01",
      "predicted_users": 479.831681,
      "energy_kWh": 134.352,
      "weekly_queries": 8397,
      "monthly_queries": 33588,
      "water_L": 416.4912
    },
    {
      "date": "2025-06-01",
      "predicted_users": 512.727031,
      "energy_kWh": 143.568,
      "weekly_queries": 8973,
      "monthly_queries": 35892,
      "water_L": 445.0608
    },
    {
      "date": "2025-07-01",
      "predicted_users": 544.56124,
      "energy_kWh": 152.48,
      "weekly_queries": 9530,
      "monthly_queries": 38120,
      "water_L": 472.688
    },
    {
      "date": "2025-08-01",
      "predicted_users": 577.45659,
      "energy_kWh": 161.68,
      "weekly_queries": 10105,
      "monthly_queries": 40420,
      "water_L": 501.208
    },
    {
      "date": "2025-09-01",
      "predicted_users": 610.351939,
      "energy_kWh": 170.896,
      "weekly_queries": 10681,
      "monthly_queries": 42724,
      "water_L": 529.7776
    },
    {
      "date": "2025-10-01",
      "predicted_users": 642.186149,
      "energy_kWh": 179.808,
      "weekly_queries": 11238,
      "monthly_queries": 44952,
      "water_L": 557.4048
    },
    {
      "date": "2025-11-01",
      "predicted_users": 675.081498,
      "energy_kWh": 189.024,
      "weekly_queries": 11814,
      "monthly_queries": 47256,
      "water_L": 585.9744
    },
    {
      "date": "2025-12-01",
      "predicted_users": 706.915708,
      "energy_kWh": 197.936,
      "weekly_queries": 12371,
      "monthly_queries": 49484,
      "water_L": 613.6016
    }
  ]
  

const chartConfig = {
  energy_kWh: {
    label: "energy (kWh)",
    color: "hsl(var(--chart-1))",
  },
  water_L: {
    label: "water (L)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Projection2025Area() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Energy and water consumption (kWh and L) in Millions</CardTitle>
        <CardDescription>
          Showing rapid growth for 2025
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="energy_kWh"
              type="natural"
              fill="rgb(59, 130, 246)"
              fillOpacity={0.4}
              stroke="rgb(59, 130, 246)"
              stackId="a"
            />
            <Area
              dataKey="water_L"
              type="natural"
              fill= "rgb(12 74 110)"
              fillOpacity={0.4}
              stroke="rgb(12 74 110)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Projection made with a linear regression of weekly active users  <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              energy and water consumption are calculated from the weekly active users
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

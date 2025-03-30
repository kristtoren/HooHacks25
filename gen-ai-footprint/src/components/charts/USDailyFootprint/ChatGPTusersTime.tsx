"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { format } from "date-fns"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Convert string dates to actual Date objects for proper scaling
const chartData = [
  { month: "1/23", users: 50, date: new Date(2023, 0, 1) }, // January 2023
  { month: "8/23", users: 100, date: new Date(2023, 7, 1) }, // August 2023
  { month: "8/24", users: 200, date: new Date(2024, 7, 1) }, // August 2024
  { month: "10/24", users: 250, date: new Date(2024, 9, 1) }, // October 2024
  { month: "12/24", users: 300, date: new Date(2024, 11, 1) }, // December 2024
  { month: "2/25", users: 400, date: new Date(2025, 1, 1) }, // February 2025
]

const chartConfig = {
  users: {
    label: "Users",
    color: "#2563eb",
  },
} satisfies ChartConfig

export function ChatGPTWeeklyUsersLine() {
  return (
    <Card className="w-150">
      <CardHeader>
        <CardTitle>ChatGPT Weekly Active Users (Millions)</CardTitle>
        <CardDescription>January 2023 - February 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              type="number"
              domain={["dataMin", "dataMax"]}
              tickFormatter={(timestamp) => {
                const date = new Date(timestamp)
                return format(date, "MM/yy")
              }}
              scale="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // Ensure we have a reasonable number of ticks
              ticks={chartData.map((item) => item.date.getTime())}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    if (typeof value === "number") {
                      return format(new Date(value), "MMM yyyy")
                    }
                    return value
                  }}
                  hideLabel
                />
              }
            />
            <Line
              dataKey="users"
              type="monotone"
              stroke="#2563eb"
              strokeWidth={2}
              dot={true}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up 100 million users from December 2024 - February 2025<TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Data from <a target="_blank"
                        rel="noreferrer"
                        href="https://www.demandsage.com/chatgpt-statistics/">
                            demandsage.come</a></div>
      </CardFooter>
    </Card>
  )
}


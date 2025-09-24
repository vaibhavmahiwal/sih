import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPICardProps {
  title: string
  value: string | number
  change?: number
  changeType?: "increase" | "decrease" | "neutral"
  icon?: LucideIcon
  unit?: string
  className?: string
}

export function KPICard({ title, value, change, changeType = "neutral", icon: Icon, unit, className }: KPICardProps) {
  const changeColor = {
    increase: "text-green-600",
    decrease: "text-red-600", 
    neutral: "text-muted-foreground"
  }[changeType]

  const changeBg = {
    increase: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
    decrease: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
    neutral: "bg-muted"
  }[changeType]

  return (
    <Card className={cn("hover-elevate", className)} data-testid={`kpi-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-mono">
          {value}{unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
        </div>
        {change !== undefined && (
          <div className="flex items-center mt-1">
            <Badge variant="secondary" className={cn("text-xs", changeBg)}>
              {change > 0 ? "+" : ""}{change}%
            </Badge>
            <span className={cn("text-xs ml-2", changeColor)}>vs last period</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
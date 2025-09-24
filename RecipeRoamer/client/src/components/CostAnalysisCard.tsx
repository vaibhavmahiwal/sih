import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CostBreakdown {
  category: string
  budgetedCost: number
  predictedCost: number
  variance: number
  risk: "low" | "medium" | "high"
}

// Mock cost analysis data
const mockCostData: CostBreakdown[] = [
  {
    category: "Steel & Iron",
    budgetedCost: 45000000,
    predictedCost: 52000000,
    variance: 15.6,
    risk: "high"
  },
  {
    category: "Copper & Conductors", 
    budgetedCost: 32000000,
    predictedCost: 31000000,
    variance: -3.1,
    risk: "low"
  },
  {
    category: "Cement & Concrete",
    budgetedCost: 18000000,
    predictedCost: 19500000,
    variance: 8.3,
    risk: "medium"
  },
  {
    category: "Transportation",
    budgetedCost: 12000000,
    predictedCost: 14000000,
    variance: 16.7,
    risk: "high"
  }
]

export function CostAnalysisCard() {
  const totalBudgeted = mockCostData.reduce((sum, item) => sum + item.budgetedCost, 0)
  const totalPredicted = mockCostData.reduce((sum, item) => sum + item.predictedCost, 0)
  const overallVariance = ((totalPredicted - totalBudgeted) / totalBudgeted) * 100
  
  const formatCurrency = (amount: number) => {
    return `₹${(amount / 10000000).toFixed(1)}Cr`
  }
  
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high": return "text-red-600 bg-red-50 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
      case "medium": return "text-yellow-600 bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800"
      case "low": return "text-green-600 bg-green-50 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
      default: return "text-muted-foreground"
    }
  }
  
  const getVarianceColor = (variance: number) => {
    if (variance > 10) return "text-red-600"
    if (variance > 5) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Cost Analysis & Risk Assessment
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Comparing budgeted vs predicted material costs
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold font-mono">
              {formatCurrency(totalPredicted)}
            </div>
            <div className={cn("text-sm flex items-center gap-1 justify-end", getVarianceColor(overallVariance))}>
              {overallVariance > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {overallVariance > 0 ? "+" : ""}{overallVariance.toFixed(1)}% vs budget
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 p-4 rounded-md bg-muted/30">
          <div className="text-center">
            <div className="text-lg font-bold font-mono">{formatCurrency(totalBudgeted)}</div>
            <div className="text-xs text-muted-foreground">Total Budget</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold font-mono">{formatCurrency(totalPredicted)}</div>
            <div className="text-xs text-muted-foreground">Predicted Cost</div>
          </div>
          <div className="text-center">
            <div className={cn("text-lg font-bold font-mono", getVarianceColor(overallVariance))}>
              {formatCurrency(totalPredicted - totalBudgeted)}
            </div>
            <div className="text-xs text-muted-foreground">Variance</div>
          </div>
        </div>
        
        <div className="space-y-3" data-testid="cost-breakdown">
          <h4 className="font-medium text-sm">Cost Breakdown by Category</h4>
          {mockCostData.map((item, index) => {
            const varianceAmount = item.predictedCost - item.budgetedCost
            const progressValue = (item.predictedCost / item.budgetedCost) * 100
            
            return (
              <div key={index} className="space-y-2 p-3 rounded-md border bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-sm">{item.category}</span>
                    <Badge className={cn("text-xs", getRiskColor(item.risk))}>
                      {item.risk.toUpperCase()} RISK
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm">
                      {formatCurrency(item.predictedCost)}
                    </div>
                    <div className={cn("text-xs", getVarianceColor(item.variance))}>
                      {item.variance > 0 ? "+" : ""}{item.variance.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Budget: {formatCurrency(item.budgetedCost)}</span>
                    <span>Variance: {formatCurrency(Math.abs(varianceAmount))}</span>
                  </div>
                  <Progress 
                    value={Math.min(progressValue, 150)} 
                    className={cn(
                      "h-2",
                      progressValue > 110 ? "[&>div]:bg-red-500" : 
                      progressValue > 105 ? "[&>div]:bg-yellow-500" : "[&>div]:bg-green-500"
                    )} 
                  />
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="flex items-center gap-2 p-3 rounded-md bg-yellow-50 border border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <span className="text-sm text-yellow-800 dark:text-yellow-200">
            2 categories show high cost variance risk. Review procurement strategy.
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">Auto-Updated Daily</Badge>
          <Badge variant="outline" className="text-xs">Market Price Tracking</Badge>
          <Badge variant="outline" className="text-xs">Risk Assessment AI</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
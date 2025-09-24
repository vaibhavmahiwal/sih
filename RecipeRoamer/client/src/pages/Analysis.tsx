import { CostAnalysisCard } from "@/components/CostAnalysisCard"
import { KPICard } from "@/components/KPICard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, TrendingDown, TrendingUp, AlertTriangle, Target, DollarSign } from 'lucide-react'

export default function Analysis() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Cost Analysis & Risk Assessment</h1>
        <p className="text-muted-foreground mt-1">
          Comprehensive analysis of material costs, budget variance, and procurement risks
        </p>
      </div>

      {/* Cost Analysis KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard 
          title="Total Savings"
          value="₹23.5"
          unit="Cr"
          change={18.2}
          changeType="increase"
          icon={TrendingUp}
        />
        <KPICard 
          title="Budget Variance"
          value={8.4}
          unit="%"
          change={-2.1}
          changeType="decrease"
          icon={Target}
        />
        <KPICard 
          title="High Risk Categories"
          value={3}
          change={-25}
          changeType="decrease"
          icon={AlertTriangle}
        />
        <KPICard 
          title="Cost per MT"
          value="₹45,240"
          change={-5.3}
          changeType="decrease"
          icon={DollarSign}
        />
      </div>

      {/* Main Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CostAnalysisCard />
        </div>
        
        <div className="space-y-4">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Market Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">Steel Prices</div>
                    <div className="text-xs text-muted-foreground">₹52,400 per MT</div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    <span className="text-xs">+4.2%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">Copper Prices</div>
                    <div className="text-xs text-muted-foreground">₹8,42,000 per MT</div>
                  </div>
                  <div className="flex items-center gap-1 text-red-600">
                    <TrendingDown className="h-3 w-3" />
                    <span className="text-xs">-2.1%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">Cement Prices</div>
                    <div className="text-xs text-muted-foreground">₹5,800 per MT</div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    <span className="text-xs">+1.8%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Risk Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-medium">Supply Chain Disruption</div>
                    <div className="text-xs text-muted-foreground">Transportation strikes affecting steel delivery</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-medium">Weather Impact</div>
                    <div className="text-xs text-muted-foreground">Monsoon delays in 3 project locations</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-medium">Supplier Stability</div>
                    <div className="text-xs text-muted-foreground">All key suppliers maintain good ratings</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-md bg-blue-50 border border-blue-200 dark:bg-blue-950/20 dark:border-blue-800">
                  <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Optimize Procurement</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300">Consider bulk purchasing steel in Q2 to reduce costs by 8%</div>
                </div>
                <div className="p-3 rounded-md bg-green-50 border border-green-200 dark:bg-green-950/20 dark:border-green-800">
                  <div className="text-sm font-medium text-green-800 dark:text-green-200">Diversify Suppliers</div>
                  <div className="text-xs text-green-700 dark:text-green-300">Add 2 backup copper suppliers to reduce supply risk</div>
                </div>
                <div className="p-3 rounded-md bg-purple-50 border border-purple-200 dark:bg-purple-950/20 dark:border-purple-800">
                  <div className="text-sm font-medium text-purple-800 dark:text-purple-200">Inventory Buffer</div>
                  <div className="text-xs text-purple-700 dark:text-purple-300">Maintain 15% safety stock for critical materials</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
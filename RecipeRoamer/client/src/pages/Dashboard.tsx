import { KPICard } from "@/components/KPICard"
import { ForecastChart } from "@/components/ForecastChart"
import { CostAnalysisCard } from "@/components/CostAnalysisCard"
import { TrendingUp, DollarSign, Package, AlertTriangle, Activity, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Smart Automation Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Materials demand forecasting and supply chain optimization for POWERGRID
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-mono">
            Last Updated: {new Date().toLocaleTimeString()}
          </Badge>
          <Button size="sm" data-testid="button-refresh-data">
            <Activity className="h-4 w-4 mr-1" />
            Refresh
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard 
          title="Active Projects"
          value={47}
          change={12.5}
          changeType="increase"
          icon={Package}
        />
        <KPICard 
          title="Total Material Cost"
          value="₹156.8"
          unit="Cr"
          change={-3.2}
          changeType="decrease"
          icon={DollarSign}
        />
        <KPICard 
          title="Forecast Accuracy"
          value={92.4}
          unit="%"
          change={5.1}
          changeType="increase"
          icon={TrendingUp}
        />
        <KPICard 
          title="Critical Alerts"
          value={3}
          change={-25}
          changeType="decrease"
          icon={AlertTriangle}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ForecastChart />
        <div className="space-y-4">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">Delhi-Mumbai Line Forecast Updated</div>
                    <div className="text-xs text-muted-foreground">Steel demand increased by 15%</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">2h ago</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">Cost Analysis Alert</div>
                    <div className="text-xs text-muted-foreground">Transportation costs exceeded budget</div>
                  </div>
                  <Badge variant="destructive" className="text-xs">4h ago</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">New Project Added</div>
                    <div className="text-xs text-muted-foreground">Chennai-Bangalore 400kV line</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">1d ago</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="justify-start" data-testid="button-new-forecast">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  New Forecast
                </Button>
                <Button variant="outline" size="sm" className="justify-start" data-testid="button-upload-data">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Data
                </Button>
                <Button variant="outline" size="sm" className="justify-start" data-testid="button-cost-analysis">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Cost Analysis
                </Button>
                <Button variant="outline" size="sm" className="justify-start" data-testid="button-generate-report">
                  <Package className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CostAnalysisCard />
    </div>
  )
}
import { ForecastChart } from "@/components/ForecastChart"
import { KPICard } from "@/components/KPICard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BarChart, Download, Settings, Brain } from 'lucide-react'

export default function Forecasting() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI-Powered Forecasting</h1>
          <p className="text-muted-foreground mt-1">
            Advanced machine learning models for accurate material demand prediction
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" data-testid="button-model-settings">
            <Settings className="h-4 w-4 mr-1" />
            Model Settings
          </Button>
          <Button size="sm" data-testid="button-run-forecast">
            <Brain className="h-4 w-4 mr-1" />
            Run Forecast
          </Button>
        </div>
      </div>

      {/* Model Performance KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard 
          title="Model Accuracy"
          value={92.4}
          unit="%"
          change={2.1}
          changeType="increase"
          icon={TrendingUp}
        />
        <KPICard 
          title="Prediction Confidence"
          value={87.6}
          unit="%"
          change={0.8}
          changeType="increase"
          icon={BarChart}
        />
        <KPICard 
          title="Data Points Processed"
          value="2.4M"
          change={15.2}
          changeType="increase"
          icon={Brain}
        />
        <KPICard 
          title="Training Time"
          value="12.5"
          unit="min"
          change={-18.4}
          changeType="decrease"
        />
      </div>

      {/* Main Forecasting Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ForecastChart />
        </div>
        
        <div className="space-y-4">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Model Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Algorithm</span>
                  <Badge variant="secondary" className="text-xs">Random Forest</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Trained</span>
                  <span className="text-xs text-muted-foreground">2h ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Version</span>
                  <span className="text-xs font-mono">v2.1.3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Features Used</span>
                  <span className="text-xs font-mono">24</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Feature Importance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Project Budget</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full">
                      <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono">0.84</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tower Type</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full">
                      <div className="w-9 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono">0.73</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Geographic Region</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full">
                      <div className="w-7 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono">0.62</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Timeline</span>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-blue-200 rounded-full">
                      <div className="w-6 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono">0.51</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Export Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start" data-testid="button-export-csv">
                  <Download className="h-4 w-4 mr-2" />
                  Export as CSV
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" data-testid="button-export-excel">
                  <Download className="h-4 w-4 mr-2" />
                  Export as Excel
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" data-testid="button-export-report">
                  <Download className="h-4 w-4 mr-2" />
                  Generate PDF Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
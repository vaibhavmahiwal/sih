import { ProjectInputForm } from "@/components/ProjectInputForm"
import { FileUploadCard } from "@/components/FileUploadCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileUp, Database, TrendingUp } from 'lucide-react'

export default function DataInput() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Data Input & Project Setup</h1>
        <p className="text-muted-foreground mt-1">
          Configure project parameters and upload historical data for accurate forecasting
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectInputForm />
        </div>
        
        <div className="space-y-6">
          <FileUploadCard 
            title="Historical Demand Data"
            description="Upload CSV or Excel files with past material requirements"
            acceptedFormats={["csv", "xlsx", "xls"]}
            maxSize="25MB"
          />
          
          <FileUploadCard 
            title="Market Price Data"
            description="Upload current market rates and price trends"
            acceptedFormats={["csv", "xlsx", "json"]}
            maxSize="10MB"
          />
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Database className="h-5 w-5" />
                Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Internal ERP System</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">Connected</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Market Data API</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">Live</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Weather Service</span>
                  </div>
                  <Badge variant="outline" className="text-xs">Partial</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Data Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completeness</span>
                  <span className="font-mono">94%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy</span>
                  <span className="font-mono">97%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Freshness</span>
                  <span className="font-mono">2h ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Download } from "lucide-react"
import { useState } from "react"

// Mock data for the chart visualization
const mockForecastData = {
  "Steel": {
    periods: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025"],
    actual: [1200, 1350, 1100, 1600, null, null],
    predicted: [null, null, null, null, 1450, 1750],
    unit: "MT"
  },
  "Copper": {
    periods: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025"],
    actual: [350, 420, 380, 450, null, null],
    predicted: [null, null, null, null, 420, 480],
    unit: "MT"
  },
  "Cement": {
    periods: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025"],
    actual: [8500, 9200, 7800, 10500, null, null],
    predicted: [null, null, null, null, 9800, 11200],
    unit: "MT"
  }
}

type MaterialType = keyof typeof mockForecastData

export function ForecastChart() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType>("Steel")
  const [viewType, setViewType] = useState<"chart" | "table">("chart")
  
  const data = mockForecastData[selectedMaterial]
  const accuracy = Math.floor(Math.random() * 10) + 85 // Mock accuracy between 85-95%
  
  const exportData = () => {
    console.log(`Exporting ${selectedMaterial} forecast data`)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Material Demand Forecast
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Predicted material requirements based on project parameters
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-mono">
              {accuracy}% Accuracy
            </Badge>
            <Button size="sm" variant="outline" onClick={exportData} data-testid="button-export-forecast">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Material Type</label>
              <Select value={selectedMaterial} onValueChange={(value: MaterialType) => setSelectedMaterial(value)}>
                <SelectTrigger className="w-40" data-testid="select-material">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(mockForecastData).map((material) => (
                    <SelectItem key={material} value={material}>{material}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">View</label>
              <Select value={viewType} onValueChange={(value: "chart" | "table") => setViewType(value)}>
                <SelectTrigger className="w-32" data-testid="select-view-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chart">Chart</SelectItem>
                  <SelectItem value="table">Table</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {viewType === "chart" ? (
          <div className="h-64 bg-muted/30 rounded-md p-4 flex items-center justify-center" data-testid="forecast-chart">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium text-lg mb-2">{selectedMaterial} Demand Forecast</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive chart visualization will be displayed here
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Actual Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Predicted Data</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-md border" data-testid="forecast-table">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-medium">Period</th>
                  <th className="text-right p-3 text-sm font-medium">Actual ({data.unit})</th>
                  <th className="text-right p-3 text-sm font-medium">Predicted ({data.unit})</th>
                  <th className="text-right p-3 text-sm font-medium">Variance</th>
                </tr>
              </thead>
              <tbody>
                {data.periods.map((period, index) => {
                  const actual = data.actual[index]
                  const predicted = data.predicted[index]
                  const variance = actual && predicted ? 
                    `${((predicted - actual) / actual * 100).toFixed(1)}%` : "-"
                  
                  return (
                    <tr key={period} className="border-t">
                      <td className="p-3 font-medium">{period}</td>
                      <td className="p-3 text-right font-mono">
                        {actual ? actual.toLocaleString() : "-"}
                      </td>
                      <td className="p-3 text-right font-mono">
                        {predicted ? predicted.toLocaleString() : "-"}
                      </td>
                      <td className="p-3 text-right text-sm">{variance}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            AI-Powered Prediction
          </Badge>
          <Badge variant="outline" className="text-xs">
            Real-time Data
          </Badge>
          <Badge variant="outline" className="text-xs">
            Multi-Factor Analysis
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
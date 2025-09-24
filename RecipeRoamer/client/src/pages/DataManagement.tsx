import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database, FileText, Download, Upload, Trash2, RefreshCw } from 'lucide-react'

export default function DataManagement() {
  const handleAction = (action: string) => {
    console.log(`Data management action: ${action}`)
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Data Management</h1>
        <p className="text-muted-foreground mt-1">
          Manage historical data, model training datasets, and system backups
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              Training Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Historical material demand data for model training
            </div>
            <div className="flex justify-between text-sm">
              <span>Records:</span>
              <span className="font-mono">2.4M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last Updated:</span>
              <span className="font-mono">2h ago</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleAction('refresh-training')} data-testid="button-refresh-training">
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleAction('export-training')} data-testid="button-export-training">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Project Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Active project parameters and configurations
            </div>
            <div className="flex justify-between text-sm">
              <span>Active Projects:</span>
              <span className="font-mono">47</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Data Quality:</span>
              <Badge variant="secondary" className="text-xs">97%</Badge>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleAction('backup-projects')} data-testid="button-backup-projects">
                <Upload className="h-4 w-4 mr-1" />
                Backup
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleAction('validate-projects')} data-testid="button-validate-projects">
                <RefreshCw className="h-4 w-4 mr-1" />
                Validate
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="h-5 w-5" />
              System Backups
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              Automated system backups and recovery points
            </div>
            <div className="flex justify-between text-sm">
              <span>Last Backup:</span>
              <span className="font-mono">Daily 2:00 AM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Recovery Points:</span>
              <span className="font-mono">30 days</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleAction('create-backup')} data-testid="button-create-backup">
                <Upload className="h-4 w-4 mr-1" />
                Backup Now
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleAction('restore-backup')} data-testid="button-restore-backup">
                <Download className="h-4 w-4 mr-1" />
                Restore
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Data Cleanup & Maintenance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">Cleanup Operations</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div>
                    <div className="font-medium text-sm">Remove Duplicates</div>
                    <div className="text-xs text-muted-foreground">Clean duplicate material records</div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleAction('remove-duplicates')} data-testid="button-remove-duplicates">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clean
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div>
                    <div className="font-medium text-sm">Archive Old Data</div>
                    <div className="text-xs text-muted-foreground">Move data older than 5 years</div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleAction('archive-old')} data-testid="button-archive-old">
                    <Upload className="h-4 w-4 mr-1" />
                    Archive
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Data Quality</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completeness Score</span>
                  <span className="font-mono text-green-600">94%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accuracy Score</span>
                  <span className="font-mono text-green-600">97%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Consistency Score</span>
                  <span className="font-mono text-yellow-600">89%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Timeliness Score</span>
                  <span className="font-mono text-green-600">95%</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" onClick={() => handleAction('quality-report')} data-testid="button-quality-report">
                <FileText className="h-4 w-4 mr-1" />
                Generate Quality Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Settings as SettingsIcon, Bell, Database, Shield, Users } from 'lucide-react'
import { useState } from "react"

export default function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [autoBackup, setAutoBackup] = useState(true)
  const [modelRetrain, setModelRetrain] = useState(false)
  
  const handleSave = () => {
    console.log('Settings saved')
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="text-muted-foreground mt-1">
          Configure system preferences, notifications, and security settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Dark Mode</Label>
                  <div className="text-xs text-muted-foreground">Toggle between light and dark themes</div>
                </div>
                <ThemeToggle />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="language">System Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger data-testid="select-language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                    <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                    <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="ist">
                  <SelectTrigger data-testid="select-timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                    <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                    <SelectItem value="est">EST (UTC-5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Email Notifications</Label>
                  <div className="text-xs text-muted-foreground">Receive alerts and updates via email</div>
                </div>
                <Switch 
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  data-testid="switch-notifications"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Cost Alert Threshold</Label>
                  <div className="text-xs text-muted-foreground">Alert when budget variance exceeds this %</div>
                </div>
                <div className="w-20">
                  <Input 
                    type="number" 
                    defaultValue="10" 
                    className="text-center"
                    data-testid="input-cost-threshold"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Notification Types</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch defaultChecked data-testid="switch-forecast-alerts" />
                    <Label className="text-sm">Forecast Accuracy Alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch defaultChecked data-testid="switch-timeline-alerts" />
                    <Label className="text-sm">Timeline Delay Alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch data-testid="switch-maintenance-alerts" />
                    <Label className="text-sm">System Maintenance Alerts</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Database className="h-5 w-5" />
                Data & Model Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Auto Backup</Label>
                  <div className="text-xs text-muted-foreground">Automatically backup data daily</div>
                </div>
                <Switch 
                  checked={autoBackup}
                  onCheckedChange={setAutoBackup}
                  data-testid="switch-auto-backup"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium">Auto Model Retraining</Label>
                  <div className="text-xs text-muted-foreground">Retrain models when new data is available</div>
                </div>
                <Switch 
                  checked={modelRetrain}
                  onCheckedChange={setModelRetrain}
                  data-testid="switch-model-retrain"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Data Retention Period</Label>
                <Select defaultValue="5years">
                  <SelectTrigger data-testid="select-retention">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1year">1 Year</SelectItem>
                    <SelectItem value="3years">3 Years</SelectItem>
                    <SelectItem value="5years">5 Years</SelectItem>
                    <SelectItem value="indefinite">Indefinite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input 
                  id="session-timeout" 
                  type="number" 
                  defaultValue="60" 
                  data-testid="input-session-timeout"
                />
              </div>
              
              <div className="space-y-2">
                <Label>API Access Level</Label>
                <Select defaultValue="admin">
                  <SelectTrigger data-testid="select-api-access">
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="read">Read Only</SelectItem>
                    <SelectItem value="write">Read & Write</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button variant="outline" className="w-full" data-testid="button-change-password">
                <Shield className="h-4 w-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Manage user access and permissions for the Smart Automation system.
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" data-testid="button-manage-users">
                  <Users className="h-4 w-4 mr-1" />
                  Manage Users
                </Button>
                <Button variant="outline" size="sm" data-testid="button-audit-log">
                  View Audit Log
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4 pt-4">
        <Button variant="outline" data-testid="button-reset-settings">
          Reset to Defaults
        </Button>
        <Button onClick={handleSave} data-testid="button-save-settings">
          Save Settings
        </Button>
      </div>
    </div>
  )
}
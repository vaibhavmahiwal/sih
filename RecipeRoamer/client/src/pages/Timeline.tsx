import { ProjectTimeline } from "@/components/ProjectTimeline"
import { KPICard } from "@/components/KPICard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { useState } from "react"

export default function Timeline() {
  const [selectedProject, setSelectedProject] = useState("all")
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Project Timeline & Material Schedule</h1>
          <p className="text-muted-foreground mt-1">
            Track project milestones and coordinate material deliveries across all locations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-48" data-testid="select-project-filter">
              <SelectValue placeholder="Filter by project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="delhi-mumbai">Delhi-Mumbai Line</SelectItem>
              <SelectItem value="chennai-bangalore">Chennai-Bangalore Line</SelectItem>
              <SelectItem value="kolkata-bhubaneswar">Kolkata-Bhubaneswar Line</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" data-testid="button-sync-timeline">
            <Calendar className="h-4 w-4 mr-1" />
            Sync Calendar
          </Button>
        </div>
      </div>

      {/* Timeline Status KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KPICard 
          title="On Schedule"
          value={28}
          change={5.2}
          changeType="increase"
          icon={CheckCircle}
        />
        <KPICard 
          title="In Progress"
          value={12}
          change={8.1}
          changeType="increase"
          icon={Clock}
        />
        <KPICard 
          title="Delayed"
          value={3}
          change={-25}
          changeType="decrease"
          icon={AlertTriangle}
        />
        <KPICard 
          title="Avg Completion"
          value={78.5}
          unit="%"
          change={12.3}
          changeType="increase"
          icon={Calendar}
        />
      </div>

      {/* Main Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <ProjectTimeline />
        </div>
        
        <div className="space-y-4">
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-md border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">Steel Towers</span>
                    <span className="text-xs text-muted-foreground">Mar 15</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Delhi-Mumbai Project</div>
                  <div className="text-xs font-mono mt-1">240 units</div>
                </div>
                <div className="p-3 rounded-md border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">ACSR Conductors</span>
                    <span className="text-xs text-muted-foreground">Mar 20</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Chennai-Bangalore Project</div>
                  <div className="text-xs font-mono mt-1">15.8 km</div>
                </div>
                <div className="p-3 rounded-md border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">Transformers</span>
                    <span className="text-xs text-muted-foreground">Apr 5</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Kolkata Substation</div>
                  <div className="text-xs font-mono mt-1">3 units</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Critical Path</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Foundation Work - Delhi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Tower Assembly - Mumbai</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Conductor Installation</span>
                </div>
                <div className="text-xs text-muted-foreground mt-3">
                  3 activities are on critical path
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="text-lg">Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-md bg-yellow-50 border border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Heavy Rain Expected</span>
                  </div>
                  <div className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                    Mumbai region: Mar 18-20. Consider delaying outdoor work.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
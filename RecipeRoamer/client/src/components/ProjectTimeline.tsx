import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  status: "completed" | "in-progress" | "upcoming" | "delayed"
  materials: string[]
  critical: boolean
}

// Mock timeline data
const mockTimelineData: TimelineEvent[] = [
  {
    id: "1",
    title: "Site Preparation & Foundation",
    description: "Ground preparation and foundation laying for tower installations",
    date: "Jan 15, 2024",
    status: "completed",
    materials: ["Cement", "Steel Rebar", "Aggregates"],
    critical: true
  },
  {
    id: "2", 
    title: "Tower Structure Assembly",
    description: "Assembly and erection of transmission tower structures",
    date: "Mar 1, 2024",
    status: "in-progress",
    materials: ["Steel Towers", "Bolts & Fasteners", "Galvanized Steel"],
    critical: true
  },
  {
    id: "3",
    title: "Conductor Installation",
    description: "Installation of transmission conductors and hardware",
    date: "May 15, 2024",
    status: "upcoming",
    materials: ["ACSR Conductors", "Insulators", "Hardware Fittings"],
    critical: false
  },
  {
    id: "4",
    title: "Substation Construction",
    description: "Construction of substation facilities and equipment installation",
    date: "Jul 1, 2024",
    status: "upcoming",
    materials: ["Transformers", "Switchgear", "Control Systems"],
    critical: true
  },
  {
    id: "5",
    title: "Testing & Commissioning",
    description: "System testing, calibration, and project commissioning",
    date: "Sep 30, 2024",
    status: "upcoming",
    materials: ["Testing Equipment", "Calibration Tools"],
    critical: false
  }
]

export function ProjectTimeline() {
  const getStatusIcon = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "delayed":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Calendar className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-700 bg-green-50 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
      case "in-progress":
        return "text-blue-700 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
      case "delayed":
        return "text-red-700 bg-red-50 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800"
      default:
        return "text-gray-700 bg-gray-50 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800"
    }
  }

  const handleViewDetails = (eventId: string) => {
    console.log(`Viewing details for timeline event: ${eventId}`)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Project Timeline & Material Schedule
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Track project milestones and material delivery requirements
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4" data-testid="timeline-events">
          {mockTimelineData.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline connector line */}
              {index < mockTimelineData.length - 1 && (
                <div className="absolute left-6 top-12 w-px h-16 bg-border" />
              )}
              
              <div className={cn(
                "flex gap-4 p-4 rounded-md border transition-colors",
                event.critical ? "bg-orange-50/50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800" : "bg-card",
                "hover:bg-muted/50"
              )}>
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(event.status)}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-base">{event.title}</h4>
                        {event.critical && (
                          <Badge variant="destructive" className="text-xs px-2 py-0">
                            CRITICAL
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={cn("text-xs", getStatusColor(event.status))}>
                        {event.status.replace("-", " ").toUpperCase()}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleViewDetails(event.id)}
                        data-testid={`button-view-${event.id}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      Required Materials:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event.materials.map((material) => (
                        <Badge key={material} variant="secondary" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 rounded-md bg-muted/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-bold font-mono text-green-600">1</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-blue-600">1</div>
              <div className="text-xs text-muted-foreground">In Progress</div>
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-gray-600">3</div>
              <div className="text-xs text-muted-foreground">Upcoming</div>
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-red-600">0</div>
              <div className="text-xs text-muted-foreground">Delayed</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface ProjectData {
  projectName: string
  budget: string
  location: string
  towerType: string
  substationType: string
  region: string
  taxRate: string
  timeline: string
  description: string
}

const TOWER_TYPES = [
  "Single Circuit 220kV",
  "Double Circuit 220kV", 
  "Single Circuit 400kV",
  "Double Circuit 400kV",
  "765kV Extra High Voltage"
]

const SUBSTATION_TYPES = [
  "220/132kV",
  "220/33kV", 
  "400/220kV",
  "400/132kV",
  "765/400kV"
]

const REGIONS = [
  "Northern", "Western", "Eastern", "Southern", "North-Eastern"
]

export function ProjectInputForm() {
  const [formData, setFormData] = useState<ProjectData>({
    projectName: "",
    budget: "",
    location: "",
    towerType: "",
    substationType: "",
    region: "",
    taxRate: "",
    timeline: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Project data submitted:", formData)
  }

  const handleInputChange = (field: keyof ProjectData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Project Parameters</CardTitle>
        <p className="text-sm text-muted-foreground">
          Enter the key parameters for materials demand forecasting
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input 
                id="project-name"
                value={formData.projectName}
                onChange={(e) => handleInputChange("projectName", e.target.value)}
                placeholder="e.g., Delhi-Mumbai Transmission Line"
                data-testid="input-project-name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget">Budget (₹ Crores)</Label>
              <Input 
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                placeholder="e.g., 1500"
                data-testid="input-budget"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Project Location</Label>
              <Input 
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="e.g., Delhi to Mumbai via Rajasthan"
                data-testid="input-location"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Geographic Region</Label>
              <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                <SelectTrigger data-testid="select-region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {REGIONS.map((region) => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tower-type">Tower Type</Label>
              <Select value={formData.towerType} onValueChange={(value) => handleInputChange("towerType", value)}>
                <SelectTrigger data-testid="select-tower-type">
                  <SelectValue placeholder="Select tower type" />
                </SelectTrigger>
                <SelectContent>
                  {TOWER_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="substation-type">Substation Type</Label>
              <Select value={formData.substationType} onValueChange={(value) => handleInputChange("substationType", value)}>
                <SelectTrigger data-testid="select-substation-type">
                  <SelectValue placeholder="Select substation type" />
                </SelectTrigger>
                <SelectContent>
                  {SUBSTATION_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tax-rate">Tax Rate (%)</Label>
              <Input 
                id="tax-rate"
                type="number"
                step="0.1"
                value={formData.taxRate}
                onChange={(e) => handleInputChange("taxRate", e.target.value)}
                placeholder="e.g., 18"
                data-testid="input-tax-rate"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline (months)</Label>
              <Input 
                id="timeline"
                type="number"
                value={formData.timeline}
                onChange={(e) => handleInputChange("timeline", e.target.value)}
                placeholder="e.g., 24"
                data-testid="input-timeline"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea 
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Additional project details and requirements..."
              className="min-h-[100px]"
              data-testid="input-description"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              High Priority Project
            </Badge>
            <Badge variant="outline" className="text-xs">
              Multi-State
            </Badge>
            <Badge variant="outline" className="text-xs">
              Critical Infrastructure
            </Badge>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" type="button" data-testid="button-reset">
              Reset Form
            </Button>
            <Button type="submit" data-testid="button-submit-project">
              Generate Forecast
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
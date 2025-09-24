import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { FileUp, File, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  title: string
  description: string
  acceptedFormats: string[]
  maxSize?: string
}

interface UploadedFile {
  name: string
  size: number
  status: "uploading" | "complete" | "error"
  progress?: number
}

export function FileUploadCard({ title, description, acceptedFormats, maxSize = "10MB" }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return

    Array.from(files).forEach((file) => {
      const uploadFile: UploadedFile = {
        name: file.name,
        size: file.size,
        status: "uploading",
        progress: 0
      }

      setUploadedFiles(prev => [...prev, uploadFile])
      
      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += Math.random() * 30
        if (progress >= 100) {
          progress = 100
          clearInterval(interval)
          setUploadedFiles(prev => 
            prev.map(f => f.name === file.name ? { ...f, status: "complete", progress: 100 } : f)
          )
        } else {
          setUploadedFiles(prev => 
            prev.map(f => f.name === file.name ? { ...f, progress } : f)
          )
        }
      }, 200)
    })
    console.log(`Files uploaded: ${Array.from(files).map(f => f.name).join(", ")}`)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={cn(
            "border-2 border-dashed rounded-md p-6 text-center transition-colors",
            isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25",
            "hover:border-primary hover:bg-primary/5 cursor-pointer"
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById('file-input')?.click()}
          data-testid="file-drop-zone"
        >
          <FileUp className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Supported formats: {acceptedFormats.join(", ")}
          </p>
          <p className="text-xs text-muted-foreground">Maximum file size: {maxSize}</p>
          
          <input
            id="file-input"
            type="file"
            multiple
            className="hidden"
            accept={acceptedFormats.map(format => `.${format}`).join(",")}
            onChange={(e) => handleFileUpload(e.target.files)}
            data-testid="input-file"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {acceptedFormats.map((format) => (
            <Badge key={format} variant="secondary" className="text-xs">
              {format.toUpperCase()}
            </Badge>
          ))}
        </div>

        {uploadedFiles.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Uploaded Files</h4>
            {uploadedFiles.map((file, index) => (
              <div key={`${file.name}-${index}`} className="flex items-center space-x-3 p-3 rounded-md bg-muted/50">
                <File className="h-4 w-4 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium truncate">{file.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </span>
                      {file.status === "complete" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {file.status === "error" && <AlertCircle className="h-4 w-4 text-red-500" />}
                    </div>
                  </div>
                  {file.status === "uploading" && (
                    <Progress value={file.progress || 0} className="h-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => document.getElementById('file-input')?.click()}
          data-testid="button-browse-files"
        >
          <FileUp className="h-4 w-4 mr-2" />
          Browse Files
        </Button>
      </CardContent>
    </Card>
  )
}
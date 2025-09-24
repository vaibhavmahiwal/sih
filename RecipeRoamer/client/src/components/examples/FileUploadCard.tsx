import { FileUploadCard } from '../FileUploadCard'

export default function FileUploadCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <FileUploadCard 
        title="Historical Demand Data"
        description="Upload CSV or Excel files containing historical material demand and project data"
        acceptedFormats={["csv", "xlsx", "xls"]}
        maxSize="25MB"
      />
    </div>
  )
}
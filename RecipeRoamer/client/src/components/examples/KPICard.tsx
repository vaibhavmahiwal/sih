import { KPICard } from '../KPICard'
import { TrendingUp, DollarSign, Package, AlertTriangle } from 'lucide-react'

export default function KPICardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <KPICard 
        title="Total Projects"
        value={47}
        change={12.5}
        changeType="increase"
        icon={Package}
      />
      <KPICard 
        title="Material Cost"
        value="₹156.8"
        unit="Cr"
        change={-3.2}
        changeType="decrease"
        icon={DollarSign}
      />
      <KPICard 
        title="Forecast Accuracy"
        value={92.4}
        unit="%"
        change={5.1}
        changeType="increase"
        icon={TrendingUp}
      />
      <KPICard 
        title="Critical Alerts"
        value={3}
        change={-25}
        changeType="decrease"
        icon={AlertTriangle}
      />
    </div>
  )
}
import { BarChart } from './BarChart';
import { Calendar, DollarSign, Database, User, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import imgRectangle1011 from "figma:asset/dacc249e96ca961aedff617fe569b9fadb0aec36.png";
import imgRectangle1012 from "figma:asset/026e252d89778572d217f6f3004622792f4e9b3c.png";

export interface Model {
  id: string;
  title: string;
  description: string;
  trainDetails: string;
  revenue: string;
  addedBy: string;
  chartData: {
    month: string;
    value: number;
    highlight?: boolean;
  }[];
  maxValue: number;
  category?: string;
  status?: 'active' | 'in_diagnosis' | 'review' | 'disabled';
  version?: string;
  taskType?: 'Classification' | 'Detection' | 'Segmentation';
  errorRate?: number;
  errorsLast24h?: number;
  reviewProgress?: string; // For review models: e.g. "3 / 5 checks completed"
  lastUpdated?: string; // For review models: e.g. "2h ago"
  disabledDate?: string; // For disabled models: e.g. "01/15/2024"
  usage24h?: number; // For active/in_diagnosis models: number of diagnoses in last 24h
  avgDiagnosisTime?: number; // For active/in_diagnosis models: average diagnosis time in seconds
  openTickets?: number; // Open support tickets
  failedCases24h?: number; // Failed cases in last 24h
}

interface ModelCardProps {
  model: Model;
}

export function ModelCard({ model }: ModelCardProps) {
  const statusColors = {
    active: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
    in_diagnosis: 'bg-chart-5/10 text-chart-5 border-chart-5/20',
    review: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
    disabled: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  };

  const status = model.status || 'active';

  const getStatusLabel = (s: string) => {
    if (s === 'in_diagnosis') return 'In Diagnosis';
    if (s === 'review') return 'In Review';
    if (s === 'disabled') return 'Disabled';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border bg-secondary/30">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="text-lg font-semibold text-card-foreground leading-tight flex-1">
            {model.title}
          </h2>
          <span className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${statusColors[status]}`}>
            {getStatusLabel(status)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {model.description}
        </p>
      </div>

      {/* Medical Images */}
      <div className="p-4 bg-muted/20">
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-background">
            <img
              alt="Medical scan 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src={imgRectangle1011}
            />
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-background">
            <img
              alt="Medical scan 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src={imgRectangle1012}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col gap-5">
        {/* Train Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-card-foreground">
            <Database className="size-4 text-primary" />
            <h3 className="text-sm font-semibold">Training Data</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed pl-6">
            {model.trainDetails}
          </p>
        </div>

        {/* Revenue Section */}
        <div className="space-y-2 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-card-foreground">
            <TrendingUp className="size-4 text-primary" />
            <h3 className="text-sm font-semibold">Revenue Metrics</h3>
          </div>
          <div className="flex items-center gap-2 pl-6">
            <DollarSign className="size-3.5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {model.revenue}
            </p>
          </div>

          {/* Bar Chart */}
          <div className="flex-1 min-h-[200px]">
            <BarChart data={model.chartData} maxValue={model.maxValue} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-secondary/20 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <User className="size-3.5" />
          <p className="text-xs">
            {model.addedBy}
          </p>
        </div>
        <Link to={`/model/${model.id}`} className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
          View Details →
        </Link>
      </div>
    </div>
  );
}
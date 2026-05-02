interface BarChartProps {
  data: {
    month: string;
    value: number;
    highlight?: boolean;
  }[];
  maxValue: number;
}

export function BarChart({ data, maxValue }: BarChartProps) {
  return (
    <div className="relative h-48 w-full mt-4">
      {/* Y-axis label */}
      <div className="absolute -left-1 top-0 text-xs text-muted-foreground font-medium">
        ${(maxValue / 1000).toFixed(1)}k
      </div>

      {/* Grid lines */}
      <div className="absolute left-0 right-0 top-6 bottom-8 flex flex-col justify-between">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full h-px bg-border/50" />
        ))}
      </div>

      {/* Bars */}
      <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-between gap-3 px-1">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end justify-center group" style={{ height: '100%' }}>
                <div
                  className={`w-full rounded-t-md transition-all hover:opacity-80 ${
                    item.highlight 
                      ? 'bg-primary shadow-sm' 
                      : 'bg-muted dark:bg-muted/50'
                  }`}
                  style={{ height: `${Math.max(height, 2)}%` }}
                >
                  {item.highlight && (
                    <div className="w-full h-1 bg-primary/50 rounded-t-md" />
                  )}
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground font-medium">
                {item.month}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

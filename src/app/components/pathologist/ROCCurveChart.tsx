import { useMemo, useState } from 'react';

interface ROCCurveChartProps {
  auc: string;
}

export function ROCCurveChart({ auc }: ROCCurveChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<{ fpr: number; tpr: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Generate ROC curve data points
  const chartData = useMemo(() => {
    return [
      { fpr: 0, tpr: 0 },
      { fpr: 0.02, tpr: 0.50 },
      { fpr: 0.05, tpr: 0.75 },
      { fpr: 0.08, tpr: 0.85 },
      { fpr: 0.10, tpr: 0.88 },
      { fpr: 0.15, tpr: 0.92 },
      { fpr: 0.20, tpr: 0.94 },
      { fpr: 0.30, tpr: 0.96 },
      { fpr: 0.40, tpr: 0.97 },
      { fpr: 0.50, tpr: 0.98 },
      { fpr: 0.60, tpr: 0.985 },
      { fpr: 0.70, tpr: 0.99 },
      { fpr: 0.80, tpr: 0.995 },
      { fpr: 0.90, tpr: 0.998 },
      { fpr: 1.0, tpr: 1.0 },
    ];
  }, []);

  // Chart dimensions
  const width = 600;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  // Scale functions
  const scaleX = (value: number) => (value * chartWidth);
  const scaleY = (value: number) => chartHeight - (value * chartHeight);

  // Generate path for ROC curve
  const pathData = useMemo(() => {
    const points = chartData.map(d => `${scaleX(d.fpr)},${scaleY(d.tpr)}`);
    return `M ${points.join(' L ')}`;
  }, [chartData]);

  // Axis ticks
  const ticks = [0, 0.2, 0.4, 0.6, 0.8, 1.0];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left - margin.left;
    const y = e.clientY - rect.top - margin.top;

    // Find nearest data point
    if (x >= 0 && x <= chartWidth && y >= 0 && y <= chartHeight) {
      const fprValue = x / chartWidth;
      const nearestPoint = chartData.reduce((prev, curr) => {
        return Math.abs(curr.fpr - fprValue) < Math.abs(prev.fpr - fprValue) ? curr : prev;
      });
      
      setHoveredPoint(nearestPoint);
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <div className="bg-[rgba(0,0,0,0.02)] rounded-lg pt-6 px-6 pb-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-['Roboto'] font-semibold text-foreground" style={{ fontSize: '14px' }}>
          ROC Curve Analysis
        </h3>
        <div className="bg-[rgba(24,144,255,0.1)] border border-[rgba(24,144,255,0.2)] rounded px-2.5 py-1">
          <span className="font-['Roboto'] font-medium text-[rgba(0,0,0,0.45)]" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            AUC: <span className="text-primary font-semibold">{auc}</span>
          </span>
        </div>
      </div>

      <div className="bg-white border border-border rounded-lg p-4 relative">
        <svg 
          width="100%" 
          height={height} 
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ maxWidth: '100%' }}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {/* Grid lines */}
            {ticks.map((tick, i) => (
              <g key={`grid-${i}`}>
                {/* Vertical grid line */}
                <line
                  x1={scaleX(tick)}
                  y1={0}
                  x2={scaleX(tick)}
                  y2={chartHeight}
                  stroke="rgba(0,0,0,0.05)"
                  strokeWidth="1"
                />
                {/* Horizontal grid line */}
                <line
                  x1={0}
                  y1={scaleY(tick)}
                  x2={chartWidth}
                  y2={scaleY(tick)}
                  stroke="rgba(0,0,0,0.05)"
                  strokeWidth="1"
                />
              </g>
            ))}

            {/* Diagonal reference line (random classifier) */}
            <line
              x1={0}
              y1={chartHeight}
              x2={chartWidth}
              y2={0}
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* ROC Curve */}
            <path
              d={pathData}
              fill="none"
              stroke="#1890FF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* X-Axis */}
            <line
              x1={0}
              y1={chartHeight}
              x2={chartWidth}
              y2={chartHeight}
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1"
            />

            {/* Y-Axis */}
            <line
              x1={0}
              y1={0}
              x2={0}
              y2={chartHeight}
              stroke="rgba(0,0,0,0.2)"
              strokeWidth="1"
            />

            {/* X-Axis ticks and labels */}
            {ticks.map((tick, i) => (
              <g key={`x-tick-${i}`}>
                <line
                  x1={scaleX(tick)}
                  y1={chartHeight}
                  x2={scaleX(tick)}
                  y2={chartHeight + 5}
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="1"
                />
                <text
                  x={scaleX(tick)}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  fontSize="11"
                  fill="rgba(0,0,0,0.65)"
                  fontFamily="Roboto"
                >
                  {(tick * 100).toFixed(0)}%
                </text>
              </g>
            ))}

            {/* Y-Axis ticks and labels */}
            {ticks.map((tick, i) => (
              <g key={`y-tick-${i}`}>
                <line
                  x1={-5}
                  y1={scaleY(tick)}
                  x2={0}
                  y2={scaleY(tick)}
                  stroke="rgba(0,0,0,0.2)"
                  strokeWidth="1"
                />
                <text
                  x={-10}
                  y={scaleY(tick)}
                  textAnchor="end"
                  alignmentBaseline="middle"
                  fontSize="11"
                  fill="rgba(0,0,0,0.65)"
                  fontFamily="Roboto"
                >
                  {(tick * 100).toFixed(0)}%
                </text>
              </g>
            ))}

            {/* X-Axis label */}
            <text
              x={chartWidth / 2}
              y={chartHeight + 40}
              textAnchor="middle"
              fontSize="12"
              fill="rgba(0,0,0,0.45)"
              fontFamily="Roboto"
            >
              False Positive Rate
            </text>

            {/* Y-Axis label */}
            <text
              x={-chartHeight / 2}
              y={-45}
              textAnchor="middle"
              fontSize="12"
              fill="rgba(0,0,0,0.45)"
              fontFamily="Roboto"
              transform={`rotate(-90, -${chartHeight / 2}, -45)`}
            >
              True Positive Rate
            </text>
          </g>
        </svg>

        {/* Tooltip */}
        {hoveredPoint && (
          <div
            className="absolute bg-white border border-[#d9d9d9] rounded-lg px-3 py-2 pointer-events-none"
            style={{
              left: tooltipPos.x + 10,
              top: tooltipPos.y - 40,
              fontSize: '12px',
              fontFamily: 'Roboto',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              zIndex: 10
            }}
          >
            <div className="font-semibold mb-1">FPR: {(hoveredPoint.fpr * 100).toFixed(1)}%</div>
            <div>TPR: {(hoveredPoint.tpr * 100).toFixed(1)}%</div>
          </div>
        )}

        {/* Custom Legend */}
        <div className="flex items-center justify-center gap-6 mt-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-[#1890FF]"></div>
            <span className="font-['Roboto'] text-[12px] text-[rgba(0,0,0,0.65)]">Model ROC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-[rgba(0,0,0,0.15)]" style={{ borderTop: '1px dashed rgba(0,0,0,0.15)' }}></div>
            <span className="font-['Roboto'] text-[12px] text-[rgba(0,0,0,0.65)]">Random Classifier</span>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-white border border-border rounded-lg p-4">
        <p className="font-['Roboto'] text-[rgba(0,0,0,0.65)]" style={{ fontSize: '12px', lineHeight: '1.6' }}>
          <span className="font-semibold text-foreground">Clinical Interpretation:</span> The ROC curve demonstrates excellent discriminative ability with an AUC of {auc}. This means the model correctly distinguishes between malignant and benign cases {Math.round(parseFloat(auc) * 100)}% of the time, significantly better than random chance (50%, shown as the diagonal reference line).
        </p>
      </div>
    </div>
  );
}

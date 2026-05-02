interface MetricCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export function MetricCard({ label, value, className = '' }: MetricCardProps) {
  return (
    <div className={`p-4 bg-background/50 border border-border rounded-[8px] text-center ${className}`}>
      <p className="text-[12px] text-[#6F6F6F] uppercase tracking-wide mb-2">{label}</p>
      <p className="text-[24px] font-bold text-[#161616]">{value}</p>
    </div>
  );
}

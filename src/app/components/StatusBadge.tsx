interface StatusBadgeProps {
  status: 'active' | 'in_diagnosis' | 'review';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    active: {
      label: 'Active',
      className: 'bg-chart-2/10 text-[#237804] border-chart-2/20',
    },
    in_diagnosis: {
      label: 'In Diagnosis',
      className: 'bg-chart-5/10 text-chart-5 border-chart-5/20',
    },
    review: {
      label: 'In Review',
      className: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
    },
  };

  const config = statusConfig[status] || statusConfig.active;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-[4px] text-[12px] font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
}
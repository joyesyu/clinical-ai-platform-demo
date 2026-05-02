import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export function InfoCard({ title, description, icon: Icon, variant = 'default', className = '' }: InfoCardProps) {
  const variantStyles = {
    default: 'bg-background/50 border-border',
    success: 'bg-chart-2/5 border-chart-2/20',
    warning: 'bg-chart-4/5 border-chart-4/20',
    danger: 'bg-destructive/5 border-destructive/20',
    info: 'bg-chart-1/5 border-chart-1/20',
  };

  const iconColorStyles = {
    default: 'text-[#6F6F6F]',
    success: 'text-chart-2',
    warning: 'text-chart-4',
    danger: 'text-destructive',
    info: 'text-chart-1',
  };

  return (
    <div className={`p-4 border rounded-[8px] ${variantStyles[variant]} ${className}`}>
      <div className="flex items-start gap-3">
        {Icon && <Icon className={`size-5 shrink-0 ${iconColorStyles[variant]}`} />}
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-semibold text-[#161616] mb-2">{title}</p>
          <p className="text-[14px] text-[#525252] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

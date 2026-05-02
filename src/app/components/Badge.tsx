import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-secondary/50 text-secondary-foreground border-border',
    primary: 'bg-primary/10 text-primary border-primary/20',
    success: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
    warning: 'bg-chart-4/10 text-chart-4 border-chart-4/20',
    danger: 'bg-destructive/10 text-destructive border-destructive/20',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-[100px] text-[12px] font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

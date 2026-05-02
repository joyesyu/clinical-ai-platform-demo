import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({ title, description, action, className = '' }: SectionHeaderProps) {
  return (
    <div className={`px-6 py-5 border-b border-border bg-card/50 flex items-center justify-between ${className}`}>
      <div>
        <h2 className="text-[18px] font-semibold text-[#000000]">{title}</h2>
        {description && <p className="text-[12px] text-[#6F6F6F] mt-1">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

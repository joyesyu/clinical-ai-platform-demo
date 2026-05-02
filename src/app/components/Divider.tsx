interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ orientation = 'horizontal', className = '' }: DividerProps) {
  const orientationStyles = orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full';
  
  return <div className={`bg-border ${orientationStyles} ${className}`} />;
}

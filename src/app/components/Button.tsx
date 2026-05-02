import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  disabled = false,
  className = '',
  icon,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[8px] font-medium transition-all';
  
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-secondary/80 text-secondary-foreground hover:bg-secondary border border-border/50 disabled:opacity-50 disabled:cursor-not-allowed',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/20 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'bg-transparent text-foreground hover:bg-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-2 text-[12px]',
    md: 'px-4 py-3 text-[14px]',
    lg: 'px-6 py-4 text-[16px]',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} px-[20px] py-[10px] m-[0px]`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

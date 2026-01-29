import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg rounded-2xl p-6 transition-all ${className}`}
  >
    {children}
  </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-medium transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-teal text-white hover:bg-teal/90 shadow-md",
    secondary: "bg-lavender/50 text-teal hover:bg-lavender/70 border border-teal/10",
    danger: "bg-coral/20 text-coral hover:bg-coral/30 border border-coral/20",
    ghost: "bg-transparent text-teal hover:bg-black/5 dark:text-ecru dark:hover:bg-white/5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
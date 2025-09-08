import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'compact';
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'actions';
  align?: 'left' | 'center' | 'right' | 'between';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant = 'default',
    padding = 'md',
    interactive = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'rounded-lg transition-all duration-200',
      'bg-white border border-gray-200',
      'dark:bg-gray-800 dark:border-gray-700',
    ];

    const variantClasses = {
      default: [],
      outlined: [
        'border-2 border-gray-300',
        'dark:border-gray-600',
      ],
      elevated: [
        'shadow-lg border-0',
        'hover:shadow-xl',
      ],
      glass: [
        'backdrop-blur-sm bg-white/80 border border-white/20',
        'dark:bg-gray-800/80 dark:border-gray-700/20',
      ],
    };

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };

    const interactiveClasses = interactive ? [
      'cursor-pointer hover:shadow-md active:scale-[0.98]',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      'touch-manipulation select-none',
    ] : [];

    const combinedClasses = [
      ...baseClasses,
      ...(variantClasses[variant] || []),
      ...(paddingClasses[padding] || []),
      ...interactiveClasses,
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        className={combinedClasses}
        ref={ref}
        {...(interactive ? { tabIndex: 0 } : {})}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({
    className,
    variant = 'default',
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'flex flex-col space-y-1.5',
    ];

    const variantClasses = {
      default: 'pb-4',
      compact: 'pb-2',
    };

    const combinedClasses = [
      ...baseClasses,
      variantClasses[variant],
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={combinedClasses} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({
    className,
    spacing = 'md',
    children,
    ...props
  }, ref) => {
    const spacingClasses = {
      none: '',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
    };

    const combinedClasses = [
      'flex flex-col',
      spacingClasses[spacing],
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={combinedClasses} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({
    className,
    variant = 'default',
    align = 'left',
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'flex items-center pt-4',
    ];

    const alignClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
      between: 'justify-between',
    };

    const variantClasses = {
      default: 'gap-2',
      actions: 'gap-3',
    };

    const combinedClasses = [
      ...baseClasses,
      alignClasses[align],
      variantClasses[variant],
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={combinedClasses} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
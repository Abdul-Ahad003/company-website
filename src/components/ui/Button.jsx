import React from 'react';
import { cn } from '../../utils/cn';

export function Button({
    children,
    variant = 'primary',
    className,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg",
        secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
        ghost: "hover:bg-slate-100 text-slate-700"
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[props.size || 'md'], className)}
            {...props}
        >
            {children}
        </button>
    );
}

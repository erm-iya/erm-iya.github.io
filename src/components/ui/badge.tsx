import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "teal" | "emerald"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "border-transparent bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30",
    secondary: "border-transparent bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5",
    destructive: "border-transparent bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
    outline: "text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10",
    teal: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20",
    emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20",
  }[variant]

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles,
        className
      )}
      {...props}
    />
  )
}

export { Badge }

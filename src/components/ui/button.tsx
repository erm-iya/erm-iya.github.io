import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "serene"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const variantStyles = {
      default: "bg-teal-600 text-white hover:bg-teal-500 shadow-md shadow-teal-900/30 active:scale-[0.98]",
      serene: "bg-teal-500/10 text-teal-300 border border-teal-500/20 hover:bg-teal-500/20 hover:border-teal-500/40 hover:text-teal-200 transition-all",
      destructive: "bg-red-600 text-white hover:bg-red-500",
      outline: "border border-white/10 bg-transparent hover:bg-white/5 hover:text-teal-300 text-slate-300",
      secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700",
      ghost: "hover:bg-white/5 hover:text-teal-300 text-slate-400",
      link: "text-teal-400 underline-offset-4 hover:underline",
    }[variant]

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-xl px-7 text-base font-semibold",
      icon: "h-9 w-9",
    }[size]

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantStyles,
          sizeStyles,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

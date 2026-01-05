import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
        destructive:
          "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
        outline:
          "border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:text-white text-[var(--color-muted)] shadow-inner",
        secondary:
          "bg-[var(--color-surface-elevated)] text-[var(--color-foreground)] border border-white/5 hover:bg-[var(--color-surface-elevated)]/80 hover:border-white/10",
        ghost:
          "hover:bg-white/5 hover:text-white text-[var(--color-muted)]",
        link: "text-[var(--accent-primary)] underline-offset-4 hover:underline",
        premium: "relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_15px_-3px_rgba(255,255,255,0.1)]",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

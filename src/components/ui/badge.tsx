import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: 
          "border border-border text-foreground",
        success:
          "border-transparent bg-success text-success-foreground",
        warning:
          "border-transparent bg-warning text-warning-foreground",
        accent:
          "border-transparent bg-accent text-accent-foreground",
        glass:
          "bg-[hsl(222_47%_14%/0.8)] backdrop-blur-xl border border-[hsl(217_33%_25%/0.5)] text-foreground",
        glow:
          "border-transparent bg-primary text-primary-foreground shadow-[0_0_20px_hsl(25_95%_53%/0.3)] animate-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

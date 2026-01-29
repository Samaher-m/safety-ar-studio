import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[0_0_40px_hsl(25_95%_53%/0.3)] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "hover:bg-muted hover:text-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-to-r from-primary to-[hsl(35_95%_55%)] text-primary-foreground font-bold shadow-lg hover:shadow-[0_0_40px_hsl(25_95%_53%/0.3)] hover:brightness-110 active:scale-[0.98]",
        heroOutline:
          "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-[0_0_30px_hsl(185_80%_50%/0.3)]",
        glass:
          "bg-[hsl(222_47%_14%/0.8)] backdrop-blur-xl border border-[hsl(217_33%_25%/0.5)] text-foreground hover:bg-muted/80",
        success:
          "bg-success text-success-foreground hover:brightness-110",
        warning:
          "bg-warning text-warning-foreground hover:brightness-110",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

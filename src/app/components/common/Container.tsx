/**
 * Container component for consistent width constraints and padding.
 * 
 * This component provides the foundational layout constraint used throughout
 * the WordPress block theme. It ensures consistent max-width and horizontal
 * padding across all pages and patterns.
 * 
 * @module Container
 * @category common
 */

import { cn } from "../../lib/utils";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "nav";
  /** Optional max-width variant */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "narrow" | "wide";
}

/**
 * Container component for width constraints and padding.
 */
export function Container({ 
  children, 
  className, 
  as: Component = "div",
  maxWidth = "xl" 
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-[1440px]",
    "2xl": "max-w-screen-2xl",
    full: "max-w-none",
    narrow: "max-w-[768px]",
    wide: "max-w-[1600px]",
  };

  return (
    <Component 
      className={cn("mx-auto w-full p-[0px]", maxWidthClasses[maxWidth as keyof typeof maxWidthClasses] || maxWidthClasses.xl, className)}
    >
      {children}
    </Component>
  );
}

export default Container;

/**
 * Mobile Menu Toggle Component
 * 
 * Simple hamburger/close button for mobile menu toggle.
 * Designed to be placed in the header actions area.
 * 
 * @module MobileMenuToggle
 * @category common
 */

import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

interface MobileMenuToggleProps {
  /** Whether the menu is currently open */
  isOpen: boolean;
  /** Callback when toggle is clicked */
  onToggle: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Mobile Menu Toggle Button.
 * 
 * Renders a hamburger (☰) icon when closed, X icon when open.
 * 
 * **Design System:**
 * - Colors: Semantic tokens (`bg-muted`, `text-foreground`)
 * - Typography: Noto Sans (inherited)
 * - Spacing: Tailwind scale (`p-2`)
 * - No hardcoded values
 * 
 * @component
 * @category common
 * 
 * @param {MobileMenuToggleProps} props - Component properties
 * @returns {JSX.Element} Toggle button element
 */
export function MobileMenuToggle({ isOpen, onToggle, className }: MobileMenuToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      className={cn(
        "mobile-menu-toggle",
        "p-2 rounded-md",
        "bg-muted",
        "hover:bg-muted/80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "transition-colors",
        className
      )}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
}

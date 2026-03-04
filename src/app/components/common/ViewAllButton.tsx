/**
 * Reusable "View All" button component.
 *
 * This component provides a consistent "View All" call-to-action button,
 * typically used at the bottom of featured sections to link to archive pages.
 *
 * **WordPress CSS:**
 * Uses BEM classes for consistent styling:
 * - .wp-view-all (wrapper)
 * - .wp-view-all__button (the actual button)
 *
 * @module ViewAllButton
 * @category components/common
 */

import { Button } from "../blocks/design/Button";
import { ArrowRight } from "lucide-react";

/**
 * Props for the ViewAllButton component.
 */
interface ViewAllButtonProps {
  /** The text label for the button. */
  label: string;
  /** Optional URL for the link. */
  href?: string;
  /** Callback for when the button is clicked. */
  onClick?: () => void;
  /**
   * The visual variant of the button.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /**
   * Additional CSS classes for the wrapper.
   */
  className?: string;
}

/**
 * ViewAllButton Component.
 *
 * @param {ViewAllButtonProps} props - Component properties.
 * @returns {JSX.Element} The rendered View All button.
 */
export function ViewAllButton({
  label,
  onClick,
  variant = "primary",
  className = "",
}: ViewAllButtonProps) {
  return (
    <div className={`wp-view-all ${className}`}>
      <Button
        variant={variant}
        size="default"
        onClick={onClick}
        icon={<ArrowRight className="wp-view-all__icon" />}
        iconPosition="right"
        className="wp-view-all__button"
      >
        {label}
      </Button>
    </div>
  );
}

export default ViewAllButton;
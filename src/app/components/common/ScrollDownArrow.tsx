/**
 * Scroll Down Arrow component.
 * 
 * Provides a visual indicator that encourages users to scroll down to
 * discover more content. Typically used in hero sections or full-height
 * landing sections to improve discoverability.
 * 
 * **Behavior:**
 * - Bouncing animation (Tailwind's animate-bounce)
 * - Scrolls to specific element if targetId provided
 * - Otherwise scrolls down one viewport height
 * - Animation stops on hover
 * - Smooth scroll behavior
 * 
 * **Accessibility:**
 * - Keyboard accessible button
 * - Descriptive ARIA label
 * - Focus visible ring indicator
 * - Semantic button element
 * 
 * @module ScrollDownArrow
 * @category common
 * @see /guidelines/components/ScrollDownArrow.md
 */

import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Props for the ScrollDownArrow component.
 * 
 * @interface ScrollDownArrowProps
 */
interface ScrollDownArrowProps {
  /**
   * Optional ID of target element to scroll to.
   * If not provided, scrolls down one viewport height.
   * 
   * @example "content-section"
   */
  targetId?: string;
  
  /**
   * Optional ARIA label for accessibility.
   * Describes the scroll action to screen reader users.
   * 
   * @default "Scroll to explore"
   * 
   * @example "Scroll down to view tours"
   */
  label?: string;
  
  /**
   * Optional additional CSS classes to apply.
   */
  className?: string;
}

/**
 * Scroll Down Arrow component.
 * 
 * An interactive visual indicator that helps users discover content below
 * the fold. Particularly useful on hero sections and full-height landing
 * pages where content isn't immediately visible.
 * 
 * **Usage Guidelines:**
 * - Use on full-height hero sections
 * - Position at bottom center of section
 * - Only use when content exists below
 * - Remove on mobile if space-constrained
 * - One per section maximum
 * 
 * **WordPress Mapping:**
 * 
 * Not directly equivalent to WordPress block. This is a UX enhancement
 * component that would be added via theme JavaScript or custom block.
 * 
 * **Animation:**
 * - Default: Bouncing animation (Tailwind animate-bounce)
 * - Hover: Animation stops
 * - Click: Smooth scroll to target
 * 
 * **Positioning:**
 * - Absolute positioning (requires relative parent)
 * - Bottom: 24px (mobile), 16px (desktop)
 * - Horizontal center (left-1/2 + -translate-x-1/2)
 * - Z-index: 10
 * 
 * @component
 * @category common
 * 
 * @param {ScrollDownArrowProps} props - Component properties
 * @returns {JSX.Element} Rendered scroll down button
 * 
 * @example
 * // Basic usage (scrolls down one viewport)
 * <section className="relative h-screen">
 *   <Hero title="Welcome" />
 *   <ScrollDownArrow />
 * </section>
 * 
 * @example
 * // Scroll to specific element
 * <section className="relative h-screen">
 *   <Hero title="Welcome" />
 *   <ScrollDownArrow targetId="tours-section" label="Scroll to view tours" />
 * </section>
 * 
 * @example
 * // Custom styling
 * <ScrollDownArrow 
 *   targetId="content" 
 *   className="text-white sm:bottom-8" 
 * />
 */
export function ScrollDownArrow({ 
  targetId, 
  label = "Scroll to explore",
  className 
}: ScrollDownArrowProps) {
  /**
   * Handles scroll arrow click.
   * 
   * If targetId is provided, scrolls to that element.
   * Otherwise, scrolls down one viewport height.
   * Both use smooth scrolling behavior.
   */
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "absolute bottom-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center animate-bounce text-primary-foreground transition-colors hover:animate-none hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-4",
        className
      )}
      aria-label={label}
    >
      <ChevronDown className="h-8 w-8" />
    </button>
  );
}

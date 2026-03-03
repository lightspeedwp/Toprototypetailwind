/**
 * Breadcrumbs Pattern - WordPress BEM CSS Version
 * 
 * Hierarchical navigation trail showing current page location.
 * 
 * **Features:**
 * - Hierarchical navigation trail
 * - Home icon optional
 * - Multiple separator styles (chevron, slash, arrow)
 * - Current page indication
 * - Responsive wrapping
 * - Accessible ARIA labels
 * 
 * **WordPress Mapping:**
 * 
 * Equivalent to breadcrumb blocks / Yoast SEO breadcrumbs.
 * Maps to:
 * - Breadcrumb navigation block
 * - Schema.org breadcrumb markup
 * 
 * **Design System:**
 * - Typography: Noto Sans via CSS
 * - Colors: Muted foreground for links, primary on hover
 * - Spacing: Consistent gaps between items
 * 
 * **CSS:**
 * Styles defined in /src/styles/patterns/breadcrumbs.css
 * Uses WordPress BEM methodology: .wp-pattern-breadcrumbs__*
 * 
 * **Accessibility:**
 * - Semantic nav element with aria-label
 * - Ordered list structure
 * - aria-current for current page
 * - Hidden separator icons
 * 
 * @module BreadcrumbsPattern
 * @category patterns
 */

import { Container } from "../common/Container";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Individual breadcrumb item.
 */
export interface BreadcrumbItem {
  /** Display label */
  label: string;
  
  /** Link URL or page ID */
  href?: string;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Is current page */
  isCurrent?: boolean;
}

/**
 * Breadcrumbs pattern props.
 */
export interface BreadcrumbsPatternProps {
  /** Breadcrumb trail items */
  items: BreadcrumbItem[];
  
  /** Show home icon */
  showHomeIcon?: boolean;
  
  /** Separator between items */
  separator?: 'chevron' | 'slash' | 'arrow';
  
  /** Optional custom classes */
  className?: string;
}

/**
 * Breadcrumbs Pattern Component
 * 
 * @example
 * <BreadcrumbsPattern
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Tours", href: "/tours" },
 *     { label: "Safari Adventures", isCurrent: true }
 *   ]}
 *   showHomeIcon
 * />
 */
export function BreadcrumbsPattern({
  items,
  showHomeIcon = true,
  separator = 'chevron',
  className,
}: BreadcrumbsPatternProps) {
  const renderSeparator = () => {
    if (separator === 'chevron') {
      return <ChevronRight className="wp-pattern-breadcrumbs__separator-icon" aria-hidden="true" />;
    }
    if (separator === 'slash') {
      return <span className="wp-pattern-breadcrumbs__separator" aria-hidden="true">/</span>;
    }
    return <span className="wp-pattern-breadcrumbs__separator" aria-hidden="true">→</span>;
  };

  return (
    <nav 
      aria-label="Breadcrumb"
      className={cn("wp-pattern-breadcrumbs", className)}
    >
      <Container>
        <ol className="wp-pattern-breadcrumbs__list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isCurrent = item.isCurrent || isLast;

            return (
              <li key={index} className="wp-pattern-breadcrumbs__item">
                {/* Breadcrumb link */}
                {!isCurrent && item.href ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className="wp-pattern-breadcrumbs__link"
                  >
                    {index === 0 && showHomeIcon && (
                      <span className="wp-pattern-breadcrumbs__home">
                        <Home className="wp-pattern-breadcrumbs__home-icon" aria-hidden="true" />
                        <span>{item.label}</span>
                      </span>
                    )}
                    {(index !== 0 || !showHomeIcon) && item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "wp-pattern-breadcrumbs__current",
                      isCurrent && "wp-pattern-breadcrumbs__current--active"
                    )}
                  >
                    {index === 0 && showHomeIcon && (
                      <span className="wp-pattern-breadcrumbs__home">
                        <Home className="wp-pattern-breadcrumbs__home-icon" aria-hidden="true" />
                        <span>{item.label}</span>
                      </span>
                    )}
                    {(index !== 0 || !showHomeIcon) && item.label}
                  </span>
                )}

                {/* Separator */}
                {!isLast && renderSeparator()}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}

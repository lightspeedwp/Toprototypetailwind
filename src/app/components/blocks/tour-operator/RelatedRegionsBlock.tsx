/**
 * Related Regions Block
 * 
 * Displays regions (child destinations) related to the current destination.
 * Helps users explore sub-regions or nearby areas.
 * 
 * **WordPress Mapping:**
 * Block slug: lsx-tour-operator/related-regions
 * Category: Tour Operator
 * 
 * **Design System:**
 * - Uses CSS variables from theme.css
 * - Lora for headings, Noto Sans for body text
 * - section-content-supporting style class
 * 
 * @module RelatedRegionsBlock
 * @category blocks/tour-operator
 * @see /guidelines/blocks/related-regions.md
 */

import { MapPin } from "lucide-react";
import { Container } from "../../common/Container";
import { DESTINATIONS } from "../../../data/mock";
import type { Destination } from "../../../data/types";

/**
 * Props for the RelatedRegionsBlock component
 */
interface RelatedRegionsBlockProps {
  /** Heading text */
  title?: string;
  /** The ID of the parent region to query */
  parentId: string;
  /** Layout type (list or grid) */
  layout?: "list" | "grid";
  /** Number of columns if using grid layout */
  columns?: number;
  /** Additional CSS classes */
  className?: string;
  /** Navigation callback for region clicks */
  onNavigate?: (slug: string) => void;
}

/**
 * Get child regions for a parent destination
 */
function getChildRegions(parentId: string): Destination[] {
  return DESTINATIONS.filter(dest => dest.parentId === parentId);
}

/**
 * Region List Item Component
 */
function RegionListItem({
  region,
  onClick,
}: {
  region: Destination;
  onClick?: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex items-center gap-3 w-full p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
      >
        <div className="wp-icon-container-primary wp-bg-primary-hover rounded-full transition-colors">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-base group-hover:text-primary transition-colors">
            {region.name}
          </h3>
          {region.tagline && (
            <p className="text-sm text-muted-foreground line-clamp-1">
              {region.tagline}
            </p>
          )}
        </div>
        <svg
          className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </li>
  );
}

/**
 * Region Grid Item Component
 */
function RegionGridItem({
  region,
  onClick,
}: {
  region: Destination;
  onClick?: () => void;
}) {
  return (
    <article>
      <button
        onClick={onClick}
        className="w-full h-full bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all group text-left"
      >
        <div className="flex items-start gap-4">
          <div className="wp-icon-container-primary-hover">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 group-hover:text-primary transition-colors">
              {region.name}
            </h3>
            {region.tagline && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {region.tagline}
              </p>
            )}
          </div>
        </div>
      </button>
    </article>
  );
}

/**
 * Related Regions Block Component
 * 
 * Displays child regions of a parent destination.
 * 
 * @param {RelatedRegionsBlockProps} props - Component properties
 * @returns {JSX.Element} Rendered related regions block
 * 
 * @example
 * <RelatedRegionsBlock
 *   parentId="dest-1"
 *   layout="grid"
 *   columns={3}
 *   onNavigate={(slug) => console.log(slug)}
 * />
 */
export function RelatedRegionsBlock({
  title = "Explore Nearby Regions",
  parentId,
  layout = "grid",
  columns = 3,
  className = "",
  onNavigate,
}: RelatedRegionsBlockProps) {
  const regions = getChildRegions(parentId);

  // Don't render if no child regions
  if (regions.length === 0) {
    return null;
  }

  return (
    <section className={`section-content-supporting ${className}`}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2>{title}</h2>
          <div className="mt-4 w-20 h-0.5 bg-border mx-auto" />
          <p className="mt-4 text-muted-foreground">
            {regions.length} {regions.length === 1 ? "region" : "regions"} to explore
          </p>
        </div>

        {/* Regions List/Grid */}
        {layout === "list" ? (
          <ul className="space-y-4 max-w-3xl mx-auto">
            {regions.map((region) => (
              <RegionListItem
                key={region.id}
                region={region}
                onClick={() => onNavigate?.(region.slug)}
              />
            ))}
          </ul>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${Math.min(columns, 4)}, minmax(0, 1fr))`,
            }}
          >
            {regions.map((region) => (
              <RegionGridItem
                key={region.id}
                region={region}
                onClick={() => onNavigate?.(region.slug)}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

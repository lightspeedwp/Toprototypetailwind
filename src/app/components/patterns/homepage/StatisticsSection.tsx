/**
 * Statistics section for the homepage.
 *
 * This section displays key performance metrics and stats.
 *
 * **WordPress CSS:**
 * Uses BEM classes for consistent styling:
 * - .wp-template-home__statistics
 *
 * @module StatisticsSection
 * @category components/patterns/homepage
 */

import { Container } from "../../common/Container";
import { StatisticsMetricsPattern } from "../StatisticsMetricsPattern";
import type { LucideIcon } from "lucide-react";

/**
 * Interface for a single statistic.
 */
interface Statistic {
  value: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}

/**
 * Props for the StatisticsSection component.
 */
interface StatisticsSectionProps {
  /** Array of statistic objects to display. */
  statistics: Statistic[];
  /** Section header data (title, description). */
  section: {
    title: string;
    description: string;
  };
}

/**
 * StatisticsSection Component.
 */
export function StatisticsSection({ statistics, section }: StatisticsSectionProps) {
  return (
    <section className="wp-template-home__statistics">
      <StatisticsMetricsPattern
        title={section.title}
        description={section.description}
        statistics={statistics}
        columns={4}
        className="border-none! bg-transparent!" // Use the internal pattern styling but clear section-specific borders if needed
      />
    </section>
  );
}

export default StatisticsSection;

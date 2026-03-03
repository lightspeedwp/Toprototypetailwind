/**
 * Why Choose Us section for the homepage.
 *
 * This section highlights the key benefits of booking with the tour operator.
 *
 * **WordPress CSS:**
 * Uses BEM classes for consistent styling:
 * - .wp-template-home__features
 *
 * @module WhyChooseUsSection
 * @category components/patterns/homepage
 */

import { Container } from "../../common/Container";
import { WhyChooseUsPattern } from "../WhyChooseUsPattern";
import type { LucideIcon } from "lucide-react";

/**
 * Interface for a single feature.
 */
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Props for the WhyChooseUsSection component.
 */
interface WhyChooseUsSectionProps {
  /** Array of feature objects to display. */
  features: Feature[];
  /** Section header data (title, description). */
  section: {
    title: string;
    description: string;
  };
}

/**
 * WhyChooseUsSection Component.
 */
export function WhyChooseUsSection({ features, section }: WhyChooseUsSectionProps) {
  return (
    <section className="wp-template-home__features bg-muted/20 border-y border-border/50">
      <Container>
        <WhyChooseUsPattern
          title={section.title}
          description={section.description}
          features={features}
          columns={3}
          className="py-0!" // Override internal padding since we have section padding
        />
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;

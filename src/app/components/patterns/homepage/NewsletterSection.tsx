/**
 * Newsletter section for the homepage.
 *
 * This section provides a signup form for the company newsletter.
 *
 * **WordPress CSS:**
 * Uses BEM classes for consistent styling:
 * - .wp-template-home__newsletter
 *
 * @module NewsletterSection
 * @category components/patterns/homepage
 */

import { Container } from "../../common/Container";
import { NewsletterSignupPattern } from "../NewsletterSignupPattern";

/**
 * Props for the NewsletterSection component.
 */
interface NewsletterSectionProps {
  /** Newsletter section header data (title, description). */
  newsletter: {
    title: string;
    description: string;
  };
  /** Callback for form submission. */
  onSubmit: (email: string) => Promise<boolean>;
}

/**
 * NewsletterSection Component.
 */
export function NewsletterSection({ newsletter, onSubmit }: NewsletterSectionProps) {
  return (
    <section className="wp-template-home__newsletter py-section-md bg-primary/5">
      <Container>
        <NewsletterSignupPattern
          title={newsletter.title}
          description={newsletter.description}
          variant="default"
          onSubmit={onSubmit}
        />
      </Container>
    </section>
  );
}

export default NewsletterSection;

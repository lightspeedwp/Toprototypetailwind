/**
 * FAQ Page Component.
 */

import { Hero } from "../components/patterns/Hero";
import { CTA } from "../components/patterns/CTA";
import { FAQ } from "../components/patterns/FAQ";
import { TableOfContentsPattern } from "../components/patterns/TableOfContentsPattern";
import { SearchFilterPattern } from "../components/patterns/SearchFilterPattern";
import { EmptyStatePattern } from "../components/patterns/EmptyStatePattern";
import { BreadcrumbsPattern } from "../components/patterns/BreadcrumbsPattern";
import { Container } from "../components/common/Container";
import { useState, useMemo } from "react";
import { 
  FAQ_GENERAL, 
  FAQ_TOUR_SPECIFIC, 
  FAQ_DESTINATION, 
  FAQ_ACCOMMODATION,
  FAQ_BOOKING,
  FAQ_TRAVEL_LOGISTICS,
  getHeroContent
} from "../data/mock";
import { useNavigation } from "../contexts/NavigationContext";

export function FAQPage() {
  const { navigateTo } = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const heroData = getHeroContent("faq");

  const categories = useMemo(() => [
    { id: "general", title: "General Enquiries", items: FAQ_GENERAL },
    { id: "tours", title: "Safari Activities", items: FAQ_TOUR_SPECIFIC },
    { id: "destinations", title: "Destinations", items: FAQ_DESTINATION },
    { id: "accommodation", title: "Lodges & Camps", items: FAQ_ACCOMMODATION },
    { id: "booking", title: "Booking & Payments", items: FAQ_BOOKING },
    { id: "logistics", title: "Travel Logistics", items: FAQ_TRAVEL_LOGISTICS },
  ], []);

  const filteredSections = useMemo(() => {
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const matchesSearch = !searchQuery || 
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCategory = !selectedCategory || cat.id === selectedCategory;
          return matchesSearch && matchesCategory;
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, searchQuery, selectedCategory]);

  return (
    <article className="wp-template-page">
      <BreadcrumbsPattern
        items={[
          { label: "Home", href: "/", onClick: () => navigateTo("/") },
          { label: "FAQs", isCurrent: true }
        ]}
        fullWidth={true}
      />

      <Hero
        title={heroData?.title || "How Can We Help?"}
        intro={heroData?.description || "Find expert answers to common questions about planning your safari."}
        image={heroData?.image || "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200"}
        height="small"
        overlay="medium"
        primaryCTA={{
          label: "Contact Support",
          onClick: () => navigateTo("/contact")
        }}
        secondaryCTA={{
          label: "Trip Planner",
          onClick: () => navigateTo("/trip-planner"),
          variant: "outline"
        }}
      />

      <TableOfContentsPattern
        title="Browse by Category"
        sections={categories.map(c => ({ id: c.id, label: c.title }))}
        variant="minimal"
        className="pb-0"
      />

      <SearchFilterPattern
        filters={[
          {
            id: "search",
            type: "search",
            label: "Search Questions",
            placeholder: "Keywords (e.g. visa, weather, booking)...",
            value: searchQuery
          },
          {
            id: "category",
            label: "Filter by Category",
            type: "select",
            placeholder: "All Categories",
            value: selectedCategory,
            options: categories.map(c => ({ value: c.id, label: c.title }))
          }
        ]}
        onFilterChange={(f) => {
          setSearchQuery(f.search || "");
          setSelectedCategory(f.category || "");
        }}
        onClearAll={() => {
          setSearchQuery("");
          setSelectedCategory("");
        }}
        activeFiltersCount={(searchQuery ? 1 : 0) + (selectedCategory ? 1 : 0)}
        collapsible={true}
      />

      <section className="wp-template-page__content">
        <Container>
          {filteredSections.length > 0 ? (
            filteredSections.map((sec) => (
              <div key={sec.id} id={sec.id} className="scroll-mt-32 mb-16 last:mb-0">
                <FAQ 
                  items={sec.items} 
                  title={sec.title}
                  className="bg-transparent! border-none!"
                />
              </div>
            ))
          ) : (
            <EmptyStatePattern
              icon="search"
              title="No Results Found"
              message="We couldn't find any questions matching your criteria. Try different keywords or contact us directly."
              primaryAction={{
                label: "Clear Filters",
                onClick: () => { setSearchQuery(""); setSelectedCategory(""); }
              }}
            />
          )}
        </Container>
      </section>

      <CTA
        title="Expert Advice is Just a Call Away"
        description="Our safari specialists are available to answer any unique questions you may have about your upcoming trip."
        variant="gradient"
        primaryAction={{ 
          label: "Contact a Specialist", 
          onClick: () => navigateTo("/contact")
        }}
        secondaryAction={{ 
          label: "Start Trip Planner", 
          onClick: () => navigateTo("/trip-planner")
        }}
      />
    </article>
  );
}

export default FAQPage;

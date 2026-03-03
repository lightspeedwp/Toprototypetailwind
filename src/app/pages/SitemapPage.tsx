/**
 * Sitemap Page — visual index of all routes in the prototype.
 */

import { Link } from "react-router";
import { Container } from "../components/common/Container";
import { BreadcrumbsPattern } from "../components/patterns/BreadcrumbsPattern";
import { Hero } from "../components/patterns/Hero";
import { HeadingBlock } from "../components/blocks/core/HeadingBlock";
import { ParagraphBlock } from "../components/blocks/core/ParagraphBlock";
import {
  Compass,
  Hotel,
  Users,
  BookOpen,
  FileText,
  ChevronRight,
  MapPin,
  Sparkles
} from "lucide-react";
import { useNavigation } from "../contexts/NavigationContext";
import { cn } from "../lib/utils";

interface SitemapLink {
  label: string;
  href: string;
  children?: SitemapLink[];
}

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  links: SitemapLink[];
}

const SITEMAP_SECTIONS: SitemapSection[] = [
  {
    title: "Safari & Adventures",
    icon: Compass,
    links: [
      {
        label: "Tour Collection",
        href: "/tours",
        children: [
          { label: "Wildlife Safaris", href: "/tours" },
          { label: "Cultural Journeys", href: "/tours" },
          { label: "Adventure Expeditions", href: "/tours" },
        ],
      },
      {
        label: "Our Destinations",
        href: "/destinations",
        children: [
          { label: "East Africa", href: "/destinations" },
          { label: "Southern Africa", href: "/destinations" },
          { label: "Island Escapes", href: "/destinations" },
        ],
      },
    ],
  },
  {
    title: "Lodges & Stays",
    icon: Hotel,
    links: [
      {
        label: "Accommodation Portfolio",
        href: "/accommodation",
        children: [
          { label: "Luxury Tented Camps", href: "/accommodation" },
          { label: "Boutique Lodges", href: "/accommodation" },
          { label: "Private Villas", href: "/accommodation" },
        ],
      },
    ],
  },
  {
    title: "Resources & Media",
    icon: BookOpen,
    links: [
      {
        label: "Expert Blog",
        href: "/blog",
        children: [
          { label: "Travel Tips", href: "/blog" },
          { label: "Photography Guides", href: "/blog" },
        ],
      },
      { label: "Traveler Reviews", href: "/reviews" },
      { label: "Special Offers", href: "/specials" },
    ],
  },
  {
    title: "Company",
    icon: Users,
    links: [
      { label: "Meet the Team", href: "/team" },
      { label: "Our Story", href: "/about" },
      { label: "Why Book With Us", href: "/why-book-with-us" },
      { label: "Contact Us", href: "/contact" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
  },
  {
    title: "Legal & Support",
    icon: FileText,
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Trip Planner Tool", href: "/trip-planner" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export function SitemapPage() {
  const { navigateTo } = useNavigation();

  return (
    <article className="wp-template-page">
      <Container className="py-4">
        <BreadcrumbsPattern
          items={[
            { label: "Home", href: "/", onClick: () => navigateTo("/") },
            { label: "Sitemap", isCurrent: true }
          ]}
        />
      </Container>

      <Hero
        title="Explore the Territory"
        intro="A complete structural map of our African safari collection and expert travel resources."
        height="small"
        overlay="medium"
        image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200"
      />

      <section className="py-section-lg bg-card">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {SITEMAP_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="wp-sitemap__section space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b-2 border-primary/10">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <HeadingBlock level={3} className="mb-0 text-2xl">{section.title}</HeadingBlock>
                  </div>
                  
                  <ul className="space-y-8 list-none p-0 m-0">
                    {section.links.map((link) => (
                      <li key={link.href} className="m-0 group">
                        <Link 
                          to={link.href}
                          className="flex items-center text-lg font-bold text-foreground hover:text-primary transition-all duration-300 no-underline"
                        >
                          <ChevronRight className="size-4 mr-3 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          <span className="font-serif">{link.label}</span>
                        </Link>
                        
                        {link.children && (
                          <ul className="mt-4 ml-7 space-y-3 border-l-2 border-border/50 pl-6 list-none">
                            {link.children.map((child) => (
                              <li key={child.label} className="m-0">
                                <Link 
                                  to={child.href}
                                  className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors no-underline block"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Discovery Prompt */}
      <section className="py-section-lg bg-muted/30 border-y border-border/50">
        <Container maxWidth="narrow">
          <div className="text-center space-y-6">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Sparkles className="size-8 text-primary" />
            </div>
            <HeadingBlock level={2}>Can't find what you're looking for?</HeadingBlock>
            <ParagraphBlock className="text-muted-foreground text-lg">
              Our safari designers are masters of the continent. If you have a specific request 
              or can't find a destination, reach out and we'll map it for you.
            </ParagraphBlock>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 font-bold text-primary hover:underline underline-offset-8"
              >
                Connect with a Specialist <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}

export default SitemapPage;

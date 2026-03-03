/**
 * Centralized Hero Content data.
 * 
 * Each page template pulls its hero section data from this collection
 * instead of hardcoding text in the component. This mirrors how WordPress
 * would store hero content in block patterns or custom fields.
 * 
 * @module content-heroes
 * @category data/content
 */

import type { HeroContent } from "../types";

/**
 * Hero section data for all page templates.
 */
export const HERO_CONTENT: HeroContent[] = [
  {
    id: "hero-home",
    context: "home",
    title: "Discover your next adventure",
    description: "Unforgettable tours across the world's most breathtaking destinations. From rugged mountains to pristine coastlines, we craft journeys that inspire.",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Explore tours",
    primaryCTAHref: "/tours",
    secondaryCTALabel: "View destinations",
    secondaryCTAHref: "/destinations",
    height: "large",
    overlay: "medium",
  },
  {
    id: "hero-tours",
    context: "tours-archive",
    title: "Extraordinary African safaris",
    description: "From the Serengeti plains to Cape Town's coastline, discover handcrafted safari experiences led by expert guides who know Africa inside out.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Browse all tours",
    primaryCTAHref: "/tours",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-destinations",
    context: "destinations-archive",
    title: "Explore Africa's finest destinations",
    description: "From sun-drenched savannas to lush river deltas, each destination offers unique wildlife encounters, cultures, and landscapes waiting to be explored.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "View destinations",
    primaryCTAHref: "/destinations",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-accommodation",
    context: "accommodation-archive",
    title: "Exceptional safari lodges & camps",
    description: "Stay in handpicked lodges, luxury tented camps, and boutique hotels that make your African safari an unforgettable experience.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Explore accommodation",
    primaryCTAHref: "/accommodation",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-blog",
    context: "blog-archive",
    title: "Safari stories & travel inspiration",
    description: "Expert insights, destination guides, and traveler stories from across Africa. Get inspired for your next safari adventure.",
    image: "https://images.unsplash.com/photo-1504600770771-fb03a7f5fe19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Read latest posts",
    primaryCTAHref: "/blog",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-team",
    context: "team-archive",
    title: "Meet our safari specialists",
    description: "Passionate travel experts with decades of combined African experience. Our team lives and breathes safari, ensuring every trip exceeds expectations.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Meet the team",
    primaryCTAHref: "/team",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-specials",
    context: "specials-archive",
    title: "Exclusive safari deals & offers",
    description: "Limited-time promotions on our most popular safari experiences. Book now and save on your African adventure of a lifetime.",
    image: "https://images.unsplash.com/photo-1534177616064-886e3e8e5052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "View all specials",
    primaryCTAHref: "/specials",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-reviews",
    context: "reviews-archive",
    title: "What our travelers say",
    description: "Real stories from real travelers. Read verified reviews from guests who have experienced our African safari adventures firsthand.",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Read reviews",
    primaryCTAHref: "/reviews",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-about",
    context: "about",
    title: "About LightSpeed Tours",
    description: "For over two decades, we've been crafting extraordinary African safari experiences. Discover our story, our values, and why thousands of travelers trust us.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Our story",
    primaryCTAHref: "/about",
    height: "medium",
    overlay: "medium",
  },
  {
    id: "hero-contact",
    context: "contact",
    title: "Get in touch",
    description: "Ready to plan your African adventure? Our friendly team is here to help you every step of the way. Reach out today.",
    image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Send a message",
    primaryCTAHref: "/contact",
    height: "small",
    overlay: "medium",
  },
  {
    id: "hero-faq",
    context: "faq",
    title: "Frequently asked questions",
    description: "Everything you need to know about planning your African safari. Can't find your answer? Contact our team directly.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Contact us",
    primaryCTAHref: "/contact",
    height: "small",
    overlay: "medium",
  },
  {
    id: "hero-why-book",
    context: "why-book-with-us",
    title: "Why book with LightSpeed Tours",
    description: "Decades of expertise, handpicked experiences, and a commitment to sustainable tourism. Here's why thousands of travelers choose us.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    primaryCTALabel: "Start planning",
    primaryCTAHref: "/tours",
    secondaryCTALabel: "Contact us",
    secondaryCTAHref: "/contact",
    height: "medium",
    overlay: "medium",
  },
];

/**
 * Helper: get hero content by context key.
 * 
 * @param context - The page/template context (e.g., "home", "tours-archive")
 * @returns HeroContent or undefined
 */
export function getHeroContent(context: string): HeroContent | undefined {
  return HERO_CONTENT.find((h) => h.context === context);
}

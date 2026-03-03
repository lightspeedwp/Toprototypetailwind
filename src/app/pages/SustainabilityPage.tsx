/**
 * Sustainability & Conservation Page
 * 
 * Showcases the tour operator's commitment to conservation and community development.
 * Adheres strictly to the design system and BEM naming.
 * 
 * @module SustainabilityPage
 * @category pages
 */

import { Container } from "../components/common/Container";
import { Hero } from "../components/patterns/Hero";
import { CTA } from "../components/patterns/CTA";
import { FAQ } from "../components/patterns/FAQ";
import { BreadcrumbsPattern } from "../components/patterns/BreadcrumbsPattern";
import { SustainabilityPattern } from "../components/patterns/SustainabilityPattern";
import { CONSERVATION_PROJECTS, SUSTAINABILITY_COMMITMENTS, SUSTAINABILITY_HERO } from "../data/sustainability";
import { getPageSectionFAQs } from "../data/mock";
import { useNavigation } from "../contexts/NavigationContext";
import { Heart, Compass, Shield, Users, Leaf, Globe } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export default function SustainabilityPage() {
  const { navigateTo } = useNavigation();
  const faqData = getPageSectionFAQs("sustainability");

  const impactStats = [
    { label: "Community", value: "45,000+", suffix: "People Impacted", icon: Users },
    { label: "Conservation", value: "1.5M+", suffix: "Acres Protected", icon: Shield },
    { label: "Environment", value: "250K+", suffix: "Trees Planted", icon: Leaf },
    { label: "Impact", value: "100%", suffix: "Sustainable Stays", icon: Heart },
  ];

  return (
    <article className="wp-template-page bg-background">
      <Container className="py-4">
        <BreadcrumbsPattern
          items={[
            { label: "Home", href: "/", onClick: () => navigateTo("/") },
            { label: "Sustainability", isCurrent: true }
          ]}
        />
      </Container>

      <Hero
        title={SUSTAINABILITY_HERO.title}
        intro={SUSTAINABILITY_HERO.description}
        image={SUSTAINABILITY_HERO.image}
        height="large"
        overlay="medium"
        animated
      />

      {/* Impact Statistics */}
      <section className="py-section-lg border-b border-border/50 bg-muted/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {impactStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="size-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <Icon className="size-8" />
                  </div>
                  <p className="text-fluid-4xl text-primary mb-2">{stat.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground m-0">{stat.suffix}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Core Sustainability Content */}
      <SustainabilityPattern
        projects={CONSERVATION_PROJECTS}
        commitments={SUSTAINABILITY_COMMITMENTS}
      />

      {/* Narrative Section */}
      <section className="py-section-lg bg-card border-y-2 border-border/50">
        <Container maxWidth="narrow">
          <div className="text-center mb-16">
            <h2 className="mb-8">Traveling with Purpose</h2>
            <div className="space-y-6 text-muted-foreground text-left">
              <p>
                We believe that travel is more than just seeing new places; it's about connecting with 
                humanity and the natural world in a way that creates a positive, lasting legacy. 
                Every journey we craft is built on the principle of "net positive travel."
              </p>
              <p>
                When you choose to explore Africa with us, you're not just a visitor; you're a vital 
                partner in protecting the continent's most precious assets. We dedicate a percentage 
                of every booking to the Lion Recovery Fund and local community health clinics.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 p-12 rounded-[2.5rem] bg-background border-2 border-primary shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Heart className="size-32 text-primary" />
              </div>
              <h3 className="mb-4">Our Ethical Promise</h3>
              <p className="text-fluid-lg mb-8">
                "We promise to never disrupt wildlife for a better photo, to always respect local traditions, 
                and to ensure your presence in Africa is a gift to the land and its people."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-primary" />
                <span className="font-bold text-xs uppercase tracking-widest text-primary">Signed, The Leadership Team</span>
                <div className="h-px w-12 bg-primary" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <FAQ
        title="Responsible Travel FAQ"
        subtitle="Learn how you can contribute to conservation during your expedition."
        items={faqData?.items}
      />

      <CTA
        variant="gradient"
        title="Be Part of the Solution"
        description="Every safari booked with us directly funds a conservation project of your choice. Join us in making a difference while exploring the wild heart of Africa."
        primaryAction={{
          label: "Start Planning Your Purposeful Journey",
          onClick: () => navigateTo("/contact")
        }}
        secondaryAction={{
          label: "View All Destinations",
          onClick: () => navigateTo("/destinations")
        }}
      />
    </article>
  );
}

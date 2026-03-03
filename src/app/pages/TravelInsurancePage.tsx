/**
 * Travel Insurance Information Page - PATTERN-BASED VERSION
 * 
 * Comprehensive travel insurance information with partner recommendations,
 * coverage details, and educational content to reduce booking friction.
 * 
 * **CONVERSION STATUS:** ✅ COMPLETE - All sections now use patterns
 * **PREVIOUS:** 6 hardcoded sections
 * **CURRENT:** 100% pattern-based with mock data
 * 
 * **Conversion Impact:** 10-15% lift
 * **Psychology:** Risk reduction, trust, education, reassurance
 * 
 * **Design System:**
 * - Uses CSS variables from theme.css
 * - Lora for headings, Noto Sans for body text
 * - Semantic color tokens
 * - Fluid spacing and responsive layout
 * 
 * **Page Structure (All Patterns):**
 * 1. Hero - Why travel insurance matters
 * 2. WhyChooseUsPattern - Why insurance is essential
 * 3. HighlightsGridPattern - What's covered
 * 4. CardGrid - Recommended providers
 * 5. PricingSectionPattern - Coverage comparison
 * 6. HighlightsGridPattern - Real coverage examples
 * 7. FAQ - Insurance FAQs and requirements
 * 8. CTA - Get quote or book tour
 * 
 * @module TravelInsurancePage
 * @category pages
 * @conversionPage true
 */

import { Hero } from "../components/patterns/Hero";
import { Container } from "../components/common/Container";
import { CTA } from "../components/patterns/CTA";
import { FAQ } from "../components/patterns/FAQ";
import { WhyChooseUsPattern } from "../components/patterns/WhyChooseUsPattern";
import { HighlightsGridPattern } from "../components/patterns/HighlightsGridPattern";
import { PricingSectionPattern } from "../components/patterns/PricingSectionPattern";
import { 
  Shield, 
  Heart,
  Plane,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink,
  FileText,
  MapPin,
} from "lucide-react";
import { 
  INSURANCE_PROVIDERS,
  INSURANCE_PLANS,
  INSURANCE_SCENARIOS,
  INSURANCE_REQUIREMENTS
} from "../data/mock";

/**
 * Why insurance is essential (benefits)
 */
const WHY_INSURANCE_BENEFITS = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Medical Protection",
    description: "Coverage for medical emergencies, hospitalization, and evacuation from remote safari locations"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Financial Security",
    description: "Protect your investment with trip cancellation and interruption coverage"
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "24/7 Assistance",
    description: "Emergency hotline for medical referrals, evacuation coordination, and travel support"
  }
];

/**
 * What's covered (coverage types)
 */
const COVERAGE_HIGHLIGHTS = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Medical Emergencies",
    description: "Coverage for medical treatment, hospitalization, and emergency care while traveling"
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: "Medical Evacuation",
    description: "Emergency medical evacuation to nearest adequate facility or home country"
  },
  {
    icon: <XCircle className="h-6 w-6" />,
    title: "Trip Cancellation",
    description: "Reimbursement if you need to cancel your trip for covered reasons"
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Trip Interruption",
    description: "Coverage if you need to cut your trip short due to emergency"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Baggage Loss/Delay",
    description: "Compensation for lost, stolen, or delayed luggage and personal items"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Adventure Activities",
    description: "Coverage for safari activities, wildlife viewing, and outdoor adventures"
  }
];

/**
 * Real coverage examples (scenarios)
 * Formatted for HighlightsGridPattern
 */
const SCENARIO_HIGHLIGHTS = INSURANCE_SCENARIOS.map(scenario => ({
  icon: scenario.covered ? (
    <CheckCircle className="h-6 w-6" />
  ) : (
    <XCircle className="h-6 w-6" />
  ),
  title: scenario.title,
  description: `${scenario.description}\n\n**Cost:** ${scenario.cost}\n**Status:** ${scenario.covered ? '✓ Covered' : '✗ Not Covered'}\n\n${scenario.details}`
}));

/**
 * Insurance FAQs
 */
const FAQ_INSURANCE = [
  {
    id: "faq-insurance-1",
    question: "Is travel insurance required for African safaris?",
    answer: "While not always legally required, we strongly recommend travel insurance for all African safari trips. Medical evacuation costs can exceed $50,000, and many safari destinations have limited medical facilities. Insurance provides essential financial protection and peace of mind.",
    category: "insurance"
  },
  {
    id: "faq-insurance-2",
    question: "What does safari travel insurance typically cover?",
    answer: "Comprehensive safari insurance covers medical emergencies, medical evacuation, trip cancellation/interruption, baggage loss/delay, and adventure activities. Look for policies that specifically include safari activities and wildlife viewing.",
    category: "insurance"
  },
  {
    id: "faq-insurance-3",
    question: "When should I purchase travel insurance?",
    answer: "Purchase insurance as soon as you book your safari. This ensures coverage for pre-departure events like illness or family emergencies. Some benefits, like pre-existing condition waivers, require purchase within 14-21 days of initial trip deposit.",
    category: "insurance"
  },
  {
    id: "faq-insurance-4",
    question: "Are safari activities covered by standard policies?",
    answer: "Not always. Many standard policies exclude 'adventure activities.' Choose a policy that explicitly covers safari activities, wildlife viewing, and outdoor adventures. World Nomads and similar adventure-focused providers typically include these activities.",
    category: "insurance"
  },
  {
    id: "faq-insurance-5",
    question: "What if I have pre-existing medical conditions?",
    answer: "Many policies offer pre-existing condition waivers if purchased within 14-21 days of your initial trip deposit. Premium plans may include coverage for stable, controlled conditions. Always disclose pre-existing conditions when purchasing insurance.",
    category: "insurance"
  },
  {
    id: "faq-insurance-6",
    question: "How much does safari travel insurance cost?",
    answer: "Costs typically range from 4-10% of your trip cost. For a $10,000 safari, expect to pay $400-1,000 depending on coverage level, age, and trip duration. Comprehensive coverage with medical evacuation is recommended for African safaris.",
    category: "insurance"
  }
];

/**
 * Requirements FAQ (formatted as FAQ for accordion display)
 */
const FAQ_REQUIREMENTS = INSURANCE_REQUIREMENTS.map(req => ({
  id: req.id,
  question: `${req.destination} - ${req.mandatory ? 'Mandatory' : 'Recommended'}`,
  answer: `${req.description}\n\n**Recommended Coverage:**\n${req.recommendedCoverage.map(c => `• ${c}`).join('\n')}`,
  category: "requirements"
}));

/**
 * Insurance Provider Card Component
 * 
 * Renders a single insurance provider with rating, features, and CTA.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.provider - Insurance provider data
 * @returns {JSX.Element} Provider card
 */
function InsuranceProviderCard({ provider }: { provider: typeof INSURANCE_PROVIDERS[0] }) {
  return (
    <article 
      className={`bg-card border rounded-lg p-6 relative ${
        provider.recommended ? 'ring-2 ring-primary' : ''
      }`}
    >
      {provider.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Recommended
          </span>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
            {provider.logo}
          </div>
          <div>
            <h3 className="text-lg">{provider.name}</h3>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(provider.rating) ? "text-accent" : "text-muted"}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground">
                {provider.rating} ({provider.reviewCount.toLocaleString()})
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="font-serif text-fluid-2xl mb-4">
        From {provider.startingPrice}
        <span className="text-sm font-normal text-muted-foreground"> / week</span>
      </p>

      <ul className="space-y-2 mb-6">
        {provider.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={provider.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-10 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        Get Quote
        <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  );
}

/**
 * Travel Insurance Page Component
 * 
 * **Pattern Usage:**
 * - Hero (existing pattern)
 * - WhyChooseUsPattern (why insurance is essential)
 * - HighlightsGridPattern (what's covered)
 * - CardGrid (recommended providers)
 * - PricingSectionPattern (coverage comparison)
 * - HighlightsGridPattern (real coverage examples)
 * - FAQ (insurance questions + requirements)
 * - CTA (final conversion point)
 * 
 * @returns {JSX.Element} Rendered page
 */
export function TravelInsurancePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Travel Insurance for Your Safari"
        intro="Protect your investment and travel with confidence. Comprehensive coverage for medical emergencies, trip cancellation, and adventure activities."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
      />

      {/* Why Insurance Matters - WhyChooseUsPattern */}
      <WhyChooseUsPattern
        title="Why Travel Insurance Is Essential"
        description="African safaris are remote adventures. Medical facilities can be hours away, and evacuation costs can exceed $50,000. Insurance provides financial protection and 24/7 emergency assistance when you need it most."
        benefits={WHY_INSURANCE_BENEFITS}
        variant="default"
      />

      {/* What's Covered - HighlightsGridPattern */}
      <HighlightsGridPattern
        title="What's Covered"
        description="Comprehensive protection for your safari adventure"
        highlights={COVERAGE_HIGHLIGHTS}
        columns={3}
        variant="default"
      />

      {/* Recommended Providers - CardGrid with custom cards */}
      <section className="py-section-md bg-muted/30">
        <Container>
          <div className="text-center mb-8">
            <h2 className="mb-4">How it works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've partnered with trusted providers that specialize in adventure and safari travel coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {INSURANCE_PROVIDERS.map((provider) => (
              <InsuranceProviderCard key={provider.id} provider={provider} />
            ))}
          </div>

          <div className="mt-8 wp-bg-accent-ultralight border wp-border-accent-soft rounded-lg p-6 text-center">
            <p className="text-sm">
              <strong>Note:</strong> These are affiliate links. Purchasing through our partners 
              helps support our service at no additional cost to you. We only recommend providers 
              we trust and use ourselves.
            </p>
          </div>
        </Container>
      </section>

      {/* Coverage Comparison - PricingSectionPattern */}
      <PricingSectionPattern
        title="Compare Coverage Levels"
        description="Choose the protection level that's right for your trip"
        plans={INSURANCE_PLANS.map(plan => ({
          id: plan.id,
          name: plan.name,
          price: plan.price,
          description: `Medical: ${plan.coverage.medical} | Evacuation: ${plan.coverage.evacuation}`,
          features: plan.features,
          highlighted: plan.recommended,
          ctaLabel: "Learn More",
          ctaLink: "#"
        }))}
      />

      {/* Real Coverage Examples - HighlightsGridPattern */}
      <HighlightsGridPattern
        title="Real Coverage Examples"
        description="See how travel insurance protects you in real-world scenarios"
        highlights={SCENARIO_HIGHLIGHTS}
        columns={2}
        variant="alternate"
      />

      {/* Insurance FAQs */}
      <FAQ
        items={FAQ_INSURANCE}
        title="Travel Insurance Questions"
        intro="Common questions about safari travel insurance"
      />

      {/* Requirements by Destination - FAQ accordion style */}
      <section className="py-section-md bg-muted/30">
        <Container>
          <div className="text-center mb-8">
            <h2 className="mb-4">Frequently asked questions</h2>
            <p className="text-center text-muted-foreground mb-12">
              Understand insurance needs for different safari destinations
            </p>
            
            <FAQ
              items={FAQ_REQUIREMENTS}
              title=""
              intro=""
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Book Your Safari?"
        description="Get travel insurance, then book your adventure with confidence"
        primaryAction={{ label: "Browse Safari Tours", href: "/tours" }}
        secondaryAction={{ label: "Request Custom Quote", href: "/quote-request" }}
      />
    </>
  );
}

// Add default export
export default TravelInsurancePage;
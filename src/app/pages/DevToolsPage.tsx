/**
 * Developer Tools Landing Page — Central Hub
 *
 * Organises all dev tools into 6 categories matching the project taxonomy:
 * Design, Showcase, Documentation, Testing, Reference, Deployment.
 *
 * All styling uses CSS custom properties from theme.css.
 * Typography: Lora (serif) for headings, Noto Sans (sans-serif) for body/UI.
 *
 * @module DevToolsPage
 * @category pages
 */

import { Link } from "react-router";
import { Container } from "../components/common/Container";
import { Breadcrumbs } from "../components/common/Breadcrumbs";
import {
  Palette,
  Type,
  Space,
  Layers,
  Circle,
  Mouse,
  Play,
  Wrench,
  ArrowRight,
  Paintbrush,
  Sliders,
  Component,
  LayoutGrid,
  FileText,
  Scissors,
  FlaskConical,
  Eye,
  Puzzle,
  BookOpen,
  Search,
  Blocks,
  Rocket,
  Gauge,
  Monitor,
  Terminal,
  ChevronRight,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ToolLink {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface ToolCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;
  tools: ToolLink[];
}

/* ------------------------------------------------------------------ */
/*  Tool catalogue — grouped by the 6 project categories              */
/* ------------------------------------------------------------------ */

const CATEGORIES: ToolCategory[] = [
  {
    id: "design",
    title: "Design",
    description: "Inspect, audit, and experiment with every design token.",
    icon: <Paintbrush className="w-5 h-5" />,
    accentClass: "wp-template-devtools__icon--primary",
    tools: [
      { title: "Colour Contrast Audit", description: "Verify WCAG AA/AAA colour contrast ratios across all semantic tokens in light and dark mode.", href: "/dev-tools/style-guide", icon: <Palette className="w-5 h-5" /> },
      { title: "Typography Specimens", description: "Inspect every heading level, body size, weight, and special element from the fluid type scale.", href: "/dev-tools/typography", icon: <Type className="w-5 h-5" /> },
      { title: "Spacing Scale", description: "Visualise fluid clamp() spacing tokens — sections, containers, elements, and gaps.", href: "/dev-tools/spacing", icon: <Space className="w-5 h-5" /> },
      { title: "Shadow & Glow Scale", description: "Compare all four elevation levels side-by-side with hover interaction previews.", href: "/dev-tools/shadow", icon: <Layers className="w-5 h-5" /> },
      { title: "Border Radius Specimens", description: "See every radius token from 2 px to pill applied to buttons, cards, and inputs.", href: "/dev-tools/radius", icon: <Circle className="w-5 h-5" /> },
      { title: "Button Variants", description: "All button sizes, variants, states, and icon combinations from the design system.", href: "/dev-tools/buttons", icon: <Mouse className="w-5 h-5" /> },
      { title: "Design Tokens Reference", description: "Single-page reference of all CSS custom properties — colours, typography, spacing, shadows, radii.", href: "/dev-tools/design-tokens", icon: <Sliders className="w-5 h-5" /> },
      { title: "Design System Playground", description: "Interactive page to experiment with tokens — change colours, preview combinations live.", href: "/dev-tools/design-playground", icon: <Paintbrush className="w-5 h-5" /> },
    ],
  },
  {
    id: "showcase",
    title: "Showcase",
    description: "Visual specimens of components, cards, animations, and section presets.",
    icon: <LayoutGrid className="w-5 h-5" />,
    accentClass: "wp-template-devtools__icon--accent",
    tools: [
      { title: "Component Showcase", description: "Showcase all existing React components — Logo, Header, Footer, ArchiveFilters, etc.", href: "/dev-tools/component-showcase", icon: <Component className="w-5 h-5" /> },
      { title: "Card Interactions", description: "Live specimens of Tour, Destination, Blog, Team, Special, and Accommodation cards.", href: "/dev-tools/card-interactions", icon: <LayoutGrid className="w-5 h-5" /> },
      { title: "Animations", description: "Entrance transitions, hover micro-interactions, stagger effects, and loading skeletons.", href: "/dev-tools/animations", icon: <Play className="w-5 h-5" /> },
      { title: "Section Presets", description: "All 22 section background/styling presets for consistent page composition.", href: "/dev-tools/section-presets", icon: <LayoutGrid className="w-5 h-5" /> },
    ],
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Auto-generated docs, snippet builders, and code patterns.",
    icon: <FileText className="w-5 h-5" />,
    accentClass: "wp-template-devtools__icon--info",
    tools: [
      { title: "Documentation Generator", description: "Mock auto-generated documentation from component JSDoc comments.", href: "/dev-tools/documentation", icon: <FileText className="w-5 h-5" /> },
      { title: "Snippet Generator", description: "Interactive code snippet builder for BEM patterns and WordPress block markup.", href: "/dev-tools/snippets", icon: <Scissors className="w-5 h-5" /> },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    description: "Code quality, visual regression, integration, and accessibility audits.",
    icon: <FlaskConical className="w-5 h-5" />,
    accentClass: "wp-template-devtools__icon--warning",
    tools: [
      { title: "Code Quality Dashboard", description: "Static analysis — DOM complexity, CSS rule counts, component dependency map.", href: "/dev-tools/code-quality", icon: <FlaskConical className="w-5 h-5" /> },
      { title: "Visual Regression Tester", description: "Screenshot comparison tool (simulated with canvas) for detecting visual changes.", href: "/dev-tools/visual-regression", icon: <Eye className="w-5 h-5" /> },
      { title: "Integration Tester", description: "User flow simulation — test navigation paths, form interactions, and page transitions.", href: "/dev-tools/integration", icon: <Puzzle className="w-5 h-5" /> },
      { title: "Accessibility Audit", description: "Interactive WCAG 2.1 compliance checker — headings, landmarks, ARIA, colour contrast.", href: "/dev-tools/accessibility-audit", icon: <BookOpen className="w-5 h-5" /> },
    ],
  },
  {
    id: "reference",
    title: "Reference",
    description: "Component APIs, icon library, block documentation, and template parts.",
    icon: <Search className="w-5 h-5" />,
    accentClass: "wp-template-devtools__icon--secondary",
    tools: [
      { title: "Component API", description: "Props/interface reference for all exported components with type definitions.", href: "/dev-tools/component-api", icon: <BookOpen className="w-5 h-5" /> },
      { title: "Icon Library", description: "Searchable grid of all Lucide icons used across the site with copy-to-clipboard.", href: "/dev-tools/icons", icon: <Search className="w-5 h-5" /> },
      { title: "Block Documentation", description: "WordPress block equivalents — tour operator blocks, design blocks, and theme blocks.", href: "/dev-tools/block-documentation", icon: <Blocks className="w-5 h-5" /> },
      { title: "Header & Footer", description: "Side-by-side comparison of template parts — Header and Footer in all responsive states.", href: "/dev-tools/header-footer", icon: <LayoutGrid className="w-5 h-5" /> },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Pre-deploy readiness, performance, and analytics monitoring.",
    icon: <Rocket className="w-5 h-5" />,
    accentClass: "wp-template-devtools__icon--success",
    tools: [
      { title: "Deployment Readiness", description: "Pre-deploy checklist — Lighthouse scores, a11y, broken links, bundle size.", href: "/dev-tools/deployment", icon: <Rocket className="w-5 h-5" /> },
      { title: "Performance Monitor", description: "Component render times, Core Web Vitals, memory usage, and threshold alerts.", href: "/dev-tools/performance", icon: <Gauge className="w-5 h-5" /> },
      { title: "Analytics Dashboard", description: "Real-time insights into user behaviour, performance snapshots, and system health.", href: "/dev-tools/analytics", icon: <Monitor className="w-5 h-5" /> },
    ],
  },
];

const TOTAL_TOOLS = CATEGORIES.reduce((sum, cat) => sum + cat.tools.length, 0);

const ADDITIONAL_TOOLS = [
  { label: "Template Tester", href: "/dev-tools/template-tester", icon: <FlaskConical className="w-4 h-4" /> },
  { label: "Design Blocks", href: "/dev-tools/design-blocks", icon: <Blocks className="w-4 h-4" /> },
  { label: "Theme Blocks", href: "/dev-tools/theme-blocks", icon: <Layers className="w-4 h-4" /> },
  { label: "Live Preview", href: "/dev-tools/live-preview", icon: <Eye className="w-4 h-4" /> },
  { label: "Legacy Hub", href: "/dev-tools/hub", icon: <Terminal className="w-4 h-4" /> },
  { label: "Sitemap", href: "/sitemap", icon: <Monitor className="w-4 h-4" /> },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

function DevToolsPage() {
  return (
    <>
      {/* ============================================================
          BREADCRUMBS — single instance
          ============================================================ */}
      <div className="breadcrumb-bar">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Developer Tools", isCurrent: true },
            ]}
          />
        </Container>
      </div>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-card border-b border-border">
        {/* Subtle grid pattern */}
        <div className="wp-template-devtools__grid-pattern" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dt-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dt-grid)" />
          </svg>
        </div>

        <Container>
          <div className="relative py-section-md max-w-3xl mx-auto text-center">
            <div className="wp-template-devtools__badge mb-8">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary font-sans text-sm font-medium">Developer Tools Hub</span>
            </div>

            <h1 className="mb-4">Developer Tools</h1>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-0">
              Explore, audit, and validate every design token powering the
              LightSpeed Tour Operator prototype. All values are sourced from CSS
              custom properties — change one variable, update the entire system.
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================================
          STATS — overlapping cards
          ============================================================ */}
      <section className="relative -mt-6 z-10 pb-8">
        <Container>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
            {[
              { value: String(TOTAL_TOOLS), label: "Tools", icon: <Wrench className="w-4 h-4" /> },
              { value: String(CATEGORIES.length), label: "Categories", icon: <LayoutGrid className="w-4 h-4" /> },
              { value: "AAA", label: "WCAG Target", icon: <Eye className="w-4 h-4" /> },
              { value: "1440px", label: "Align-wide", icon: <Monitor className="w-4 h-4" /> },
            ].map((s) => (
              <div
                key={s.label}
                className="group bg-card border border-border rounded-xl p-5 text-center shadow-sm hover:border-primary/30 transition-all"
              >
                <div className="wp-template-devtools__stat-icon mb-2">
                  {s.icon}
                </div>
                <p className="font-serif text-fluid-2xl text-primary mb-0.5">{s.value}</p>
                <p className="text-muted-foreground text-xs mb-0">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          CATEGORY QUICK NAV — sticky
          ============================================================ */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border">
        <Container>
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            <span className="text-muted-foreground text-sm font-sans mr-1 flex-shrink-0">Jump to:</span>
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="wp-template-devtools__nav-link"
              >
                {cat.icon}
                {cat.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* ============================================================
          TOOL CATEGORIES — alternating backgrounds
          ============================================================ */}
      {CATEGORIES.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-section-sm ${catIndex % 2 === 0 ? "wp-template-devtools__section--even" : "wp-template-devtools__section--odd"}`}
        >
          <Container>
            {/* Category header */}
            <div className="flex items-start gap-4 mb-8">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${category.accentClass}`}>
                {category.icon}
              </div>
              <div>
                <h2 className="mb-1">{category.title}</h2>
                <p className="text-muted-foreground mb-0">{category.description}</p>
              </div>
            </div>

            {/* Tool cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {category.tools.map((tool) => (
                <Link
                  key={tool.href}
                  to={tool.href}
                  className="wp-template-devtools__tool-card group"
                >
                  {/* Accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden="true" />

                  <div className="wp-template-devtools__tool-icon mb-3">
                    {tool.icon}
                  </div>
                  <h5 className="mb-1.5 group-hover:text-primary transition-colors">{tool.title}</h5>
                  <p className="text-sm text-muted-foreground flex-1 mb-3">{tool.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 translate-y-0.5 group-hover:translate-y-0 transition-all">
                    Open <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* ============================================================
          ADDITIONAL UTILITIES
          ============================================================ */}
      <section className="py-section-sm wp-template-devtools__utilities-section border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-6">Additional Utilities</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {ADDITIONAL_TOOLS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border text-sm text-foreground no-underline hover:border-primary/30 hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-ring font-sans"
                >
                  <span className="text-muted-foreground">{link.icon}</span>
                  {link.label}
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          HOW IT WORKS
          ============================================================ */}
      <section className="py-section-sm bg-background border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 relative overflow-hidden">
              <div className="wp-template-devtools__shape" aria-hidden="true" />

              <div className="flex items-center gap-3 mb-5">
                <div className="wp-template-devtools__how-icon">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="mb-0">How It Works</h3>
              </div>

              <p className="text-muted-foreground mb-4">
                Every colour, spacing value, shadow, and radius is defined as a CSS
                custom property in <code className="text-sm bg-muted px-1.5 py-0.5 rounded">theme-light.css</code> and{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">theme-dark.css</code>. Tailwind's{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">@theme</code> layer maps them so
                classes like <code className="text-sm bg-muted px-1.5 py-0.5 rounded">bg-primary</code> always
                resolve to the correct token.
              </p>

              <div className="wp-template-devtools__callout">
                <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm mb-0">
                  <strong className="text-foreground">To update the design system:</strong>{" "}
                  <span className="text-muted-foreground">edit the CSS variables in the theme files. Everything updates automatically.</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default DevToolsPage;
export { DevToolsPage };
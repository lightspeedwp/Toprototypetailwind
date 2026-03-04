/**
 * Site Footer
 * 
 * Comprehensive footer using WordPress theme blocks logic.
 * Strictly adheres to design system tokens and BEM naming.
 */

import { Container } from "../common/Container";
import { SiteLogo, SiteTagline } from "../blocks/theme";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

interface FooterNewProps {
  currentPage?: string;
  onNavigate?: (path: string) => void;
}

const FOOTER_NAV = {
  expeditions: [
    { label: "All Tours", url: "/tours" },
    { label: "Exclusive Specials", url: "/specials" },
    { label: "Our Territories", url: "/destinations" },
    { label: "Travel Styles", url: "/travel-styles" },
  ],
  sanctuary: [
    { label: "Estate Collection", url: "/accommodation" },
    { label: "Sustainable Impact", url: "/about" },
    { label: "The Chronicles", url: "/blog" },
    { label: "Expert Concierge", url: "/contact" },
  ],
  intelligence: [
    { label: "Travel FAQ", url: "/faqs" },
    { label: "Booking Protocols", url: "/terms-conditions" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Digital Studio", url: "/dev-tools" },
  ]
};

export function FooterNew({ currentPage, onNavigate }: FooterNewProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="wp-part-footer bg-card border-t-2 border-border/50">
      {/* Prime Footer Content */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-24">
            {/* Brand Manifesto */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <SiteLogo width="220px" onClick={() => onNavigate?.('/')} />
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm m-0 italic font-serif">
                  "Defining the intersection of profound wilderness and refined architecture."
                </p>
              </div>
              
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                  { Icon: Twitter, label: 'X (Twitter)', href: 'https://x.com' },
                  { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="size-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Ecosystem */}
            {Object.entries(FOOTER_NAV).map(([key, items]) => (
              <div key={key}>
                <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-8">{key}</h4>
                <ul className="space-y-4 m-0 p-0 list-none">
                  {items.map(item => (
                    <li key={item.url} className="m-0">
                      <button
                        onClick={() => onNavigate?.(item.url)}
                        className={cn(
                          "text-sm font-bold transition-all flex items-center gap-2 group",
                          currentPage === item.url ? "text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                        <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust & Contact Strip */}
      <section className="bg-muted/30 border-y-2 border-border/50 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Mail className="size-5 text-primary" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Dossier Request</p>
                <p className="text-sm font-bold">concierge@lightspeed.africa</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><Phone className="size-5 text-primary" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Direct Access</p>
                <p className="text-sm font-bold">+27 (0) 21 555 0123</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-background border border-border shadow-sm"><MapPin className="size-5 text-primary" /></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">HQ Studio</p>
                <p className="text-sm font-bold">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom Legal / Copyright */}
      <section className="py-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 m-0">
                &copy; {currentYear} LightSpeed Studio. Architectural Safaris.
              </p>
            </div>
            
            <div className="flex gap-8">
              <button onClick={() => onNavigate?.('/template-tester')} className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border">Template Navigator</button>
              <button onClick={() => onNavigate?.('/dev-tools')} className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border">System Logic</button>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
}

export default FooterNew;
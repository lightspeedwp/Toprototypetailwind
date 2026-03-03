/**
 * Pricing Section Pattern Component
 * 
 * Displays seasonal pricing information in a table or grid layout.
 * Strictly adheres to design system tokens and BEM naming.
 */

import { Container } from "../common/Container";
import { HeadingBlock } from "../blocks/core/HeadingBlock";
import { ParagraphBlock } from "../blocks/core/ParagraphBlock";
import { Button } from "../blocks/design/Button";
import { Calendar, Tag, Info } from "lucide-react";
import { cn } from "../../lib/utils";

export interface PricingRow {
  period: string;
  price: string | number;
  note?: string;
  availability?: 'available' | 'limited' | 'sold-out';
}

export interface PricingSectionPatternProps {
  title?: string;
  description?: string;
  prices: PricingRow[];
  currency?: string;
  priceUnit?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
  variant?: 'table' | 'cards';
  className?: string;
}

const availabilityClasses = {
  available: "text-success bg-success/10 border-success/20",
  limited: "text-warning bg-warning/10 border-warning/20",
  "sold-out": "text-destructive bg-destructive/10 border-destructive/20",
};

const availabilityLabels = {
  available: "Wide Availability",
  limited: "Limited Spaces",
  "sold-out": "Fully Booked",
};

export function PricingSectionPattern({
  title = "Rates & Availability",
  description,
  prices = [],
  currency = "$",
  priceUnit = "per person",
  cta,
  variant = 'table',
  className,
}: PricingSectionPatternProps) {
  if (prices.length === 0) return null;

  return (
    <section className={cn("wp-pattern-lts-pricing has-section-padding-md", className)}>
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Tag className="size-5" />
              </div>
              <HeadingBlock level={2} className="mb-0">
                {title}
              </HeadingBlock>
            </div>
            {description && (
              <ParagraphBlock className="text-muted-foreground text-lg m-0">
                {description}
              </ParagraphBlock>
            )}
          </div>
        </div>

        {/* Pricing Display */}
        {variant === 'table' ? (
          <div className="wp-pattern-lts-pricing__table-container bg-card border-2 border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted border-b-2 border-border">
                    <th className="px-8 py-6 font-serif font-bold text-foreground text-lg">Travel Period</th>
                    <th className="px-8 py-6 font-serif font-bold text-foreground text-lg text-right">Investment</th>
                    <th className="px-8 py-6 font-serif font-bold text-foreground text-lg text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {prices.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                            <Calendar className="size-5" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground mb-1">{row.period}</p>
                            {row.note && (
                              <p className="text-xs text-muted-foreground m-0 flex items-center gap-1">
                                <Info className="size-3" /> {row.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="text-primary font-serif font-bold text-2xl">
                          {currency}{row.price}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                          {priceUnit}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-center">
                        {row.availability && (
                          <span className={cn(
                            "inline-flex items-center px-4 py-1 rounded-full text-xs font-bold border",
                            availabilityClasses[row.availability]
                          )}>
                            {availabilityLabels[row.availability]}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prices.map((row, index) => (
              <div 
                key={index} 
                className="wp-pattern-lts-pricing__card bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Calendar className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-0">
                    {row.period}
                  </h3>
                </div>
                
                <div className="mb-8 p-6 rounded-2xl bg-muted/30 border border-border/50">
                  <div className="text-primary font-serif font-bold text-4xl mb-1">
                    {currency}{row.price}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground m-0">
                    {priceUnit}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {row.availability && (
                    <div className={cn(
                      "text-center py-2 rounded-xl text-sm font-bold border",
                      availabilityClasses[row.availability]
                    )}>
                      {availabilityLabels[row.availability]}
                    </div>
                  )}
                  {row.note && (
                    <p className="text-xs text-muted-foreground text-center italic m-0">
                      * {row.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {cta && (
          <div className="mt-12 text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={cta.onClick}
              className="rounded-xl px-12"
            >
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default PricingSectionPattern;

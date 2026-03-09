/**
 * Inclusions Pattern Component
 * 
 * Displays what is included and excluded in a tour or package.
 * Strictly adheres to design system tokens and BEM naming.
 */

import { Container } from "../common/Container";
import { HeadingBlock } from "../blocks/core/HeadingBlock";
import { ParagraphBlock } from "../blocks/core/ParagraphBlock";
import { Check, X, ShieldCheck, WarningCircle as AlertCircle } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";

export interface InclusionsPatternProps {
  title?: string;
  description?: string;
  included?: string[];
  excluded?: string[];
  variant?: 'default' | 'card';
  className?: string;
}

export function InclusionsPattern({
  title = "What's Included",
  description,
  included = [],
  excluded = [],
  variant = 'default',
  className,
}: InclusionsPatternProps) {
  const showBothColumns = included.length > 0 && excluded.length > 0;

  return (
    <section className={cn("wp-pattern-lts-inclusions has-section-padding-md", className)}>
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="size-5" />
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

        {/* Inclusions/Exclusions Grid */}
        <div className={cn(
          "grid gap-8 md:gap-12",
          showBothColumns ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
        )}>
          {/* Included Items */}
          {included.length > 0 && (
            <div className="wp-pattern-lts-inclusions__col wp-pattern-lts-inclusions__col--included p-8 md:p-12 rounded-3xl bg-success/5 border-2 border-success/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Check className="size-32 text-success" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-2xl bg-success/10 flex items-center justify-center text-success">
                  <Check className="size-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-0">Included</h3>
              </div>

              <ul className="space-y-4 list-none p-0 m-0">
                {included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-success/5 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                    <Check className="size-5 text-success mt-1 shrink-0" />
                    <span className="text-foreground font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Excluded Items */}
          {excluded.length > 0 && (
            <div className="wp-pattern-lts-inclusions__col wp-pattern-lts-inclusions__col--excluded p-8 md:p-12 rounded-3xl bg-destructive/5 border-2 border-destructive/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <AlertCircle className="size-32 text-destructive" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="size-12 rounded-2xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <X className="size-6" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-0">Not Included</h3>
              </div>

              <ul className="space-y-4 list-none p-0 m-0">
                {excluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-destructive/5 backdrop-blur-sm hover:translate-x-2 transition-transform duration-300">
                    <X className="size-5 text-destructive mt-1 shrink-0" />
                    <span className="text-muted-foreground font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default InclusionsPattern;

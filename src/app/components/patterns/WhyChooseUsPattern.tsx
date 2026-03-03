/**
 * Why Choose Us Pattern - WordPress BEM CSS Version
 * 
 * Displays value propositions and benefits in a responsive grid.
 * 
 * @module WhyChooseUsPattern
 * @category patterns
 */

import { Container } from "../common/Container";
import { HeadingBlock } from "../blocks/core/HeadingBlock";
import { ParagraphBlock } from "../blocks/core/ParagraphBlock";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FeatureItem {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface WhyChooseUsPatternProps {
  title?: string;
  description?: string;
  features?: FeatureItem[];
  reasons?: Array<{ id?: string; title: string; description: string; icon?: string }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function WhyChooseUsPattern({
  title = "Why Choose Us",
  description,
  features: featuresProp,
  reasons,
  columns = 3,
  className,
}: WhyChooseUsPatternProps) {
  // Convert legacy reasons if needed
  const features = featuresProp || (reasons || []).map(reason => ({
    icon: undefined as any,
    title: reason.title,
    description: reason.description,
  }));

  const gridColumns = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={cn("py-section-md", className)}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <HeadingBlock level={2} textAlign="center">
            {title}
          </HeadingBlock>
          {description && (
            <ParagraphBlock className="text-muted-foreground max-w-2xl mx-auto mt-4" size="lg">
              {description}
            </ParagraphBlock>
          )}
        </div>

        {/* Features Grid */}
        <div className={cn("grid gap-12 md:gap-8", gridColumns)}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Circle */}
                {Icon && (
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-6">
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -inset-2 bg-primary/10 rounded-2xl -z-10 group-hover:rotate-12 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  </div>
                )}

                {/* Content */}
                <HeadingBlock level={4} textAlign="center" className="mb-3">
                  {feature.title}
                </HeadingBlock>

                <ParagraphBlock className="text-muted-foreground">
                  {feature.description}
                </ParagraphBlock>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

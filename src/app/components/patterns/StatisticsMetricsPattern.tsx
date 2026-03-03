/**
 * Statistics & Metrics Pattern - WordPress BEM CSS Version
 * 
 * Displays key metrics and achievements in a high-impact responsive grid.
 * 
 * @module StatisticsMetricsPattern
 * @category patterns
 */

import { Container } from "../common/Container";
import { HeadingBlock } from "../blocks/core/HeadingBlock";
import { ParagraphBlock } from "../blocks/core/ParagraphBlock";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface StatisticItem {
  value: string | number;
  label: string;
  icon?: LucideIcon;
  prefix?: string;
  suffix?: string;
}

export interface StatisticsMetricsPatternProps {
  title?: string;
  description?: string;
  statistics?: StatisticItem[];
  metrics?: Array<{ value: string | number; label: string; icon?: string }>;
  variant?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatisticsMetricsPattern({
  title,
  description,
  statistics: statisticsProp,
  metrics,
  variant,
  columns = 4,
  className,
}: StatisticsMetricsPatternProps) {
  // Convert legacy metrics to statistics if needed
  const statistics = statisticsProp || (metrics || []).map(metric => ({
    value: metric.value,
    label: metric.label,
    icon: undefined,
  }));

  const gridColumns = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }[columns];

  return (
    <section className={cn("py-section-md bg-muted/30 border-y border-border/50", className)}>
      <Container>
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <HeadingBlock level={2} textAlign="center">
                {title}
              </HeadingBlock>
            )}
            {description && (
              <ParagraphBlock className="text-muted-foreground max-w-2xl mx-auto mt-4">
                {description}
              </ParagraphBlock>
            )}
          </div>
        )}

        {/* Statistics Grid */}
        <div className={cn("grid gap-12 md:gap-8", gridColumns)}>
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon (optional) */}
                {Icon && (
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon size={24} />
                    </div>
                  </div>
                )}

                {/* Statistic Value */}
                <div className="mb-2 relative">
                  <span 
                    className="text-primary text-fluid-5xl md:text-fluid-6xl font-bold leading-none font-serif tracking-tighter"
                  >
                    {stat.prefix && <span className="text-fluid-3xl md:text-fluid-4xl mr-1 opacity-60 font-sans">{stat.prefix}</span>}
                    {stat.value}
                    {stat.suffix && <span className="text-fluid-3xl md:text-fluid-4xl ml-1 opacity-60 font-sans">{stat.suffix}</span>}
                  </span>
                  {/* Underline decorative element */}
                  <div className="h-1.5 w-12 bg-accent/30 mx-auto mt-4 rounded-full group-hover:w-20 transition-all duration-500" />
                </div>

                {/* Statistic Label */}
                <p className="text-muted-foreground font-sans font-semibold text-xs md:text-sm uppercase tracking-widest mt-4">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

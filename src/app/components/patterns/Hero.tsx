/**
 * Hero Pattern Component
 * 
 * Foundational pattern for page headers with premium visual effects.
 * Strictly adheres to design system tokens and BEM naming.
 */

import { ArrowRight, Compass, MousePointer2 } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useEffect, useCallback } from "react";
import { Container } from "../common/Container";
import { cn } from "../../lib/utils";

interface HeroProps {
  title: string;
  intro?: string;
  description?: string;
  subtitle?: string;
  context?: string;
  image?: string;
  backgroundImage?: string;
  primaryCTA?: { label: string; onClick?: () => void; icon?: any };
  secondaryCTA?: { label: string; onClick?: () => void; variant?: "outline" | "ghost" };
  className?: string;
  height?: "small" | "medium" | "large" | "full";
  overlay?: "none" | "light" | "medium" | "dark";
  showScrollIndicator?: boolean;
  animated?: boolean;
}

export function Hero({
  title, intro, description, subtitle, context, image, backgroundImage,
  primaryCTA, secondaryCTA, className,
  height = "medium", overlay = "medium",
  showScrollIndicator = false, animated = true,
}: HeroProps) {
  const displayIntro = intro || description || subtitle;
  const heroImage = image || backgroundImage;
  
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleParallax = useCallback(() => {
    const section = sectionRef.current;
    const img = imageRef.current;
    if (!section || !img) return;
    const rect = section.getBoundingClientRect();
    const windowH = window.innerHeight;
    if (rect.bottom < 0 || rect.top > windowH) return;
    const progress = 1 - (rect.bottom / (windowH + rect.height));
    const offset = (progress - 0.5) * 100;
    img.style.transform = `translateY(${offset}px) scale(1.2)`;
  }, []);

  useEffect(() => {
    if (!heroImage) return;
    window.addEventListener("scroll", handleParallax, { passive: true });
    handleParallax();
    return () => window.removeEventListener("scroll", handleParallax);
  }, [heroImage, handleParallax]);

  return (
    <section 
      ref={sectionRef} 
      className={cn(
        "wp-pattern-hero",
        `wp-pattern-hero--${height}`,
        heroImage && "wp-pattern-hero--with-background",
        className
      )}
    >
      {/* Background Media */}
      {heroImage && (
        <div className="wp-pattern-hero__background">
          <img
            ref={imageRef}
            src={heroImage}
            alt=""
            className="wp-pattern-hero__background-image"
          />
          <div className={cn(
            "wp-pattern-hero__overlay",
            `wp-pattern-hero__overlay--${overlay}`
          )} />
        </div>
      )}
      
      {/* Content */}
      <Container className="wp-pattern-hero__content">
        <div className={cn(
          "wp-pattern-hero__inner",
          "wp-pattern-hero__inner--split" // Defaulting to split for visual interest as per mock
        )}>
          <div className="wp-pattern-hero__main">
            {context && (
              <motion.div
                initial={animated ? { opacity: 0, x: -20 } : {}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="wp-pattern-hero__context"
              >
                <span className="wp-pattern-hero__context-text">
                  {context}
                </span>
              </motion.div>
            )}
            
            <motion.h1
              initial={animated ? { opacity: 0, y: 30 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="wp-pattern-hero__title"
            >
              {title}
            </motion.h1>
            
            {displayIntro && (
              <motion.p
                initial={animated ? { opacity: 0, y: 20 } : {}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="wp-pattern-hero__intro"
              >
                {displayIntro}
              </motion.p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <motion.div
                initial={animated ? { opacity: 0, y: 20 } : {}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="wp-pattern-hero__actions"
              >
                {primaryCTA && (
                  <button 
                    onClick={primaryCTA.onClick}
                    className="wp-pattern-hero__button-primary"
                  >
                    {primaryCTA.label}
                    {primaryCTA.icon || <Compass className="size-5" />}
                  </button>
                )}

                {secondaryCTA && (
                  <button 
                    onClick={secondaryCTA.onClick} 
                    className={cn(
                      "wp-pattern-hero__button-secondary",
                      secondaryCTA.variant === "ghost" && "wp-pattern-hero__button-secondary--ghost"
                    )}
                  >
                    {secondaryCTA.label}
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="wp-pattern-hero__scroll"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      )}
    </section>
  );
}

export default Hero;

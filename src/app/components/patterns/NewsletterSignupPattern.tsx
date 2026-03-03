/**
 * Newsletter Signup Pattern Component
 * 
 * Email capture form with premium design.
 * Strictly adheres to design system tokens and BEM naming.
 */

import { useState } from "react";
import { Container } from "../common/Container";
import { HeadingBlock } from "../blocks/core/HeadingBlock";
import { ParagraphBlock } from "../blocks/core/ParagraphBlock";
import { Button } from "../blocks/design/Button";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";

export interface NewsletterSignupPatternProps {
  title?: string;
  description?: string;
  buttonText?: string;
  privacyNote?: string;
  variant?: 'default' | 'minimal';
  className?: string;
}

export function NewsletterSignupPattern({
  title = "Stay Inspired",
  description = "Join our community of elite explorers and receive curated destination guides and exclusive seasonal invitations.",
  buttonText = "Join the Inner Circle",
  privacyNote = "Your data is handled with absolute discretion. Unsubscribe at your convenience.",
  variant = 'default',
  className,
}: NewsletterSignupPatternProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className={cn("wp-pattern-lts-newsletter", className)}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="size-20 rounded-3xl bg-success/10 flex items-center justify-center text-success mx-auto mb-8 shadow-sm">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="text-3xl font-bold font-serif mb-4">Welcome to the Collection</h3>
            <p className="text-muted-foreground text-lg">Your first edition of the Safari Insider is on its way.</p>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
            <div className="text-center mb-12">
              <HeadingBlock level={2} textAlign="center" className="text-3xl md:text-4xl">
                {title}
              </HeadingBlock>
              <ParagraphBlock className="text-muted-foreground text-lg max-w-lg mx-auto">
                {description}
              </ParagraphBlock>
            </div>

            <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto group">
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email..."
                  required
                  disabled={isLoading}
                  className="w-full pl-16 pr-48 py-5 rounded-2xl bg-card border-2 border-border focus:border-primary/30 outline-none font-bold text-sm shadow-sm transition-all"
                />
                <div className="absolute right-2 top-2 bottom-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isLoading}
                    className="h-full px-8 rounded-xl font-bold gap-2 shadow-lg"
                  >
                    {isLoading ? "Processing..." : (
                      <>
                        {buttonText} <ArrowRight className="size-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>

            <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mt-8">
              {privacyNote}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NewsletterSignupPattern;

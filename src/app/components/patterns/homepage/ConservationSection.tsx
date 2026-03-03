/**
 * Conservation Section for the homepage.
 * 
 * Highlights the tour operator's commitment to sustainability and conservation.
 */

import { Container } from "../../common/Container";
import { HeadingBlock } from "../../blocks/core/HeadingBlock";
import { ParagraphBlock } from "../../blocks/core/ParagraphBlock";
import { Button } from "../../blocks/design/Button";
import { Heart, Shield, Leaf, Globe, ArrowRight } from "lucide-react";
import { motion as Motion } from "motion/react";
import { cn } from "../../../lib/utils";

interface ConservationSectionProps {
  onNavigate: (path: string) => void;
}

export function ConservationSection({ onNavigate }: ConservationSectionProps) {
  const highlights = [
    { title: "Wildlife First", icon: Shield, desc: "Dedicated anti-poaching units funded by your visits." },
    { title: "Eco-Luxe", icon: Leaf, desc: "Hand-picked lodges with zero-carbon footprints." },
    { title: "Legacy", icon: Heart, desc: "Every booking supports local education initiatives." }
  ];

  return (
    <section className="wp-template-home__conservation py-section-lg bg-background overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
              <Globe className="size-3" /> Our Global Responsibility
            </div>
            
            <HeadingBlock level={2} className="mb-8">
              Travel that Leaves a <span className="text-primary italic">Legacy</span>
            </HeadingBlock>
            
            <ParagraphBlock className="text-muted-foreground mb-12">
              We don't just show you Africa; we help you protect it. A portion of every expedition 
              is directly reinvested into the communities and wildlife that make these 
              landscapes so extraordinary.
            </ParagraphBlock>

            <div className="space-y-8 mb-12">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="size-14 rounded-2xl bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <HeadingBlock level={4} className="mb-1">{item.title}</HeadingBlock>
                      <p className="text-sm text-muted-foreground m-0">{item.desc}</p>
                    </div>
                  </Motion.div>
                );
              })}
            </div>

            <Button 
              onClick={() => onNavigate("/sustainability")}
              className="px-8 py-4 rounded-xl font-bold group"
            >
              Explore Our Impact
              <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visuals */}
          <div className="relative">
            <Motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-background"
            >
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1000" 
                alt="Conservation in Africa"
                className="size-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <HeadingBlock level={3} className="text-white italic mb-2">"True discovery lies not in seeking new landscapes, but in having new eyes."</HeadingBlock>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest">— Safari Ethos</p>
              </div>
            </Motion.div>

            {/* Floating Achievement Card */}
            <Motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-left-16 z-20 bg-background p-8 rounded-[2rem] shadow-2xl border-2 border-primary/20 max-w-[240px]"
            >
              <div className="size-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground mb-4">
                <Shield className="size-6" />
              </div>
              <p className="text-fluid-3xl font-bold text-foreground mb-1">1.5M+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground m-0">Acres of habitat protected through tourism</p>
            </Motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ConservationSection;

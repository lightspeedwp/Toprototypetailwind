/**
 * Enquiry Modal Pattern Component
 * 
 * A conversion-focused modal dialog with an enquiry form.
 * Strictly adheres to design system tokens and BEM naming.
 */

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../blocks/ui/dialog";
import { Input } from "../blocks/ui/input";
import { Textarea } from "../blocks/ui/textarea";
import { Label } from "../blocks/ui/label";
import { Button } from "../blocks/design/Button";
import { CheckCircle2, Sparkles, Compass, ShieldCheck, Mail, Phone, User, MessageSquare } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";

interface EnquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  successMessage?: string;
}

export function EnquiryModal({
  open,
  onOpenChange,
  title = "Begin Your Expedition Chronicle",
  description = "Translate your vision into a definitive itinerary. Our master architects are ready to curate your unique African story.",
  successMessage = "Your dossier request has been received. An expedition specialist will contact you shortly to begin the design process.",
}: EnquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 500);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none rounded-[2rem] bg-background shadow-2xl">
        <div className="grid md:grid-cols-5 h-full">
          {/* Visual Sidebar */}
          <div className="md:col-span-2 relative hidden md:block overflow-hidden bg-primary">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801" 
              alt="Wilderness" 
              className="absolute inset-0 size-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent/20" />
            
            <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
              <div>
                <div className="size-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
                  <Compass className="size-6" />
                </div>
                <h3 className="text-3xl font-bold font-serif mb-6 leading-tight">The Art of Exploration</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-10">We define the intersection of profound wilderness and refined architecture.</p>
                
                <ul className="space-y-6 m-0 p-0 list-none">
                  {[
                    { icon: ShieldCheck, text: "Discrete Consultation" },
                    { icon: Sparkles, text: "Bespoke Design" },
                    { icon: Compass, text: "Expert Navigation" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                      <item.icon className="size-4 opacity-60" /> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-xs font-bold uppercase tracking-wider opacity-50">LightSpeed Studio &copy; 2026</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <DialogHeader className="mb-10 text-left">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px w-8 bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Inquiry Protocol</span>
                    </div>
                    <DialogTitle className="text-3xl font-bold font-serif mb-4 leading-tight">{title}</DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                      {description}
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                          <Input id="name" name="name" placeholder="E.g. Julian Vane" value={formData.name} onChange={handleChange} required className="pl-12 h-12 bg-muted/30 border-2 border-transparent focus:border-primary/20 transition-all rounded-xl" />
                        </div>
                      </div>
                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Digital Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                          <Input id="email" name="email" type="email" placeholder="julian@vane.com" value={formData.email} onChange={handleChange} required className="pl-12 h-12 bg-muted/30 border-2 border-transparent focus:border-primary/20 transition-all rounded-xl" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Vision Brief</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 size-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Textarea id="message" name="message" placeholder="Describe the atmosphere, territory, and narrative you wish to experience..." value={formData.message} onChange={handleChange} className="pl-12 pt-4 min-h-[120px] bg-muted/30 border-2 border-transparent focus:border-primary/20 transition-all rounded-xl resize-none" />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" variant="primary" className="w-full h-14 rounded-xl font-bold text-sm uppercase tracking-widest gap-3 shadow-xl">
                        Dispatch Request <Compass className="size-4" />
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground/60 uppercase tracking-wider font-bold">Absolute discretion guaranteed</p>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="size-24 rounded-[2rem] bg-success/10 flex items-center justify-center text-success mx-auto mb-10 shadow-sm">
                    <CheckCircle2 className="size-12" />
                  </div>
                  <h3 className="text-4xl font-bold font-serif mb-6 leading-tight">Dossier Request Dispatched</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto italic font-serif">
                    "{successMessage}"
                  </p>
                  <div className="mt-12 h-1 w-32 bg-muted mx-auto rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3.5 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EnquiryModal;

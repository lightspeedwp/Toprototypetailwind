/**
 * Social Links Component — WordPress `core/social-links` equivalent.
 * 
 * Displays a list of social media icons linking to external profiles.
 * 
 * @module SocialLinks
 * @category components/common
 */

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Mail,
  Globe,
} from "lucide-react";
import { cn } from "../../lib/utils";

export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "github"
  | "email"
  | "website";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

interface SocialLinksProps {
  /** Array of social links */
  links: SocialLink[];
  /** Icon size (default: "md") */
  size?: "sm" | "md" | "lg";
  /** Show labels (default: false) */
  showLabels?: boolean;
  /** Layout direction (default: "horizontal") */
  direction?: "horizontal" | "vertical";
  /** Additional CSS classes */
  className?: string;
}

const platformIcons: Record<string, any> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
  email: Mail,
  website: Globe,
};

export function SocialLinks({
  links,
  size = "md",
  showLabels = false,
  direction = "horizontal",
  className,
}: SocialLinksProps) {
  const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;

  return (
    <nav 
      aria-label="Social media links" 
      className={cn(
        "wp-block-social-links",
        direction === "vertical" && "flex-col",
        className
      )}
    >
      <ul className={cn(
        "flex flex-wrap gap-2 p-0 m-0 list-none",
        direction === "vertical" && "flex-col"
      )}>
        {links.map((link, index) => {
          const Icon = platformIcons[link.platform] || Globe;
          return (
            <li key={index} className="m-0">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3 p-2 rounded-full transition-all text-muted-foreground hover:text-primary hover:bg-primary/5",
                  showLabels && "pr-4"
                )}
                aria-label={link.label || `Follow us on ${link.platform}`}
              >
                <Icon size={iconSize} aria-hidden="true" />
                {showLabels && (
                  <span className="text-sm font-medium">{link.label || link.platform}</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SocialLinks;

'use client';

import Link from "next/link";

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

interface SocialMediaProps {
  links?: SocialLink[];
  enabled?: boolean;
}

const defaultLinks: SocialLink[] = [
  { name: "Facebook", url: "https://facebook.com", icon: "/facebook.svg" },
  { name: "Instagram", url: "https://instagram.com", icon: "/instagram.svg" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin.svg" },
  { name: "YouTube", url: "https://youtube.com", icon: "/youtube.svg" },
];

export function SocialMedia({ links = defaultLinks, enabled = true }: SocialMediaProps) {
  if (!enabled) return null;
  const toRender = links.length ? links : defaultLinks;
  return (
    <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2">
      <div className="flex flex-col items-center gap-4 rounded-tr-md rounded-br-md rounded-bl-none rounded-tl-none bg-primary/80 px-3 py-4 shadow-lg">
        {toRender.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-sm text-white transition hover:opacity-80"
            aria-label={link.name}
          >
            {link.icon ? (
              <img
                src={link.icon}
                alt={link.name}
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            ) : (
              <span className="text-lg">{link.name?.[0] ?? "?"}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;


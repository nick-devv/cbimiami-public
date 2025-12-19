'use client';

import Link from "next/link";
import { useState } from "react";
import { WPMenuItem } from "@/lib/wordpress/types";

interface NavigationProps {
  items: WPMenuItem[];
  ctaHref?: string;
  ctaLabel?: string;
  ctaIcon?: string;
}

export function Navigation({ items, ctaHref, ctaLabel = "Fazer Login", ctaIcon }: NavigationProps) {
  const [open, setOpen] = useState(false);
   const [mobileSub, setMobileSub] = useState<number | null>(null);

  const renderChildren = (children: WPMenuItem[] = []) => {
    if (!children.length) return null;
    return (
      <div className="absolute left-0 top-full z-20 hidden w-auto whitespace-nowrap rounded-sm bg-white shadow-lg group-hover:block md:group-hover:block hover:block">
        <ul className="py-2">
          {children.map((child) => (
            <li key={child.id}>
              <Link
                href={child.url || "#"}
                className="block px-4 py-2 font-display text-md font-bold text-primary hover:underline"
              >
                {child.title?.rendered ?? ""}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <nav className="w-full">
      <div className="flex items-center justify-end gap-6">
        <button
          className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-light text-primary md:hidden"
          aria-label="Alternar menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-lg font-bold">☰</span>
        </button>
        <ul
          className={`hidden items-center gap-11 text-md font-semibold text-primary-dark md:flex`}
        >
          {items.map((item) => (
            <li key={item.id} className="relative group">
              <Link href={item.url || "#"} className="flex items-center gap-2 text-primary-dark hover:underline">
                {item.title?.rendered ?? ""}
                {item.children && item.children.length > 0 && (
                  <img src="/arrowD.png" alt="submenu" className="opacity-60 group-hover:opacity-100" />
                )}
              </Link>
              {item.children && item.children.length > 0 && renderChildren(item.children)}
            </li>
          ))}
        </ul>
        {ctaHref && (
          <Link
            href={ctaHref}
            className="hidden items-center gap-2 rounded-sm bg-primary px-4 py-3 text-white transition hover:bg-primary-dark md:inline-flex"
          >
            {ctaIcon && <img src={ctaIcon} alt="" className="h-4 w-4" />}
            {ctaLabel}
          </Link>
        )}
      </div>
      {open && (
        <div className="mt-3 rounded-md bg-white p-4 shadow-md ring-1 ring-black/10 md:hidden">
          <ul className="flex flex-col gap-3 text-md font-semibold text-primary-dark">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <Link href={item.url || "#"} className="block py-1 text-primary-dark">
                    {item.title?.rendered ?? ""}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <button
                      className="text-primary text-lg leading-none"
                      aria-label="Mostrar submenu"
                      onClick={() => setMobileSub((prev) => (prev === item.id ? null : item.id))}
                    >
                      ▼
                    </button>
                  )}
                </div>
                {item.children && item.children.length > 0 && mobileSub === item.id && (
                  <div className="ml-3 mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.url || "#"}
                        className="text-sm font-medium text-primary-dark hover:underline"
                      >
                        {child.title?.rendered ?? ""}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {ctaHref && (
            <Link
              href={ctaHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-white"
            >
              {ctaIcon && <img src={ctaIcon} alt="" className="h-4 w-4" />}
              {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navigation;


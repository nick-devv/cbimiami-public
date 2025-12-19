import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { WPMenuItem } from "@/lib/wordpress/types";

interface HeaderProps {
  menuItems: WPMenuItem[];
  logoUrl?: string;
  siteName?: string;
  loginUrl?: string;
}

export function Header({ menuItems, logoUrl, siteName = "Projeto Headless CMS", loginUrl }: HeaderProps) {
  return (
    <header className="sticky top-10 z-30 w-full">
      <div className="container">
        <div className="flex items-center justify-between rounded-md bg-primary-light/90 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 whitespace-nowrap">
            <Image
              src={logoUrl || "/logo.png"}
              alt={`${siteName} logo`}
              width={128}
              height={48}
              style={{ width: "auto", height: "auto" }}
              className="h-12 w-auto"
            />
          </Link>
          <Navigation items={menuItems} ctaHref={loginUrl} ctaIcon="/user.svg" />
        </div>
      </div>
    </header>
  );
}

export default Header;


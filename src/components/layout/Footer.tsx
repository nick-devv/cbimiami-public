import Image from "next/image";
import Link from "next/link";
import { WPMenuItem } from "@/lib/wordpress/types";
import { formatDate } from "@/lib/utils";

interface FooterProps {
  menuItems: WPMenuItem[];
  legalMenu: WPMenuItem[];
  logoUrl?: string;
  siteName?: string;
  qrCodeUrl?: string;
}

function splitMenu(items: WPMenuItem[]) {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
}

export function Footer({ menuItems, legalMenu, logoUrl, siteName = "CBI", qrCodeUrl }: FooterProps) {
  const [colA, colB] = splitMenu(menuItems);

  return (
    <footer className="relative bg-primary-darker text-white">
      <div className="container py-space-xl">
        <div className="grid gap-[100px] md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-6 text-white">
            {[colA, colB].map((col, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                {col.map((item) => (
                  <Link key={item.id} href={item.url || "#"} className="text-2xl font-semibold text-white hover:underline">
                    {item.title?.rendered ?? ""}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex w-fit items-center justify-start rounded-lg bg-white p-6">
            <Image 
              src={logoUrl || "/logo.png"} 
              alt={`${siteName} logo`} 
              width={220} 
              height={80} 
              className="h-auto w-auto" 
              style={{ height: "auto", width: "auto" }} 
            />
          </div>
        </div>

        <div className="mt-[110px] flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white md:flex-row md:items-center md:justify-between">
          <p className="text-white">
            © {new Date().getFullYear()} {siteName}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-white">
            {legalMenu.map((item) => {
              
              const href = item.url === "/termos-uso" || item.title?.rendered?.toLowerCase().includes("termos de uso")
                ? "/politica-privacidade#terms"
                : item.url || "#";
              
              return (
                <Link key={item.id} href={href} className="underline text-white hover:text-primary-light">
                  {item.title?.rendered ?? ""}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {(qrCodeUrl || true) && (
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:block">
          <Image 
            src={qrCodeUrl || "/logoemec.png"} 
            alt="QR Code e-MEC" 
            width={120} 
            height={120} 
            className="h-auto w-auto" 
            style={{ height: "auto", width: "auto" }} 
          />
        </div>
      )}
    </footer>
  );
}

export default Footer;


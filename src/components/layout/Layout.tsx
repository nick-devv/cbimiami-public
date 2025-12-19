import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SocialMedia from "../floating/SocialMedia";
import WhatsAppButton from "../floating/WhatsAppButton";
import { getMenu } from "@/lib/wordpress/client";
import { WPMenuItem } from "@/lib/wordpress/types";
import { getGlobalScf } from "@/lib/wordpress/content";

interface LayoutProps {
  children: ReactNode;
  logoUrl?: string;
  siteName?: string;
}

async function loadMenus(): Promise<{
  header: WPMenuItem[];
  footer: WPMenuItem[];
  legal: WPMenuItem[];
}> {
  const [header, footer, legal] = await Promise.all([
    getMenu("header_menu"),
    getMenu("footer_menu"),
    getMenu("footer_legal_menu"),
  ]);
  return { header, footer, legal };
}

export default async function Layout({ children, logoUrl, siteName }: LayoutProps) {
  const [{ header, footer, legal }, scf] = await Promise.all([loadMenus(), getGlobalScf()]);

  const resolvedLogo = scf?.logo_url || logoUrl;
  const resolvedSiteName = scf?.site_name || siteName;
  const loginUrl = scf?.login_url || "/login";
  const loginIcon = scf?.login_icon || "/user.svg";
  const qrCodeUrl = scf?.qrcode_emec_url;

  const socialEnabled = scf?.social_enabled !== false;
  const socialLinks = scf?.social_links;

  const whatsappEnabled = scf?.whatsapp_enabled !== false;
  const whatsappPhone = scf?.whatsapp_phone;
  const whatsappLabel = scf?.whatsapp_label;
  const whatsappIcon = scf?.whatsapp_icon || "/whatsapp.svg";

  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Header menuItems={header} logoUrl={resolvedLogo} siteName={resolvedSiteName} loginUrl={loginUrl} />
      <main className="flex-1 pt-10">{children}</main>
      <Footer menuItems={footer} legalMenu={legal} logoUrl={resolvedLogo} siteName={resolvedSiteName} qrCodeUrl={qrCodeUrl} />
      <SocialMedia links={socialLinks} enabled={socialEnabled} />
      <WhatsAppButton
        enabled={whatsappEnabled}
        phone={whatsappPhone}
        label={whatsappLabel}
        icon={whatsappIcon}
      />
    </div>
  );
}


'use client';

import Link from "next/link";

interface WhatsAppButtonProps {
  phone?: string;
  label?: string;
  enabled?: boolean;
  icon?: string;
}

export function WhatsAppButton({
  phone = "5511999999999",
  label = "Fale conosco",
  icon = "/whatsapp.svg",
  enabled = true,
}: WhatsAppButtonProps) {
  if (!enabled) return null;
  const href = `https://wa.me/${phone}`;

  return (
    <Link
      href={href}
      className="fixed bottom-8 right-8 z-40 inline-flex items-center gap-3 rounded-lg bg-green px-4 py-3 text-white shadow-lg transition hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
    >
      {icon ? <img src={icon} alt="WhatsApp" className="h-7 w-7" /> : <span className="text-lg">💬</span>}
      <span className="text-lg font-semibold">{label}</span>
    </Link>
  );
}

export default WhatsAppButton;


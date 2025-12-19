'use client';

import { useState } from "react";

interface OrderByButtonProps {
  onChange?: (order: "date" | "title") => void;
}

export function OrderByButton({ onChange }: OrderByButtonProps) {
  const [order, setOrder] = useState<"date" | "title">("date");

  const toggle = () => {
    const next = order === "date" ? "title" : "date";
    setOrder(next);
    onChange?.(next);
  };

  return (
    <button
      className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-3 text-white transition hover:bg-primary-dark"
      onClick={toggle}
    >
      Ordenar por: {order === "date" ? "Data" : "Título"}
    </button>
  );
}

export default OrderByButton;


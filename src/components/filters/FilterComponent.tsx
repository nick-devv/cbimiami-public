'use client';

import { useState } from "react";
import { WPTerm } from "@/lib/wordpress/types";

export interface FilterGroup {
  taxonomy: string;
  label: string;
  placeholder?: string;
  terms: WPTerm[];
}

interface FilterComponentProps {
  filters: FilterGroup[];
  onChange?: (selection: Record<string, string>) => void;
  showSortBy?: boolean;
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FilterComponent({ filters, onChange, showSortBy = true }: FilterComponentProps) {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const handleChange = (taxonomy: string, value: string) => {
    const next = { ...selected, [taxonomy]: value };
    setSelected(next);
    onChange?.(next);
  };

  const visibleFilters = filters.filter(
    (f) => f.taxonomy !== "categoria_curso"
  );

  return (
    <div className="flex items-end justify-between">
      {}
      <div className="flex items-end gap-8">
        {visibleFilters.map((group) => (
          <div key={group.taxonomy} className="flex flex-col gap-2">
            {}
            <span className="text-md font-bold leading-6 text-primary-dark">
              {group.label}
            </span>
            
            {}
            <div className="relative">
              <select
                className="h-8 appearance-none rounded-sm border border-primary bg-white pl-5 pr-10 text-[15px] font-normal leading-6 text-primary-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                value={selected[group.taxonomy] ?? ""}
                onChange={(event) => handleChange(group.taxonomy, event.target.value)}
              >
                <option value="">
                  {group.placeholder || `Escolher ${group.label.toLowerCase().replace("área de ", "uma ").replace("tempo de ", "um ")}`}
                </option>
                {group.terms.map((term) => (
                  <option key={term.id} value={term.slug}>
                    {term.name}
                  </option>
                ))}
              </select>
              
              {}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        ))}
      </div>

      {}
      {showSortBy && (
        <button className="flex items-center gap-2 text-md font-bold leading-6 text-primary-dark hover:text-primary transition-colors">
          Ordenar por
          <ChevronDownIcon className="text-primary-dark" />
        </button>
      )}
    </div>
  );
}

export default FilterComponent;

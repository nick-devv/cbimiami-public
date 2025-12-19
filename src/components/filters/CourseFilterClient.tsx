'use client';

import { useEffect, useState, useRef } from "react";

export interface FilterOption {
  id: number;
  slug: string;
  name: string;
}

export interface FilterGroup {
  taxonomy: string;
  label: string;
  placeholder?: string;
  options: FilterOption[];
}

export interface SortOption {
  value: string;
  label: string;
}

const DEFAULT_SORT_OPTIONS: SortOption[] = [
  { value: "date-desc", label: "Mais recentes" },
  { value: "date-asc", label: "Mais antigos" },
  { value: "title-asc", label: "Título A-Z" },
  { value: "title-desc", label: "Título Z-A" },
];

interface CourseFilterClientProps {
  filters: FilterGroup[];
  onChange?: (selection: Record<string, string>) => void;
  onSortChange?: (sort: string) => void;
  selectedValues?: Record<string, string>;
  selectedSort?: string;
  showSortBy?: boolean;
  sortOptions?: SortOption[];
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

export function CourseFilterClient({ 
  filters, 
  onChange, 
  onSortChange,
  selectedValues,
  selectedSort = "date-desc",
  showSortBy = true,
  sortOptions = DEFAULT_SORT_OPTIONS,
}: CourseFilterClientProps) {
  const [selected, setSelected] = useState<Record<string, string>>(selectedValues || {});
  const [currentSort, setCurrentSort] = useState(selectedSort);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedValues) {
      setSelected(selectedValues);
    }
  }, [selectedValues]);

  useEffect(() => {
    if (selectedSort) {
      setCurrentSort(selectedSort);
    }
  }, [selectedSort]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (taxonomy: string, value: string) => {
    const next = { ...selected, [taxonomy]: value };
    setSelected(next);
    onChange?.(next);
  };

  const handleSortChange = (value: string) => {
    setCurrentSort(value);
    setIsSortOpen(false);
    onSortChange?.(value);
  };

  const currentSortLabel = sortOptions.find(opt => opt.value === currentSort)?.label || "Ordenar por";

  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      {}
      <div className="flex flex-wrap items-end gap-8">
        {filters.map((group) => (
          <div key={group.taxonomy} className="flex flex-col gap-2">
            {}
            <span className="text-md font-bold leading-6 text-primary-dark">
              {group.label}
            </span>
            
            {}
            <div className="relative">
              <select
                className="h-8 min-w-[180px] appearance-none rounded-sm border border-primary bg-white pl-5 pr-10 text-[15px] font-normal leading-6 text-primary-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                value={selected[group.taxonomy] ?? ""}
                onChange={(event) => handleChange(group.taxonomy, event.target.value)}
              >
                <option value="">
                  {group.placeholder || `Escolher`}
                </option>
                {group.options.map((option) => (
                  <option key={option.id} value={option.slug}>
                    {option.name}
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
        <div className="relative" ref={sortRef}>
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-md font-bold leading-6 text-primary-dark transition-colors hover:text-primary"
          >
            {currentSortLabel}
            <ChevronDownIcon className={`text-primary-dark transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
          </button>

          {}
          {isSortOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-sm border border-dark-300 bg-white py-2 shadow-lg">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`flex w-full items-center px-4 py-2 text-left text-[15px] transition-colors hover:bg-primary-light ${
                    currentSort === option.value 
                      ? "font-semibold text-primary" 
                      : "font-normal text-primary-dark"
                  }`}
                >
                  {option.label}
                  {currentSort === option.value && (
                    <svg 
                      className="ml-auto h-4 w-4 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CourseFilterClient;

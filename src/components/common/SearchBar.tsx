"use client";

import { useState, useCallback } from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = "Busque pelo curso",
  value: controlledValue,
  onChange,
  className = "",
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");
  
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  return (
    <div
      className={`flex items-center gap-1 rounded-sm border border-primary bg-white px-1 py-1 ${className}`}
    >
      {}
      <div className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center">
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-md leading-6 text-primary-dark outline-none placeholder:text-primary-dark/60"
      />
    </div>
  );
}

export default SearchBar;


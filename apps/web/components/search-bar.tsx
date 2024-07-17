// root/apps/web/components/search-bar.tsx
"use client";

import { Input } from "@semicolon/ui/input";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

// root/apps/web/components/search-bar.tsx

interface SearchBarProps {
  onSearch?: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-grow items-center justify-start"
    >
      <Search className="absolute left-6 block items-center" />
      <Input
        type="text"
        placeholder="Search"
        id="search"
        className="h-12 flex-grow rounded-full bg-transparent pl-16 text-base text-white"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

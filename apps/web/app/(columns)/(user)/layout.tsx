"use client";

import { SearchBar } from "@/components/search-bar";
import { Sticky } from "@/components/sticky";
import { Suggestions } from "@/components/suggestions";
import { Trends } from "@/components/trends";
import { Separator } from "@semicolon/ui/separator";
import { useRouter } from "next/navigation";
import React from "react";

const UserPageLayout: React.FC = ({ children }) => {
  const router = useRouter();

  const handleSearch = (query: string) => {
    if (query.trim() !== "") {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <>
      <div className="w-full min-w-[257px] md:max-w-[650px]">{children}</div>
      <Separator orientation="vertical" className="h-auto min-h-screen" />
      <div className="hidden min-h-full w-1/4 min-w-[300px] flex-none shrink-0 flex-col justify-start pl-[30px] pt-0 md:flex">
        <div id="search-bar" className="bg-card sticky top-0 z-10 py-4">
          <SearchBar onSearch={handleSearch} />
        </div>
        <Sticky top="#search-bar">
          <div className="flex flex-col gap-5">
            <Suggestions />
            <Trends />
            <div />
          </div>
        </Sticky>
      </div>
    </>
  );
};

export default UserPageLayout;

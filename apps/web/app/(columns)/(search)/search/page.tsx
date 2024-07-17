"use client";

import { BackHeader } from "@/components/back-header";
import { SearchBar } from "@/components/search-bar";
import { SearchResults } from "@/components/search-results";
import { Button } from "@semicolon/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@semicolon/ui/tabs";
import { Ellipsis } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

enum ActiveTab {
  Top = "top",
  Latest = "latest",
  People = "people",
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("q") || "";

  const [query, setQuery] = useState<string>(queryParam);
  const [activeTab, setActiveTab] = useState(ActiveTab.Top);

  useEffect(() => {
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [queryParam]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    router.push(`/search?q=${newQuery}`);
  };

  return (
    <Tabs
      className="flex h-full flex-col"
      defaultValue={ActiveTab.Top}
      onValueChange={(value) => setActiveTab(value as ActiveTab)}
    >
      <div className="bg-card sticky top-0 z-40 flex flex-col gap-1">
        <BackHeader className="flex flex-row px-3">
          <SearchBar onSearch={handleSearch} initialValue={query} />
          <Button
            variant="ghost"
            size="icon"
            className="aspect-square size-fit rounded-full p-2"
          >
            <Ellipsis className="flex-none" size={19} />
          </Button>
        </BackHeader>
        <TabsList>
          <TabsTrigger value={ActiveTab.Top}>Top</TabsTrigger>
          <TabsTrigger value={ActiveTab.Latest}>Latest</TabsTrigger>
          <TabsTrigger value={ActiveTab.People}>People</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value={ActiveTab.Top}>
        <div className="mb-4 flex flex-col">
          <SearchResults query={query} activeTab={ActiveTab.Top} />
        </div>
      </TabsContent>
      <TabsContent value={ActiveTab.Latest}>
        <div className="mb-4 flex flex-col">
          <SearchResults query={query} activeTab={ActiveTab.Latest} />
        </div>
      </TabsContent>
    </Tabs>
  );
}

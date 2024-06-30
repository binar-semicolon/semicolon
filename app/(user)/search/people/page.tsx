"use client";

import { PostForm } from "@/components/post-form";
import { SearchBar } from "@/components/search-bar";
import { SearchFeedHeader } from "@/components/search-feed-header";
import { SearchResultUser } from "@/components/search-results-user";
import { Tweet } from "@/components/tweet";
import { Separator } from "@/components/ui/separator";
import _ from "lodash";
import React, { useState } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-40 bg-card pl-4 pr-4 pt-4">
        <SearchBar onSearch={setSearchTerm} />
        <SearchFeedHeader />
        <Separator />
      </div>
      <div className="mb-4 flex flex-col">
        <SearchResultUser searchTerm={searchTerm} />
      </div>
    </div>
  );
}

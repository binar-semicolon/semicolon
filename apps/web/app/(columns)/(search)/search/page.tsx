"use client";

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

  return <div>hello world</div>;
}

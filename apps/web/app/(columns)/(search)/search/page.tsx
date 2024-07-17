"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [params, setParams] = useState<Record<"query" | "tab", string | null>>({
    query: null,
    tab: null,
  });

  useEffect(() => {
    const query = searchParams.get("q");
    if (query === null) {
      redirect("/home");
    }

    const tab = searchParams.get("f");
    if (![null, "latest", "people"].includes(tab)) {
      const updated = new URLSearchParams(searchParams.toString());
      updated.delete("f");
      window.history.replaceState(null, "", `?${updated.toString()}`);
    }

    setParams({ query, tab });
  }, [searchParams]);

  return <div>hello world</div>;
}

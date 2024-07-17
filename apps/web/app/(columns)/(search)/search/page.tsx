"use client";

import { PostFeed } from "@/components/post-feed";
import { trpc } from "@/lib/trpc-client";
import { PostResolved } from "@semicolon/api/schema";
import { skipToken } from "@tanstack/react-query";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { z } from "zod";

export default function Page() {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<{
    query: string;
    tab: "rel" | "latest" | "people";
  } | null>(null);
  const [results, setResults] = useState<PostResolved[]>([]);
  const {
    data: rawResults,
    fetchNextPage,
    isLoading,
    isLoadingError,
    isFetchingNextPage,
    isFetchNextPageError,
    hasNextPage,
    refetch,
  } = trpc.post.search.useInfiniteQuery(
    params ? { query: params.query, maxResults: 15 } : skipToken,
    { getNextPageParam: (lastPage) => lastPage.nextCursor },
  );

  useEffect(() => {
    setResults((rawResults?.pages ?? []).flatMap((page) => page.results));
  }, [rawResults]);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query === null) {
      redirect("/home");
    }

    const { data: tab } = z
      .union([z.null(), z.literal("latest"), z.literal("people")])
      .safeParse(searchParams.get("f"));

    if (!tab) {
      const updated = new URLSearchParams(searchParams.toString());
      updated.delete("f");
      window.history.replaceState(null, "", `?${updated.toString()}`);
      setParams({ query, tab: "rel" });
    } else {
      setParams({ query, tab });
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center">
      <PostFeed
        posts={results}
        loading={isLoading || isFetchingNextPage}
        error={isLoadingError || isFetchNextPageError}
        fetchNextPage={fetchNextPage}
        refetch={refetch}
        hasNextPage={hasNextPage}
      />
      {rawResults?.pages[0]?.results.length === 0 && (
        <article className="flex max-w-[450px] flex-col gap-3 p-9">
          <p className="text-3xl font-black">
            No results for {`"${params?.query}"`}
          </p>
          <p className="text-muted-foreground text-base">
            Try searching for something else, or check if you made a mistake in
            your query.
          </p>
        </article>
      )}
    </div>
  );
}

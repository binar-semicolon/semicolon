import { PostFeed } from "@/components/post-feed";
import { trpc } from "@/lib/trpc";
import React, { useState, useEffect } from "react";

interface SearchResultsProps {
  query: string;
  activeTab: "top" | "latest" | "people";
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  activeTab,
}) => {
  const { data, isLoading, error, refetch, fetchNextPage, hasNextPage } =
    trpc.search.searchPosts.useQuery({
      query,
      activeTab,
    });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { postResults = [], userResults = [] } = data || {};

  if (activeTab === "people") {
    return (
      <div className="flex flex-col">
        {userResults.length === 0 && <p>No users found.</p>}
        {userResults.map((user) => (
          <div key={user.id}>
            <img src={user.image} alt={`${user.name}'s profile`} />
            {user.name} (@{user.username})
          </div>
        ))}
      </div>
    );
  }

  return (
    <PostFeed
      posts={postResults}
      loading={isLoading}
      error={!!error}
      fetchNextPage={fetchNextPage}
      refetch={refetch}
      hasNextPage={hasNextPage}
    />
  );
};

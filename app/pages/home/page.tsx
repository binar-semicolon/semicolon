"use client";

import FeedHeader from "@/components/feed-header";
import PostForm from "@/components/post-form";
import SearchBar from "@/components/search-bar";
import Sidebar from "@/components/sidebar";
import Suggestions from "@/components/suggestions";
import Trends from "@/components/trends";
import Tweet from "@/components/tweet";
import React from "react";

const IndexPage: React.FC = () => {
  return (
    <div className=" text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="w-1/2 flex flex-col items-center">
          {/* FeedHeader */}
          <div className="mb-4">
            <FeedHeader />
          </div>

          {/* PostForm */}
          <div className="mb-4">
            <PostForm />
          </div>

          {/* Tweet */}
          <div className="mb-4">
            <Tweet
              username="example_user"
              date="2024-06-21"
              content="This is a sample tweet content."
              feeling="🤩 happy"
            />
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-1/4">
          {/* SearchBar */}
          <div className="mb-4">
            <SearchBar />
          </div>

          {/* Suggestions */}
          <div className="mb-4">
            <Suggestions />
          </div>

          {/* Trends */}
          <div>
            <Trends />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

"use client";

import { SearchBar } from "@/components/search-bar";
import { SearchFeedHeader } from "@/components/search-feed-header";
import { Tweet } from "@/components/tweet";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

type Tweet = {
  name: string;
  username: string;
  date: string;
  content: string;
};

const tweets: Tweet[] = [
  {
    name: "John Doe",
    username: "johndoe",
    date: "2024-06-01",
    content: "Just had a great day at the beach!",
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    date: "2024-06-02",
    content: "Loving the new coffee shop in town.",
  },
  {
    name: "Alice Johnson",
    username: "alicej",
    date: "2024-06-03",
    content: "Excited for the upcoming tech conference!",
  },
  {
    name: "Bob Brown",
    username: "bobb",
    date: "2024-06-04",
    content: "Just finished reading a fantastic book.",
  },
  {
    name: "Charlie White",
    username: "charliew",
    date: "2024-06-05",
    content: "Had an amazing time hiking today.",
  },
  {
    name: "Diana Green",
    username: "dianag",
    date: "2024-06-06",
    content: "Enjoying the beautiful sunset.",
  },
  {
    name: "Evan Blue",
    username: "evanb",
    date: "2024-06-07",
    content: "Just saw an incredible movie!",
  },
  {
    name: "Fiona Black",
    username: "fionab",
    date: "2024-06-08",
    content: "Loving the new art exhibit downtown.",
  },
  {
    name: "George Yellow",
    username: "georgey",
    date: "2024-06-09",
    content: "Just cooked a delicious meal!",
  },
  {
    name: "Hannah Red",
    username: "hannahr",
    date: "2024-06-10",
    content: "Had a great workout this morning.",
  },
  {
    name: "Isaac Grey",
    username: "isaacg",
    date: "2024-06-11",
    content: "Just started a new hobby: painting.",
  },
  {
    name: "Jenna Purple",
    username: "jennap",
    date: "2024-06-12",
    content: "Excited for the weekend!",
  },
  {
    name: "Kevin Orange",
    username: "kevino",
    date: "2024-06-13",
    content: "Just finished a big project at work.",
  },
  {
    name: "Lily Pink",
    username: "lilyp",
    date: "2024-06-14",
    content: "Enjoying a relaxing day at home.",
  },
  {
    name: "Mike Silver",
    username: "mikes",
    date: "2024-06-15",
    content: "Just learned a new recipe.",
  },
  {
    name: "Nina Gold",
    username: "ninag",
    date: "2024-06-16",
    content: "Had a fantastic time with friends today.",
  },
  {
    name: "Oscar Bronze",
    username: "oscarb",
    date: "2024-06-17",
    content: "Just started a new fitness challenge.",
  },
  {
    name: "Paula Violet",
    username: "paulav",
    date: "2024-06-18",
    content: "Loving the new book I'm reading.",
  },
  {
    name: "Quincy Teal",
    username: "quincyt",
    date: "2024-06-19",
    content: "Just got a new job!",
  },
  {
    name: "Rachel Indigo",
    username: "racheli",
    date: "2024-06-20",
    content: "Had an amazing vacation.",
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTweets = tweets.filter(
    (tweet) =>
      tweet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tweet.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tweet.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-40 bg-card pl-4 pr-4 pt-4">
        <SearchBar onSearch={setSearchTerm} />
        <SearchFeedHeader />
        <Separator />
      </div>
      <Separator />
      <div className="mb-4 flex flex-col">
        {filteredTweets.map((tweet) => (
          <React.Fragment key={tweet.username}>
            <Tweet
              name={tweet.name}
              username={tweet.username}
              date={tweet.date}
              content={tweet.content}
            />
            <Separator />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

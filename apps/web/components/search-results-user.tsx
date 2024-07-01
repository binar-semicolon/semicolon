import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { BadgeCheck } from "lucide-react";
import React from "react";

const suggestions = [
  {
    name: "John Doe",
    username: "john_doe",
    avatar: "",
    bio: "Passionate traveler and food lover.",
  },
  {
    name: "Jane Smith",
    username: "jane_smith",
    avatar: "",
    bio: "Digital artist and coffee addict.",
  },
  {
    name: "Alice Johnson",
    username: "alice_j",
    avatar: "",
    bio: "Tech enthusiast and blogger.",
  },
  {
    name: "Bob Brown",
    username: "bob_brown",
    avatar: "",
    bio: "Fitness junkie and health coach.",
  },
  {
    name: "Charlie Davis",
    username: "charlie_d",
    avatar: "",
    bio: "Gamer and software developer.",
  },
  {
    name: "Diana Wilson",
    username: "diana_w",
    avatar: "",
    bio: "Nature photographer and hiker.",
  },
  {
    name: "Ethan Moore",
    username: "ethan_m",
    avatar: "",
    bio: "Aspiring chef and food critic.",
  },
  {
    name: "Fiona Taylor",
    username: "fiona_t",
    avatar: "",
    bio: "Musician and cat lover.",
  },
  {
    name: "George Anderson",
    username: "george_a",
    avatar: "",
    bio: "History buff and bookworm.",
  },
  {
    name: "Hannah Thomas",
    username: "hannah_t",
    avatar: "",
    bio: "Fashion designer and trendsetter.",
  },
  {
    name: "Ian White",
    username: "ian_w",
    avatar: "",
    bio: "Entrepreneur and startup mentor.",
  },
  {
    name: "Jasmine Lewis",
    username: "jasmine_l",
    avatar: "",
    bio: "Fitness trainer and yoga instructor.",
  },
  {
    name: "Kevin Harris",
    username: "kevin_h",
    avatar: "",
    bio: "Photographer and travel blogger.",
  },
  {
    name: "Laura Clark",
    username: "laura_c",
    avatar: "",
    bio: "Graphic designer and illustrator.",
  },
  {
    name: "Michael King",
    username: "michael_k",
    avatar: "",
    bio: "Tech entrepreneur and coder.",
  },
  {
    name: "Nina Baker",
    username: "nina_b",
    avatar: "",
    bio: "Writer and avid reader.",
  },
  {
    name: "Oscar Martinez",
    username: "oscar_m",
    avatar: "",
    bio: "Digital marketer and SEO expert.",
  },
  {
    name: "Paula Lopez",
    username: "paula_l",
    avatar: "",
    bio: "Baker and cake decorator.",
  },
  {
    name: "Quincy Robinson",
    username: "quincy_r",
    avatar: "",
    bio: "Musician and music producer.",
  },
  {
    name: "Rachel Green",
    username: "rachel_g",
    avatar: "",
    bio: "Interior designer and DIY enthusiast.",
  },
];

export function SearchResultUser({ searchTerm }) {
  const filteredSuggestions = suggestions.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.bio.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-6 pt-4">
          {filteredSuggestions.map((user) => (
            <div key={user.username} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0">
                  <Avatar className="size-11">
                    <AvatarImage width={300} height={300} src={user.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col pl-2">
                    <span className="flex flex-row items-center gap-2 text-base font-bold">
                      <p className="truncate">{user.name}</p>
                      <BadgeCheck className="size-5 flex-none stroke-sky-400" />
                    </span>
                    <p className="truncate text-sm text-muted-foreground">
                      @{user.username}
                    </p>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="cursor-pointer rounded-full font-bold text-black"
                >
                  Follow
                </Button>
              </div>
              <p className="pl-2 text-sm text-muted-foreground">{user.bio}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

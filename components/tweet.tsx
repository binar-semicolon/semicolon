import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgeCheck, Ellipsis, Heart, OctagonAlert, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TweetProps {
  username: string;
  date: string;
  content: string;
  feeling: string;
  image?: string;
}

export function Tweet({ username, date, content, image }: TweetProps) {
  return (
    <div className="flex w-full flex-row gap-3 p-4">
      <div className="pt-2">
        <Avatar className="size-11">
          <AvatarImage width={300} height={300} src="/images/az-profile.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex w-full min-w-0 flex-col">
        <div className="flex items-center justify-between gap-2">
          <div className="flex w-full min-w-0 flex-col items-start justify-start gap-2 sm:flex-row sm:items-center">
            <div className="flex min-w-0 max-w-full gap-1">
              <div className="flex min-w-0 flex-row items-center gap-1 text-sm">
                <p className="truncate font-bold">{username}</p>
                <BadgeCheck className="size-5 flex-none stroke-sky-400" />
              </div>
            </div>
            <div className="flex min-w-0 max-w-full flex-row items-center gap-1">
              <p className="truncate align-middle text-sm text-muted-foreground">
                @{username}
              </p>
              <p className="align-middle text-sm text-muted-foreground">•</p>
              <p className="align-middle text-sm text-muted-foreground">
                {date}
              </p>
            </div>
          </div>
          <Ellipsis className="flex-none" />
        </div>
        <p className="text-wrap py-2.5 text-sm leading-7">{content}</p>

        {image && (
          <div className="my-3 flex items-center justify-center">
            <Image
              src={image}
              alt="tweet-image"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="flex w-full items-center justify-between px-3">
          <Link
            href="#"
            className="cursor flex items-center justify-start gap-3"
          >
            <Heart className="size-5 stroke-muted-foreground" />
            <p className="hidden text-sm font-normal text-muted-foreground sm:block">
              0 Likes
            </p>
          </Link>
          <Link
            href="#"
            className="cursor flex items-center justify-start gap-3"
          >
            <Trash className="size-5 stroke-muted-foreground" />
            <p className="hidden text-sm font-normal text-muted-foreground sm:block">
              Delete
            </p>
          </Link>
          <Link href="#" className="flex items-center justify-start gap-3">
            <OctagonAlert className="size-5 stroke-muted-foreground" />
            <p className="hidden text-sm font-normal text-muted-foreground sm:block">
              Report
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

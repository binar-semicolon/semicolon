import { Input } from "./ui/input";
import Image from "next/image";
import React from "react";

const SearchBar = () => (
  <div className="pl-[30px] flex items-center justify-start rounded-full bg-secondary">
    <Image
      src="/images/search-normal-dim.svg"
      alt="search"
      width={26}
      height={26}
      className="w-6 h-6 ml-4 mr-3"
    />
    <Input
      type="text"
      placeholder="Search"
      id="search"
      className="w-[484px] h-[48px] py-3 text-white bg-secondary text-base placeholder:text-base placeholder:text-paragraph rounded-full focus:outline-none focus:ring-0 focus:font-semibold"
    />
  </div>
);

export default SearchBar;

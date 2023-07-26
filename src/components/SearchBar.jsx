import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const SearchBar = () => {
  return (
    <div className="w-[40rem] text-gray-200/60 h-8 rounded-2xl bg-gray-100 flex items-center px-5">
      <div>
        <MagnifyingGlass color="rgba(104, 118, 132, 0.6)" size={16} />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full px-3 text-base  placeholder:text-gray-200/60 focus:ring-transparent  "
        />
      </div>
      <p>cmd+k</p>
    </div>
  );
};

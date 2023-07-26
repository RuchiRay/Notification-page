import React from "react";
import { Sun } from "@phosphor-icons/react";
import monkey from "../img/monkey.png";
import { SearchBar } from "./SearchBar";
export const Navbar = () => {
  return (
    <div className="w-full bg-white px-6 h-14 flex justify-between items-center">
      <p className="text-base font-semibold ">Notifications</p>
      <SearchBar />
      <div className="flex items-center gap-4">
        <Sun color="#687684" size={20} />
        <div>
          <img className="rounded-full" src={monkey} alt="" />
        </div>
      </div>
    </div>
  );
};

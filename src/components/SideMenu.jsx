import React from "react";
import logo from "../img/logo.png";
import {
  House,
  Users,
  ShareNetwork,
  ListMagnifyingGlass,
  BookmarkSimple,
  BellSimple,
} from "@phosphor-icons/react";

export const SideMenu = () => {
  return (
    <div className="border-r w-16 bg-white flex flex-col items-center border-r-gray-100 min-h-screen">
      <div className="mt-4">
        <img src={logo} alt="" />
      </div>
      <div className="w-full flex gap-4 flex-col items-center mt-14">
        <div className="w-full py-2 border-r-[3px] border-r-blue-primary flex items-center justify-center">
          <House size={20} />
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          <Users color="#687684" size={20} />
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          <ShareNetwork color="#687684" size={20} />
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          <ListMagnifyingGlass color="#687684" size={20} />
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          <BookmarkSimple color="#687684" size={20} />
        </div>
        <div className="w-full py-2 relative flex items-center justify-center">
          <BellSimple color="#687684" size={20} />
          <div className="absolute rounded-full w-[9px] h-[9px] right-6 top-2 bg-orange-400"></div>
        </div>
      </div>
    </div>
  );
};

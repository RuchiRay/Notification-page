import React from "react";
import { SideMenu } from "../components/SideMenu";
import { Navbar } from "../components/Navbar";

export const Notifications = () => {
  return (
    <div className="w-full flex">
      <SideMenu />
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

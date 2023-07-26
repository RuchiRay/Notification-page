import React from "react";
import { SideMenu } from "../components/SideMenu";
import { Navbar } from "../components/Navbar";
import { NotificationCard } from "../components/NotificationCard";
import girl from "../img/girl.png";
import monkey2 from "../img/monkey2.png";
export const Notifications = () => {
  return (
    <div className="w-full flex">
      <SideMenu />
      <div className="w-full">
        <Navbar />
        <div className="w-full mt-6 flex items-center flex-col">
          <div>
            <h1 className="font-semibold text-xl">Your Notification</h1>
            <div className="w-[40rem] h-[1px] my-4 bg-gray-200/10"></div>
            <div className="flex flex-col gap-4 mb-12">
              <NotificationCard
                type="like"
                images={[girl, monkey2]}
                names={["ellie", "kassadin"]}
                number={4}
                title="others liked your post"
                description={[
                  "Received DAI worth $105 at Bscscan and swapped it for sUSD at 1inch Network.",
                  " Transferred the sUSD to Safock. Cast at Safock",
                ]}
              />
              <NotificationCard
                type="follow"
                images={[girl, monkey2]}
                names={["ellie", "kassadin"]}
                number={32}
                title="others followed you"
                description={[
                  "Received DAI worth $105 at Bscscan and swapped it for sUSD at 1inch Network.",
                  " Transferred the sUSD to Safock. Cast at Safock",
                ]}
              />
              <NotificationCard
                type="comment"
                images={[girl, girl]}
                names={["ellie", "kassadin"]}
                number={4}
                title="others commented on your activity"
                description={[
                  "Received DAI worth $105 at Bscscan and swapped it for sUSD at 1inch Network.",
                  " Transferred the sUSD to Safock. Cast at Safock",
                ]}
              />
              <NotificationCard
                type="like"
                images={[girl, monkey2]}
                names={["ellie", "kassadin"]}
                number={4}
                title="others liked an activity you were mentioned in"
                description={[
                  "Received DAI worth $105 at Bscscan and swapped it for sUSD at 1inch Network.",
                  " Transferred the sUSD to Safock. Cast at Safock",
                ]}
              />
              <NotificationCard
                type="suggestion"
                images={[girl]}
                names={["ellie"]}
                title="Community suggested changes to bundle"
                description={[
                  "Name: Ellie Rose (previously Ellias RT)",
                  "Wallets: Added 0xA87J, 0x89NH to bundle",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

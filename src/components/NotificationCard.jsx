import React from "react";
import {
  HeartStraight,
  User,
  ChatText,
  CirclesThree,
} from "@phosphor-icons/react";

export const NotificationCard = ({
  type,
  description,
  images,
  names,
  number,
  title,
}) => {
  return (
    <div className="w-[40rem] border border-gray-200/10 rounded py-5 px-8 bg-white flex gap-6">
      <div>
        {(type === "like" && (
          <HeartStraight size={24} weight="fill" color="red" />
        )) ||
          (type === "follow" && (
            <User size={24} color="#687684" weight="fill" />
          )) ||
          (type === "comment" && (
            <ChatText color="#687684" size={24} weight="fill" />
          )) ||
          (type === "suggestion" && (
            <CirclesThree color="#687684" size={24} weight="fill" />
          ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex  relative w-[52px]">
          {images?.map((item, index) => {
            return (
              <div key={index} className={index === 1 && "absolute right-0"}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 font-medium text-[15px]">
          {names?.map((item, index) => {
            return (
              <p key={index}>
                {item}
                {(index === 0 && type !== "suggestion" && ",") ||
                  (index === 0 && ":")}
              </p>
            );
          })}
          <p className="font-normal text-black/60">
            {number && `+${number} `}
            {title}
          </p>
        </div>
        <div className="text-[13px] text-black/40">
          {description?.map((item, index) => {
            return <p>{item}</p>;
          })}
        </div>
        {type === "suggestion" && (
          <div className="flex gap-2 text-[13px]">
            <button className="bg-blue-primary text-white w-[72px] h-7 rounded-2xl">
              Accept
            </button>
            <button className="w-[72px] h-7 rounded-2xl text-gray-200 bg-gray-bg">
              Discard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

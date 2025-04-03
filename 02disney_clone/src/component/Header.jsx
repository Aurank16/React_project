import React from "react";
import disney from "../assets/ Image/disney.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritems from "./Headeritems";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center gap-8 justify-between w-screen p-5 f">
      <div className="flex gap-8 items-center">
        <img src={disney} className="w-[80px] md:w-[115px] object-cover" />

        {/* for desktop view */}
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <Headeritems name={item.name} Icon={item.icon} />
          ))}
        </div>
        {/* for mobile view */}
        <div className="flex gap-8 md:hidden ">
          {menu.map((item,index) =>index<3&& (
            <Headeritems name={item.name} Icon={item.icon} />
          ))}
          <div className="md:hidden">
          <Headeritems name={""} Icon={HiDotsVertical} />
          </div>
          
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;

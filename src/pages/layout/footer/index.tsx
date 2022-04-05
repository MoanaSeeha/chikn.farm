import React from "react";

import { ToolButton } from "../../../components/Button";

const Footer = () => {
  return (
    <div className=" flex flex-col relative bottom-0 bg-[#2a2c54] w-full px-16 py-12 text-white">
      <div className=" flex md:flex-row flex-col">
        <div className="flex flex-col md:basis-9/12 space-y-3">
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="w-24 py-3 -mt-3" alt="Logo" />
          8,888 Wolves that act as a vehicle for humans to interact in our journey of the Wolf
        </div>
        <div className="flex flex-row md:basis-3/12">
          <div className="flex flex-col basis-1/2 text-lg">
            <div className="chikn-red">Site</div>
            <div>Home</div>
            <div>Mint</div>
            <div>Chikn</div>
            <div className="ml-2">Roost</div>
            <div className="ml-2">Leaderboard</div>
            <div>FarmLand</div>
            <div className="ml-2">LP Farm</div>
            <div className="ml-2">Tiles / Traits</div>
            <div>Wallet</div>
            <div className="ml-2">Chikn</div>
            <div className="ml-2">FarmLand</div>
            </div>
          <div className="flex flex-col basis-1/2 text-lg">
            <div className="chikn-red">Other</div>
            <div>Roadmap</div>
            <div>Status</div>
            <div>Terms</div>
            <div>Docs</div>
            <div>API</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

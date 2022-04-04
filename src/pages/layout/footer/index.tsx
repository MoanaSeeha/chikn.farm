import React from "react";

import { ToolButton } from "../../../components/Button";

const Footer = () => {
  return (
    <div className=" flex flex-col relative bottom-0 bg-[#2a2c54] w-full px-16 py-12 text-white">
      <div className=" flex flex-row">
        <div className="flex flex-col basis-9/12 space-y-3">
          <img src={process.env.PUBLIC_URL + '/img/logo.svg'} className="w-24 py-3 -mt-3" alt="Logo" />
          10,000 algorithmically generated, unique chikn NFTs that lay $egg
          <div className="my-12 flex flex-col space-y-2">
            <div className="chikn-red">Contracts</div>
            <div className=" flex flex-row items-center text-slate-500">
              <div className=" w-32">Chikn</div>
              <ToolButton buttonProps={[
                {title: '0x89...3b79'},
                {icon: 'eye'}
              ]}/>
            </div>
            <div className=" flex flex-row items-center text-slate-500">
              <div className=" w-32">FarmLand</div>
              <ToolButton buttonProps={[
                {title: '0x66...32b4'},
                {icon: 'eye'}
              ]}/>
            </div>
            <div className=" flex flex-row items-center text-slate-500">
              <div className=" w-32">$EGG</div>
              <ToolButton buttonProps={[
                {title: '0x90...8d92'},
                {icon: 'eye'},
                {icon: 'wallet'},
              ]}/>
            </div>
            <div className=" flex flex-row items-center text-slate-500">
              <div className=" w-32">FEED</div>
              <ToolButton buttonProps={[
                {title: '0x89...3b79'},
                {icon: 'eye'},
                {icon: 'wallet'},
              ]}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-3/12">sadfafsew</div>
      </div>
    </div>
  );
};

export default Footer;

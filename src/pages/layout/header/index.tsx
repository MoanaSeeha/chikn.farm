import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ToolButton } from '../../../components/Button';
import NormalNavbar from './NormalNavbar';
import MobileNavbar from './MobileNavbar';

declare global {
  interface Window {
    ethereum: any;
  }
}

const Header = () => {
  return (
    <div className=" bg-[#2a2c54] border-b border-b-xs pt-2 fixed left-0 top-0 z-50 w-full font-sans items-center flex flex-wrap justify-between">
      <div className=" items-center flex flex-wrap justify-between max-w-6xl mx-auto space-x-3 bg-inherit">
        <NormalNavbar/>
        <MobileNavbar/>
      </div>
    </div>
  );
};

export default Header;

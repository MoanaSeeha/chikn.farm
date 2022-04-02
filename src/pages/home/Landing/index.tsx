import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';

const Landing = () => {
  return (
    <>
      <div className="relative w-[100vw] h-[40vw]">

      <ParallaxBanner
      layers={[
        { children: (<img src={process.env.PUBLIC_URL+'/img/layer3.png'} alt="" className="absolute z-1 bottom-1/4 sm:bottom-[10%] w-[100vw]"/>), speed: 10, opacity: [0.5, 1],},
        { children: (<img src={process.env.PUBLIC_URL+'/img/layer2.png'} alt="" className="absolute z-2 bottom-1/4 sm:bottom-[10%] w-[100vw]"/>), speed: 15},
        { children: (<img src={process.env.PUBLIC_URL+'/img/layer1.png'} alt="" className="absolute z-3 bottom-1/4 sm:bottom-[10%] w-[100vw]"/>), speed: 20},
        { children: (
        <div className="absolute flex flex-col items-center lg:bottom-1/3 md:bottom-1/4 bottom-1/4 z-4 left-1/2 -translate-x-1/2 space-y-4">
          <img src={process.env.PUBLIC_URL+'/img/logo.svg'} alt="" className="w-[18vw]"/>
          <img src={process.env.PUBLIC_URL+'/img/download.svg'} alt="" className="w-[4.5vw]"/>
        </div>), speed: 50},

      ]}
      className="aspect-[2/1]"
    />
      </div>

    </>
  )
}

export default Landing;
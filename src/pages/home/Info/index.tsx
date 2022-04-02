import React from "react";

import { Button } from '../../../components/Button';
import ChiknImgSlide from './ChiknImgSlide';
import Welcome from './Welcome';
import IllustrationEcosystem from './IllustrationEcosystem/index';
import JoinDiscord from './JoinDiscord';

const Info = () => {
  return (
    <>
      <div className="bg-[#191a32] py-20 md:py-60 px-20">
        <div className="relative flex flex-col justify-center space-y-4 mb-24">
          <div className="absolute w-full h-full">
            <img src={process.env.PUBLIC_URL+'/img/Web_Egg_02.png'} alt="" className="absolute top-1/2 -translate-y-1/2 h-[300px] -rotate-12 object-contain"/>
            <img src={process.env.PUBLIC_URL+'/img/Web_Egg_01.png'} alt="" className="absolute top-1/2 h-[250px] object-contain -rotate-45"/>
          </div>
          <div className="inline-block mx-auto text-4xl text-[#df3f3d]">Buy chikn, lay $egg!</div>
          <div className="mx-auto"><Button title="Check out the market"/></div>
        </div>
        <div className="text-center mt-48">
          <h1 className="text-4xl text-[#df3f3d]">10,000
            <span className="text-4xl text-white"> algorithmically generated, unique chikn</span>
          </h1>
          <h1 className="text-5xl text-white mt-4 mb-4">NFTs that lay $egg</h1>
        </div>
        <ChiknImgSlide/>
        <Welcome/>
        <IllustrationEcosystem/>
        <JoinDiscord/>
      </div>
    </>
  )
}

export default Info;
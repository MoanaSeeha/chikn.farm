import React from "react";
import Marquee from "react-fast-marquee";

const ChiknImgSlide = () => {
  const img_url = process.env.PUBLIC_URL+'/img/Chikn_WebPreview_0';

  let chikns:string[] = [];
  for (let i = 1; i < 8; i++) {
    chikns.push(img_url+i+'.jpg') 
  }

  return (
    <div className="md:mx-auto sm:px-8 mt-16 max-w-7xl">
        <Marquee direction="left" speed={50} gradient={false}>
          <div className="flex space-x-5 ml-5">
            {chikns.map((chikn, i) => (
              <img src={chikn} alt="" key={i} className=" rounded-lg" loading="lazy"/>
            ))}
          </div>
        </Marquee>
      </div>
  )
}

export default ChiknImgSlide
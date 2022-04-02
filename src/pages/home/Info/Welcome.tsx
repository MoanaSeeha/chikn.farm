import React from "react";

const Welcome = () => (
  <div className="flex md:flex-row flex-col md:mx-auto my-40 lg:justify-between justify-evenly items-center space-x-12 max-w-[1400px]">
    <img src={process.env.PUBLIC_URL+'/img/Web_Silhouette_01.png'} alt="" className=" md:w-1/2 md:h-1/2 w-full h-full max-w-xl"/>
    <div>
      <div className=" text-white text-xl space-y-7">
        <h1 className="text-4xl text-[#df3f3d]">
          Welcome to chikn. Bgaark!
        </h1>
        <p>
          <b>chikn</b> are not just NFTs that lay $egg.<br/>
          <b>chikn</b> is an entire ecosystem built around these NFTs - encompassing novel Tri-Token Architecture.<br/><b>chikn</b> is extending the utility of Public Minting, a Marketplace, and Farming for emerging NFT+token creators on Avalanche.
        </p>
        <p>NFTs have the unique ability to combine utility with the power of mimetism.<br className="d-none d-lg-block"/> When you can have both, why not have both?</p>
        <p>It's simple, really. Everyone knows that chikn lay $egg.</p>
      </div>
    </div>
  </div>
)

export default Welcome;
import React from "react";

import IllustrationEcosystemItem from './IllustrationEcosystemItem';

interface Idata {
  title: string,
  icon: string,
  descriptions: string[]
}

const data:Idata[] = [
  {
    title:'chikn',
    descriptions: ["Your upgradeable chikn NFT, that lays $egg"],
    icon:'illustration_01.svg'
  },
  {

    title:'$feed',
    descriptions: ['The governance and utility token of the chikn', 'ecosystem. Hodl, use, or sell on the open market'],
    icon:'illustration_02.svg'
  },
  {
    title:'chikn',
    descriptions: ['Harvested at chikn.farm, eaten by chikn,','or sold on the open market'],
    icon:'illustration_03.svg'
  },
  {
    title:'Lay',
    descriptions: ['Roost your chikn and lay $egg.','Biggr chikn lay more $egg'],
    icon:'illustration_04.svg'
  },
  {
    title:'Farm',
    descriptions: ['Received $egg LP tokens are used', 'to farm $feed at chikn.farm'],
    icon:'illustration_05.svg'
  },
  {
    title:'Size (Kg / KillerGainz)',
    descriptions: ['$feed permanently increases the size',"of your chikn. It's written straight to the",'metadata of your NFT'],
    icon:'illustration_06.svg'
  }
]

const Illustration_Ecosystem = () => (
  <div className="relative flex md:flex-row flex-col-reverse my-40 justify-between md:mx-auto items-center space-x-12 max-w-[1400px]">
    <div className="sm:w-full">
      {data.map((d, i) => (
        <IllustrationEcosystemItem icon={d.icon} title={d.title} descriptions={d.descriptions} key={i}/>
      ))}
      
    </div>
    <img src={process.env.PUBLIC_URL+'/img/Illustration_Ecosystem_Simple_01-d65e5a1e8af57f288ef1fd7af0fa9d66.png'} alt="" className="w-full h-full md:w-1/2 md:h-1/2 max-w-xl"/>
  </div>
)

export default Illustration_Ecosystem;
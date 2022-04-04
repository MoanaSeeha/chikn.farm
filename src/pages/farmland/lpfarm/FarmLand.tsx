import React, { useState, useEffect } from 'react';

import { Board } from '../../../components/Board';
import SelectBox, {ISelectItem} from '../../../components/SelectBox';

const FarmLand = () => {

  const [tabState, setTabState] = useState(0);
  const seletBoxData:ISelectItem[] = [
    {title: 'Largest Size', value: 0},
    {title: 'Smallest Size', value: 1},
    {title: 'Highest Farm', value: 2}
  ];

  return (
      <Board className='relative'>
        <div className=' absolute bg-[#222343] rounded-tr-lg rounded-tl-lg w-full top-0 flex justify-start px-5 py-2'>
          <div className='flex space-x-4 items-center'>
            <img src={`${process.env.PUBLIC_URL}/img/FARM_TOKEN-7d723a9ae0ec9e1801046749cf0faa94.png`} alt="" className=' md:w-12 md:h-12 w-10 h-10'/>
            <div className=' md:text-3xl text-2xl font-black tracking-widest'>FARMLAND</div>
          </div>
        </div>
        <div className='flex flex-col px-4 mt-10 '>
          <div className='flex flex-row justify-between'>
            <div className='flex text-2xl font-black'>MY LAND (-)</div>
            <div className='flex flex-col items-start'>
              <div className='flex flex-row items-center'>
                <div className='flex items-bottom text-base my-0.5 font-bold'>0.0000000
                </div>
                <img src={`${process.env.PUBLIC_URL}/img/eggtoken.svg`} alt="egg_token" className='inline-block w-6 h-6' />  
              </div>
              <div className='chikn-red text-sm'>TOTAL EGG HELD</div>
            </div>
          </div>
          <div>
            <SelectBox items={seletBoxData} onChange={() => {}} />
          </div>
        </div>
       
      </Board>  
  )
}

export default FarmLand
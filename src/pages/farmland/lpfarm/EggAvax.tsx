import React, { useState, useEffect } from 'react';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import { Board } from '../../../components/Board';
import SelectBox, {ISelectItem} from '../../../components/SelectBox';
import Input from '../../../components/Input';
import Icons from '../../../components/Icons';


const EggAvax = () => {

  const [toggleStatus, toggle] = useState(true);
  const seletBoxData:ISelectItem[] = [
    {title: 'Largest Size', value: 0},
    {title: 'Smallest Size', value: 1},
    {title: 'Highest Farm', value: 2}
  ];

  return (
      <Board className={`relative ${toggleStatus?'pb-0': ''}`}>
        <div onClick={() => toggle(!toggleStatus)} className={`${toggleStatus?'rounded-br-lg rounded-bl-lg ':''}items-center cursor-pointer absolute bg-[#222343] rounded-tr-lg rounded-tl-lg w-full top-0 flex justify-between px-5 py-2`}>
          <div className='flex space-x-4 items-center'>
            <img src={`${process.env.PUBLIC_URL}/img/FARM_TOKEN-7d723a9ae0ec9e1801046749cf0faa94.png`} alt="" className=' md:w-12 md:h-12 w-10 h-10'/>
            <div className=' md:text-3xl text-2xl font-black tracking-widest'>FARMLAND</div>
          </div>
          <div className=' text-center'>
            {!toggleStatus?<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>}
          </div>
        </div>
        <SlideDown className={'my-dropdown-slidedown'}>
          {toggleStatus ? 
            <></>
           : (<></>)}
        </SlideDown>
      </Board>  
  )
}

export default EggAvax
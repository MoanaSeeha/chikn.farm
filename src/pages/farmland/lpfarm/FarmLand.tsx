import React, { useState, useEffect } from 'react';

import { Board } from '../../../components/Board';
import SelectBox, {ISelectItem} from '../../../components/SelectBox';
import Input from '../../../components/Input';
import Icons from '../../../components/Icons';

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
          <div className='flex sm:flex-row flex-col justify-between mt-5'>
            <SelectBox items={seletBoxData} className='sm:w-1/3 w-full' onChange={() => {}} />
            <div className='flex flex-row sm:w-1/3 w-full'>
              <Input onChange={() => {}} className='w-full mr-2'/>
              <div className='h-8 w-8 inline-block py-1 px-1 rounded-lg transition-all text-sm text-[#f2f2f2] bg-[#df3f3d]'>
                <svg xmlns="http://www.w3.org/2000/svg" className=" text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center my-8'>
            <div className=' text-gray-600 mb-12'>
            No land found
            </div>
            <div className='inline-block w-1 h-1 p-1 rounded-full bg-[#df3f3d]'></div>
            <div className=' text-gray-600 mt-12 text-3xl'>
            No land found
            </div>
          </div>
          <div className='absolute top-1/2 cursor-pointer -right-2 h-8 w-8 inline-block py-1 px-1 rounded-full text-lg text-[#2a2c54] bg-[#f7f7f798] hover:bg-[#f7f7f7e5]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className='absolute top-1/2 cursor-pointer -left-2 h-8 w-8 inline-block py-1 px-1 rounded-full text-lg text-[#2a2c54] bg-[#f7f7f798] hover:bg-[#f7f7f7e5]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </Board>  
  )
}

export default FarmLand
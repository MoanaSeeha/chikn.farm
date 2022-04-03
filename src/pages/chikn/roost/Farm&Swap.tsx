import React, { useState, useEffect } from 'react';

import { Board } from '../../../components/Board';
import { RoundedButton } from '../../../components/Button';
import Tab from '../../../components/Tab';

const FarmSwap = () => {

  const [tabState, setTabState] = useState(0);

  return (
    <div className='md:basis-1/3'>
      <Board className=''>
        {/* <div className='flex flex-col lg:basis-3/4 basis-1'> */}
        <div className='flex flex-row border-b border-solid border-[#3b3d76] mt-12 justify-between pr-2 items-center'>
          <Tab titles={['FARM', 'SWAP']} onChange={(i) => setTabState(i)} />
          <div>
            <div className='flex flex-row items-bottom text-4xl my-0.5 font-extrabold'>0.0000000
              <img src={`${process.env.PUBLIC_URL}/img/eggtoken.svg`} alt="egg_token" className='inline-block w-7 h-7' />
            </div>
            <div className='chikn-red text-sm font-bold'>AVAILABLE EGG TO CLAIM</div>
          </div>
        </div>
        {/* </div> */}
      </Board>
    </div>  
  )
}

export default FarmSwap
import React from 'react';

import { CustomPage } from '../../../components/Page'

import Total from './Total'
import FarmSwap from './Farm&Swap'
import Claim from './Claim'

const Roost = () => {
  return (
    <CustomPage header='Roost'>
      <div className='flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-3'>
        <Total/>
        <div className=' space-y-2'>
          <FarmSwap/>
          <Claim/>
        </div>
      </div>
    </CustomPage>
  )
};

export default Roost;

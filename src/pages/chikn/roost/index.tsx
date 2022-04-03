import React from 'react';

import { CustomPage } from '../../../components/Page'

import Total from './Total'
import FarmSwap from './Farm&Swap'

const Roost = () => {
  return (
    <CustomPage header='Roost'>
      <div className='flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-3'>
        <Total/>
        <FarmSwap/>
      </div>
    </CustomPage>
  )
};

export default Roost;

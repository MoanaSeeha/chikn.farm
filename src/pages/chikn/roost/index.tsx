import React from 'react';

import { CustomPage } from '../../../components/Page'
import { Board } from '../../../components/Board';

import Total from './Total'

const Roost = () => {
  return (
    <CustomPage header='Roost'>
      <div className='flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-3'>
        <Total/>
        <div className='md:basis-1/3'>
          <Board className='' />
        </div>  
      </div>
    </CustomPage>
  )
};

export default Roost;

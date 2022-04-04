import React from 'react';

import { CustomPage } from '../../../components/Page'

import FarmLand from './FarmLand'

const LPFarm = () => {
  return (
    <CustomPage header='LP Farm'>
      <div className='flex flex-col md:space-x-2 md:space-y-0 space-y-3'>
        <FarmLand/>
      </div>
    </CustomPage>
  )
};

export default LPFarm;

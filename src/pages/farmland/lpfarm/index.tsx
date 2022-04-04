import React from 'react';

import { CustomPage } from '../../../components/Page'

import FarmLand from './FarmLand';
import EggAvax from './EggAvax';

const LPFarm = () => {
  return (
    <CustomPage header='LP Farm'>
      <div className='flex flex-col md:space-y-7 space-y-3'>
        <FarmLand/>
        <EggAvax/>
      </div>
    </CustomPage>
  )
};

export default LPFarm;

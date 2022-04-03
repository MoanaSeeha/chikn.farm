import React, {FC} from 'react';

import Header from './Header';

export interface ICustomPageProps {
  header: string
}

export const CustomPage: FC<ICustomPageProps> = (params) => {
  const {
    children, header
  } = params;

  return (
    <div className='cr-slauteblue-sm w-full px-20 py-10 mt-[10vh]'>
      <div className='gap-4 mt-5 mb-5 flex flex-col xl:max-w-[1400px] mx-auto '>
        <Header title={header} loading={false} />
        {children}
      </div>
    </div>
  )
}

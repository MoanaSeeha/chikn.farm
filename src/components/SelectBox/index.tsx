import React, { FC, useState } from "react";

import Icons from "../Icons";

export interface ISelectItem {
  value: number,
  title: string
}

type Props = {
  items: ISelectItem[],
  className?: string,
  onChange: (i: number) => void;
}

const SelectBox: FC<Props> = (props: Props) => {

  const { items } = props;
  const [selectedItem, selectItem] = useState(0);
  const [openState, open] = useState(true);
  // const onChange = (i: number) => {
  //   setActive(i)
  //   props.onChange(i);
  // }

  return (
    
      <div className="mb-3 xl:w-48 relative cursor-pointer">
        <div 
          className={`${openState?'selectbox ':''}block w-full px-3 py-1.5 text-base font-normal bg-[#0000] bg-clip-padding bg-no-repeat border border-solid border-white rounded transition ease-in-out m-0 hover:bg-[#df3f3d]`}
          onClick={() => open(!openState)}
        >
          {
            items?.map((t, i) => {
              if(i === selectedItem) return (
                <div key={i} className="flex flex-row justify-between">{
                  t.title
                }<Icons type="down"/></div>
              )
              else return ''
            })
          }
        </div>
        
        {openState?
          <div className="absolute right-0 mt-1 bg-white rounded-md py-3">{
            items?.map((t,i) => {
              return (
              <div 
                key={i} 
                onClick={() => selectItem(i)}
                className={`
                  ${i === selectedItem?'bg-[#df3f3d]':''}
                  hover:bg-red-200 text-slate-800 px-4 py-1 cursor-pointer`}>
                <div className="inline-block">
                  {t.title}
                </div>
                <div 
                  className={`
                  ${i === selectedItem?'border-[#df3f3d] border-4 ':''}
                  rounded-full h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2
                  `}/>
              </div>
            )})
              }</div>
          :''}
        
      </div>

  )
}

export default SelectBox
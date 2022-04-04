import React, { FC, useState, useRef, useEffect } from "react";

import Icons from "../Icons";


type Props = {
  className?: string,
  onChange: (i: number) => void;
}



const Input: FC<Props> = (props: Props) => {

  const {className} = props;
  const[focus,onFocus] = useState(false);

  return (
      <div className={`inline-block mb-3 xl:w-48 min-w-[200px] relative cursor-pointer z-50 ${className}`}>
        <input 
          className={`${focus?'selectbox ':''}block w-full px-3 py-1.5 text-sm font-normal bg-[#222343] bg-clip-padding bg-no-repeat border border-solid border-[#3b3d76] rounded-lg transition ease-in-out m-0 `}
          onFocus={() =>onFocus(true)}
          onBlur={() =>onFocus(false)}
        >
        </input>
        
        
      </div>

  )
}

export default Input
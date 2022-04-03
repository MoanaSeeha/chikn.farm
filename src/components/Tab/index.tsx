import React, {FC, useState} from "react";

type Props = {
  titles?: string[],
  className?: string,
  onChange: (i:number) => void;
}

const Tab:FC<Props> = (props: Props) => {

  const {titles} = props;
  const[activedTab,setActive] = useState(0);
  const onChange = (i:number) => {
    setActive(i)
    props.onChange(i);
  }

  return (
    <ul className="flex flex-row flex-wrap pl-0">
    {
      titles?.map((t, i) => {
        return(
          <li className={`
            block text-lg font-bold leading-tight capitalize cursor-pointer
            ${i===activedTab?'border-b-2 border-solid border-[#df3f3d]':' '}
            px-6 py-3 transition-colors
            `} onClick={() => onChange(i)}>{t}
          </li>    
      )})
    }
    </ul>
  )
}

export default Tab
import React, {FunctionComponent} from 'react';

type Props = {
  title: string,
  icon: string,
  descriptions: string[]
}

const IllustrationEcosystemItem:FunctionComponent<Props> = (props: Props) => (
  <div className='flex flex-row items-center text-white my-5 space-x-4'>
    <img src={`${process.env.PUBLIC_URL}/img/${props.icon}`} alt="" className=' max-w-[70px]'/>
    <div>
      <div className=' font-bold'>
        {props.title}
      </div>
      <div>
        {props.descriptions.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
    </div>
  </div>
)

export default IllustrationEcosystemItem;

import React from 'react';
import iconPlay from '../assets/image-work.png'

export function Card({title, current, previous, bgColor,source}) {

  return (
    <div className="m-0 lg:w-[30%] lg:max-w-[250px] group cursor-pointer">
      
      <div className={`flex justify-end pr-4 rounded-tl-2xl rounded-tr-2xl z-10 h-[74px]`} style={{background: bgColor}}>
        <img 
          src={iconPlay} 
          alt={`Icone da sessão ${title}`}
        />
      </div>

      <div className={`
        bg-[#1c1f4a] rounded-2xl relative top-[-34px] z-20
        p-7 flex flex-col justify-center group-hover:bg-[#32367c] hover:transition-colors
        lg:p-6
      `}>

        <div className={`
          flex justify-between items-center
        `}>
          <span className="text-xl font-medium">{title}</span>
          <span className="text-4xl relative top-[-10px]">...</span>
        </div>

        <div className={`
          flex justify-between items-baseline
          lg:flex-col lg:justify-start lg:items-start lg:mt-5
        `}>
          <span className="text-3xl lg:text-5xl lg:mb-2">{current}hrs</span>
          <span className="text-sm lg:text-lg text-[#bdc1ff]">Last Week - {previous}hrs</span>
        </div>
      </div>

    </div>
  )
}

import React from 'react';
import ProfileImg from '../../public/assets/image-jeremy.png';
import { Link, useLocation } from 'react-router-dom';

export function Profile() {

  const { pathname } = useLocation();

  return (
    <div className={`
      flex flex-col text-white lg:w-[260px]
    `}>
        
      <div className={`
        flex items-center justify-start gap-x-3 z-20 
        bg-[#5847eb] rounded-2xl py-7
        lg:flex-col lg:justify-start lg:items-start lg:p-6
      `}>

        <img 
          src={ProfileImg} 
          alt="Image Profile" 
          className="border-4 border-white rounded-full ml-5 w-[80px] h-[80px] lg:ml-0 lg:mb-8 lg:w-[100px] lg:h-[100px]"  
        />

        <div className="lg:mb-[50px]">
          <span className="text-md lg:text-xl text-[#bdc1ff]">Report for</span>
          <h1 className="text-2xl lg:text-5xl ">Jeremy Robson</h1>
        </div>
        
      </div>

      <div className={`
        bg-[#1c1f4a] rounded-br-2xl rounded-bl-2xl 
        pt-10 pb-6 px-8 relative top-[-20px] z-10`
      }>
        <nav>
          <ul className="flex items-center justify-between text-xl lg:flex-col lg:items-start lg:gap-y-4 text-[#bdc1ff] ">

            <li className={`hover:text-white hover:font-bold hover:transition-all ${pathname == "/" ? "font-bold text-white" : false}`}>
              <Link to="/"> Daily </Link>
            </li>

            <li className={`hover:text-white hover:font-bold hover:transition-all ${pathname == "/weekly" ? "font-bold text-white" : false}`}>
              <Link to="weekly"> Weekly </Link>
            </li>
            
            <li className={`hover:text-white hover:font-bold hover:transition-all ${pathname == "/monthly" ? "font-bold text-white" : false}`}>
              <Link to="monthly"> Monthly </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

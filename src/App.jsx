import { Profile } from './components/Profile'
import { CardRoutes } from './components/CardRoutes'
import { BrowserRouter } from 'react-router-dom';
export default function App(){
  return(
    <BrowserRouter>
      <div className={`bg-[#0f1424] grid place-items-center lg:h-screen`}>

        <div className={`
          flex flex-col 
          w-[90%] max-w-[500px] mt-5
          lg:max-w-[1400px] lg:flex-nowrap lg:flex-row lg:justify-center
        `}>
          <Profile />
          <CardRoutes />
        </div>
      </div>
    </BrowserRouter>

  )
}
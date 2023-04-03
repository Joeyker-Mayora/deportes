import {BsFillCartCheckFill} from 'react-icons/bs'
import { IoBaseball,IoBasketball } from "react-icons/io5";

import {FaFootballBall, FaFutbol} from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const {cartTotalQuantity}= useSelector(state=> state.cart)
  return (
   <div>
    <div className=' mx-auto fixed top-0 left-0 w-[25%] h-screen shadow-2xl shadow-black/80'>'
      
      <div className=" flex justify-center ">
      <span className='sm:text-[25px] md:text-[50px] text-blue-700 font-bold'>Rph<span className=' text-[40px] text-green-700'>Store</span></span> 
      </div>
      
      <ul className=' py-6 pl-10 sm:pl-5'>
        <li className="py-2 px-5 rounded-full  hover:text-white hover:bg-gradient-to-r from-green-400 to-blue-400">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="py-2 rounded-full  hover:text-white hover:bg-gradient-to-r from-green-400 to-blue-400">
        <NavLink to="/categoria/Futbol Americano" className="flex">
        <div className=' mr-2 text-xl'>
          <IoBasketball/> 
        </div>
        Baloncesto
          </NavLink>
        </li><li className="py-2 rounded-full  hover:text-white hover:bg-gradient-to-r from-green-400 to-blue-400">
        <NavLink to="/categoria/Futbol Americano" className="flex">
        <div className=' mr-2'>
          <FaFutbol/> 
        </div>
        Futbol
          </NavLink>
        </li>
        <li className="py-2 rounded-full  hover:text-white hover:bg-gradient-to-r from-green-400 to-blue-400">
        <NavLink to="/categoria/Futbol Americano" className="flex">
        <div className=' text-xl mr-2'>
        <IoBaseball/> 

        </div>
        Beisbol
          </NavLink>
        </li>
        <li className="py-2 rounded-full hover:text-white hover:bg-gradient-to-r from-green-400 to-blue-400">
        <NavLink to="/categoria/Futbol Americano" className="flex">
        <div className=' mr-2'>
          <FaFootballBall/> 
        </div>
        Futbol Americano
          </NavLink>
        </li>
      </ul>
      <div className='flex justify-end mr-6 py-[250px]'>
        <NavLink to="/form" className=" bg-green-500 px-5 py-2 rounded-xl hover:bg-green-700 hover:text-white">
          Registrate
          </NavLink>  
        </div>
       </div> 
          <div className=' flex justify-end mr-4'>
        <Link to ='/cart'>
      <div className=" text-4xl hover:rotate-12 ease-in duration-200 text-white">
        <span>{cartTotalQuantity}</span>
        <BsFillCartCheckFill/>

    </div>
      </Link>
        </div>

         
         
         
          
      

     
     
     
    
    
    
    </div>
  )
}

export default NavBar
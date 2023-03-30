import {BsFillCartCheckFill} from 'react-icons/bs'
import {FaFootballBall} from 'react-icons/fa'
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
      
      <ul className=' pl-10 sm:pl-5'>
        <li className="py-3">
          <NavLink to="/">Inicio</NavLink>
        </li>
        
        <li  className="py-2">
        <NavLink to="/categoria/Beisbol">Beisbol</NavLink>
        </li>
        <li className="py-2">
        <NavLink to="/categoria/Baloncesto">Baloncesto</NavLink>
        </li>
        <li  className="py-2">
        <NavLink to="/categoria/Futbol">Futbol</NavLink>
        </li>
        <li className="py-2 ">
        <NavLink to="/categoria/Futbol Americano" className="mr-[2px]">Futbol Americano</NavLink>
        </li>
      </ul>
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
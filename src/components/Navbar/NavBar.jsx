import './Estilos.css';
import CarWidget from '../CarWidget/CarWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='header'>
      
      <div >
        <span className='nombre'>Jm</span><span className='nombre2'>Deportes</span>
      </div>
      
      <ul className='lista'>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        
        <li>
        <NavLink to="/categoria/Beisbol">Beisbol</NavLink>
        </li>
        <li>
        <NavLink to="/categoria/Baloncesto">Baloncesto</NavLink>
        </li>
        <li>
        <NavLink to="/categoria/Futbol">Futbol</NavLink>
        </li>
        <li>
        <NavLink to="/categoria/Futbol Americano">Futbol Americano</NavLink>
        </li>
      </ul>
      <Link to ='/cart'>
      <div className='carro'>
        <CarWidget className="cart" />
      </div>
      </Link>
          
          
          

         
         
         
          
      

     
     
     
    
    
    
    </div>
  )
}

export default NavBar
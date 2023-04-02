import Item from "../Item/Item"
//import { Link} from "react-router-dom"
//import './Contenedor.css';

const ItemList = ({productos}) => {
  return (
    <div className=" grid sm:grid-cols-1 md:ml-[400px] sm:ml-[250px] lg:grid-cols-2"> 
    
      {productos.map((producto)=>(
       <div className=" py-6" key={producto.id} to={`item/${producto.id}`}>
        <Item producto={producto} />
       </div>
       
       
      ))}
    </div>
  )
   
   
   
  
   
   
   
  
}

export default ItemList















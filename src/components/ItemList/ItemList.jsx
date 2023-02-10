import Item from "../Item/Item"
import { Link} from "react-router-dom"
//import './Contenedor.css';

const ItemList = ({productos}) => {
  return (
    <ul> 
      {productos.map((producto)=>(
       <Link className="l" key={producto.id} to={`item/${producto.id}`}>
        <Item producto={producto} />
       </Link>
       
       
      ))}
    </ul>
  )
   
   
   
  
   
   
   
  
}

export default ItemList















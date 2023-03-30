import { useState,useContext } from "react";
//import ItemCount from "../../components/ItemCount/ItemCount";
//import { cartContext } from "../../Context/CartContext";
//import beisbol from "../../../public/imgBe/bate.jpeg"


const ItemDetail = ({datos}) => {
 // const {addItem} = useContext(cartContext);
  
 // const stock = 4;
  const [contador, setContador] = useState(1);
 //console.log("aca estan los datos:" + datos.img)
 
  return (
    <div className='contenedor'>
      

      

    <li className='products' >
   <img alt ={"datos.id"} src={`/../${datos.img}`} width="200px" />
<h2 className='title-cards'>{datos.nombre}</h2>
<h3>{datos.precio} </h3>
<h4>{datos.stock} Productos</h4>
<h5>{datos.categoria} </h5>

<div> 
  <button>Agregar al carrito</button>
</div>
  

    </li>
    
    </div>
   
   
   
   
   
   
   
   
       
    

  )
}

export default ItemDetail
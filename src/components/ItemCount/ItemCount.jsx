//import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({contador,setContador,stock}) => {
    const onAdd = () => {
      if (stock === contador) {
        return;
      }
      setContador(contador +1);
    }
    const restar = () => {
      if (contador === 0) {
        return
      }
      setContador(contador -1);
    }
    return (
    <div className="counter">
       <div className="controlador">
          <button onClick={restar} >-</button>
        <div>
          <span>{contador}</span>
        </div>
           <button onClick={onAdd}>+</button>
        </div>
        
        
        
      </div>
    
  )
}

export default ItemCount
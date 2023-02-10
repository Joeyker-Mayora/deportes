import { useContext, useState, useEffect } from "react"
import { cartContext } from "../../Context/CartContext"


const CarWidget = () => {
  const {cart}= useContext(cartContext)
  const [total, setTotal] = useState(0)
  
  useEffect(()=> {
    setTotal(
      cart?.reduce((prev,curr)=> {
        return prev+ curr.cantidad;
      }, 0)
    )
      
    
  }, [cart])
  
  
  return (
    <div style= {{color:"white"}}>
      {total}
      
      <img  src="/../carro/OIP.jpg" alt="carro" width="70px" />
      
    </div>
  
  )
}

export default CarWidget
import { useDispatch } from "react-redux"
import { addToCart } from "../../App/SlicesCart/SlicesCart"
const Item = ({producto}) => {
const dispacth = useDispatch()
  const handleAddToCart = (producto) => {
dispacth(addToCart(producto))
  }

  return (
      <div className=' p-4 rounded-xl bg-white m-[30px] hover:scale-105 ease-in duration-300 shadow-2xl shadow-black/60 h-[350px] w-[350px]'>
      <div>
              <img alt ={"producto.id"} src ={`../${producto.image}`}  style={{width:"200px"}} />
      </div>
       
      <h2 className='title-cards'>{producto.name}</h2>
      <h3>{producto.precio}ARS</h3>
      <h4>{producto.description} </h4>
      <h5>{producto.categoria} </h5>
      <button onClick={()=> handleAddToCart(producto)}>Comprar</button>
    
    </div>
   
    
  )
   
  
}

export default Item 
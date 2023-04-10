import { useDispatch } from "react-redux"
import { addToCart } from "../../App/SlicesCart/SlicesCart"



const Item = ({producto}) => {
const dispacth = useDispatch()
  const handleAddToCart = (producto) => {
dispacth(addToCart(producto))
  }

  return (
      <div className=' rounded-md shadow-2xl bg bg-white text-gray-600 sm:w-72 sm:min-h-[10rem] md:w-[400px] md:min-h-[400px] overflow-hidden'>
      
        <img alt ={"producto.id"} src ={`../${producto.image}`} className=" w-[400px] h-[400px] flex items-center border-b-[6px] border-gray-300" />
      
       <div className=" p-5 flex flex-col gap-3">
        <div className=" flex items-center gap-2">
        <span className=" px-3 py-1 text-gray-400">#TiendaOficial</span>
        <span className=" px-3 py-1 text-gray-400">#SomosDeportes</span>
        
        
         </div>
            <h2 className=' text-2xl font-semibold overflow-ellipsis overflow-y-hidden'>{producto.name}</h2>
      <div>
        <h3 className=" text-xl font-extrabold font-sans">{producto.precio}ARS</h3> 
        <div className="flex items-center gap-2 mt-1">
     
          <span className=" bg-blue-400 text-white rounded-md px-1.5">20% off</span>
        </div>
      </div>
      <div className=" mt-5 flex gap-2">
      <button className="text-lg rounded-lg px-11 py-2 bg-green-400 text-white hover:bg-green-600" onClick={()=> handleAddToCart(producto)}>Comprar</button>
      </div>
      
     
      
    
        
      
       </div>
      
    </div>
   
    
  )
   
  
}

export default Item 
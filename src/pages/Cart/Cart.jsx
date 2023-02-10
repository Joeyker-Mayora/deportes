import { useContext, useState , useEffect} from "react"
import { cartContext } from "../../Context/CartContext"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"





const Cart = () => {
    const {cart, removeItem, clear} = useContext(cartContext)
    console.log(cart)
    const [orden, setOrden] = useState({})
    const db = getFirestore();

    useEffect(()=>{
      setOrden(
        {
          buyer: {
            nombre: "Dorys Avilez",
            telefono:"1151802317",
            email:"dorys@gmail.com"
          },
          item: cart.map((producto) => {
            const {nombre,precio,id}= producto;
            return{nombre,precio,id};
           //return {
           //  nombre: producto.nombre,
           //  precio: producto.precio,
           //  id: producto.id
           //}
           
           
          }),
          total : cart.reduce((ppasado,pnuevo) => ppasado + pnuevo.precio * pnuevo.pnuevo ,0)
        }

      )

    },[cart])
  
    if(cart.length === 0) {
      return <h1>No hay productos en tu carrito</h1>

    }

    const createOrden = () => {
      
      const config = collection(db, 'orden')

      addDoc(config,orden)
      .then((response) => {
       // console.log(response)
       actualizar()
        alert("Enviado con exito")
      })
      .catch((error)=> {console.error(error)})
    }

    const actualizar = () => {
      cart.forEach((product)=> {
        const config = doc(db,"items", product.id)
        updateDoc(config, {
          
          stock: product.stock - product.cantidad
        
        })
        .then(()=> {console.log("se actualizo")})
        .catch((error)=> {console.log(error)})

      })
        
      
    }

    return (
    <div className="products"  >
        <div>
        {cart.map((product)=> (
           
           
          
           
           <ul  key={product.id}>
            <li style={{display:"flex",
            flexDirection: "row",
            justifyContent:"space-between",
            padding:"40px", 
            width:"800px"}} >
            
            <img alt ={"product.id"} src ={`../${product.img}`} width="80px" />
            <h3>{product.nombre}</h3>
            <h4>(Cantidad) {product.cantidad} </h4>
            <h4>{product.precio} </h4>
            <h5>{product.categoria}</h5>
            <button style={{width:"60px",height:"20px"}} onClick={() => removeItem(product.id)}>Eliminar</button>
    
            </li>
            </ul> 
            ))}
           
            </div>
         <div style={{marginTop:"100px"}} onClick={() => clear()} ><button>Vaciar Carrito</button></div>
         
         <div style={{marginTop:"100px"}} onClick={createOrden} ><button>Enviar Orden</button></div>

    </div>
   
   

  )
}

export default Cart
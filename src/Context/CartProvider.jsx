import { cartContext } from "./CartContext"
import { useState } from "react"

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const addItem = (item,cantidad)=>{
        let newCart;
        let product = cart.find((prod) => prod.id === item.id)
        if (product) {
        product.cantidad += cantidad
        newCart = [...cart]
        
        } else {
            product = {
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: cantidad,
                categoria: item.categoria,
                img: item.img,
                stock: item.stock

            }
            newCart = [...cart, product]
        }
            
        
        setCart(newCart);
        
    }

    const removeItem = (id)=>{
        setCart(cart.filter((producto) => producto.id !== id))
    }

    const clear = () => {
        setCart([]);

    }

    //const isInCart = (id) => {
    //   return cart.some((item) => item.id === id)
    //}
    
 
    return (
    <cartContext.Provider value={{cart,addItem, clear,removeItem}}>
        {children}

    </cartContext.Provider>
  )
}

export default CartProvider
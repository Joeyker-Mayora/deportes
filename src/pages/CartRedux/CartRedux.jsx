import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
 import React from 'react'
import { Link } from 'react-router-dom'
import { 
    addToCart, 
    clearCart, 
    decreaseCart, 
    getTotals, 
    removeFromCart 
} from '../../App/SlicesCart/SlicesCart'
 
 

    const CartRedux = () => {
 
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    useEffect(()=>{
            dispatch(getTotals())
    },[cart,dispatch])
    
    
    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart =(cartItem)=> {
    dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem)=>{
        dispatch(addToCart(cartItem))

    }
    const handleclearCart = ()=>{
        dispatch(clearCart())

    }
   
        
       
   

   return (
    <div className='grid sm:grid-cols-2 fixed top-0 left-0 w-screen h-screen bg-black/50'>
     <div className=' overflow-scroll mx-auto bg-white sm:w-[700px] ml-2  sm:h-[600px] md:w-[900px] md:h-[500px] rounded-lg sm:mt-2 md:mt-[50px] md:ml-[200px]'>
        
        {cart.cartItems.length === 0 ? (
            <div>
            <div className='flex justify-center items-center font-bold text-xl text-green-500 uppercase'>
                No hay productos en tu carrito
               
            </div>
            <div className=' flex justify-center sm:mt-[240px] md:mt-[400px]  hover:text-green-700'>
            <Link to="/">
                Volver
            </Link>
        </div>
            </div>
        ) : (
            <div className=''>
                <div className='mx-auto grid grid-cols-4 sm:ml-[50px] md:ml-[70px] mt-2 text-gray-500 text-sm uppercase '>
                <h3>Producto</h3>
                <h3>Precio</h3>
                <h3>Cantidad</h3>
                <h3>Total</h3>
                </div>
                <div>
                {cart.cartItems?.map((cartItem)=>(
                    <div className=' mx-auto grid grid-cols-4 sm:ml-[50px] md:ml-[70px] mt-2 text-gray-500 text-sm uppercase' key={cartItem.id}>
                        <div className=''>
                            <img className=' rounded-xl w-[150px] h-[150px]' src={cartItem.image} alt="/" />
                            <div>
                            <h1>{cartItem.name}</h1>
                           
                            <button className=' ml-[100px] rounded-xl bg-gray-200 p-2 hover:bg-slate-600 hover:text-white' onClick={()=> handleRemoveFromCart(cartItem)}>Eliminar</button>
                            </div>
                          
                        </div>
                        <div>{cartItem.precio}ARS</div>
                        <div className='flex items-start max-w-[100%] w-[130px]'>
                            <button className='rounded-xl bg-gray-200 p-1 hover:bg-slate-600 hover:text-white' onClick={()=> handleDecreaseCart(cartItem)}>-</button>
                            <div className=' p-2'>{cartItem.cartQuantity}</div>
                            <button className='rounded-xl bg-gray-200 p-1 hover:bg-slate-600 hover:text-white' onClick={()=> handleIncreaseCart(cartItem)}>+</button>
                            
                        </div>
                        <div>
                            {cartItem.precio * cartItem.cartQuantity}ARS
                        </div>

                    </div>
                ))}
                </div>
                    <div className=' flex items-start justify-between py-6'>
                        <button className=' ml-10 text-gray-500 rounded-xl bg-gray-200 p-2 hover:bg-slate-600 hover:text-white'  onClick={()=> handleclearCart()}>Vaciar Carrito</button>
                        <div>
                            <div className=' text-gray-500'>
                                <div className='  mr-7'>
                                <span className='text-2xl'>Subtotal</span> =  <span className=' text-3xl'>{cart.cartTotalAmount} ARS</span>
                                </div>
                                <div className=' py-5'>
                                    <button className=' text-lg rounded-lg px-11 py-2 bg-green-400 text-white hover:bg-green-600'>Comprar</button>
                                    <Link className="" to="/">
                                    <p className=' py-5 hover:text-black'>Continuar comprando</p>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        )}
       
     </div>
     </div>
   )
 }
 
 export default CartRedux
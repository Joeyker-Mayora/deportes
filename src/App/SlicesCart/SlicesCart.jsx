 import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    cartItems:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    
   

}

 export const sliceCart = createSlice ({
name:"cart",
initialState,
reducers:{
    addToCart:(state, action) => {
     const itemIndex= state.cartItems.findIndex(
        (items)=> items.id === action.payload.id
        )
        if(itemIndex >=0) {
            state.cartItems[itemIndex].cartQuantity += 1;
            toast.info("Se agrego el mismo producto a tu carrito",{
                position:"bottom-left"
            })
        }else {
            const tempProduct = {... action.payload , cartQuantity: 1};
            state.cartItems.push(tempProduct)
            toast.success(`Se agrego ${action.payload.name} correctamente a tu carrito`,{
                position:"bottom-left"
            })
        }
       
    },
    removeFromCart(state,action){
     const nextCart = state.cartItems.filter((cartItem)=> cartItem.id !== action.payload.id)
        state.cartItems = nextCart;
        toast.info(`Se elimino ${action.payload.name} de tu carrito`,{
            position:"bottom-left"
        })
        
    },
    decreaseCart(state, action) {
        const itemIndex = state.cartItems.findIndex(
            cartItem => cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCart = state.cartItems.filter((cartItem)=> cartItem.id !== action.payload.id)
                state.cartItems = nextCart;
            }
    },
    clearCart(state,action){
        state.cartItems=[];
    },
    getTotals(state,action){
        let {total, quantity} = state.cartItems.reduce(
            (cartTotal, cartItem)=> {
                const {precio,cartQuantity}= cartItem
                const itemTotal = precio * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },{
                total: 0,
                quantity: 0
                
            }
        )
        state.cartTotalQuantity = quantity
        state.cartTotalAmount = total
    }



}

});

export const {addToCart,removeFromCart,decreaseCart, clearCart, getTotals} = sliceCart.actions
export default sliceCart.reducer

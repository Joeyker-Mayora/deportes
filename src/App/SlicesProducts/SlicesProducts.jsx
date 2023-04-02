import { createSlice } from "@reduxjs/toolkit";

const products =[
  {name: "Zapatillas de Futbol ", id:"1", image:"imgF/zapatillasF.jpg", precio:"50000 ", descripcion:"", 
categoria:"Futbol" },
  {name: "Paracaidas", id:"2",image:"imgF/paracaidas.jpg", precio:"4500 ", descripcion:"", categoria:"Futbol" },
  {name: "Camiseta de Baloncesto", id:"3", image:"imgB/camisaB.jpg", precio:"15000 ", descripcion:"", 
categoria:"Baloncesto" },
  {name: "Bate de Beisbol", id:"4", image:"imgBe/bate.jpg", precio:"7900 ", descripcion:"", categoria:"Beisbol" },
  {name: "Camiseta de Beisbol", id:"5", image:"imgBe/camisaBe.jpg", precio:"11400 ", descripcion:"", 
categoria:"Beisbol" },
  {name: "Gorra", id:"6", image:"imgBe/gorra.jpg", precio:"9900 ", descripcion:"", categoria:"Beisbol" },
  {name: "Aro", id:"7", image:"imgB/aro.jpg", precio:"3400 ", descripcion:"Incluye 4 tornillos para la instalacion",
  categoria:"Baloncesto"},
  {name: "Balon de Futbol", id:"8", image:"imgF/balonF.jpg", precio:"7992 ", descripcion:"", categoria:"Futbol" },
  {name: "Camiseta de Futbol", id:"9", image:"imgF/camisaF.jpg", precio:"28000 ", descripcion:"", 
categoria:"Futbol" },
  {name: "Zapatillas de Baloncesto", id:"10", image:"imgB/zapatos.jpg", precio:" 72000", descripcion:"", 
categoria:"Baloncesto" },
  {name: "Casco de Futbol", id:"11", image:"imgFA/casco.jpg", precio:"100000 ", descripcion:"", 
categoria:"Futbol Americano" },
  {name: "Pelota de Beisbol", id:"12", image:"imgBE/pelota.jpeg", precio:"2000 ", descripcion:"", 
categoria:"Beisbol" },
  {name: "Camiseta de Futbol Americano", id:"13", image:"imgFA/jersey.jpg", precio:"18000 ", descripcion:"", 
categoria:"Futbol Americano" },
  {name: "Ovoide", id:"14", image:"imgFA/ovoide.jpg", precio:" 10500 ", descripcion:"", 
categoria:"Futbol Americano" },
  {name: "Balon de Baloncesto", id:"15", image:"imgB/balon.jpg", precio:"7000 ", descripcion:"Cuero 100%", 
  categoria:"Baloncesto" },
  {name: "Hombrera de Futbol", id:"16", image:"imgFA/protector.jpg", precio:"90900 ", descripcion:"", 
categoria:"Futbol Americano" },
  {name: "Zapatillas de Futbol", id:"17", image:"imgFA/zapatillasFA.jpg", precio:"45000 ", descripcion:"", 
categoria:"Futbol Americano" },
  {name: "Tabla de jugadas", id:"18", image:"imgB/tabla.jpg", precio:"4000 ", descripcion:"", categoria:"Baloncesto" },
  {name: "Guante de Beisbol", id:"19", image:"imgBe/guante.jpg", precio:"25000 ", descripcion:"", 
categoria:"Beisbol" },
  {name: "Arqueria de Futbol", id:"20", image:"imgF/porteria.jpg", precio:" 14250 ", descripcion:"", 
categoria:"Futbol" },

];

export const productSlice = createSlice({
    name: "products",
    initialState:{
        list:[]
    },
    reducers:{
        setProductSlice:(state,action) => {
            state.list = action.payload
        },

    }
})

export const {setProductSlice} = productSlice.actions

export default productSlice.reducer;





 export const FetchAllProducts = ()=>(dispacth)=> {
    dispacth(setProductSlice(products))
 }
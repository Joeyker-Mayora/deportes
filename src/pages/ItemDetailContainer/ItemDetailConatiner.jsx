import { Link } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, getDoc, doc} from "firebase/firestore"
import Loading from "../../components/Loading/Loading";

const arreglo =[
  {name: "Balon de Baloncesto", id:"1", image:"imgB/balonB.jpeg", precio:"7.000 ARS", descripcion:"Cuero 100%", 
  categoria:"baloncesto" },
  {name: "Paracaidas", id:"2",image:"imgF/paracaidas.jpg", precio:"4.500 ARS", descripcion:"", categoria:"Futbol" },
  {name: "Camiseta de Baloncesto", id:"3", image:"imgB/camisaB.jpeg", precio:"15.000 ARS", descripcion:"", 
  categoria:"baloncesto" },
  {name: "Bate de Beisbol", id:"4", image:"imgBe/bate.jpeg", precio:"7.900 ARS", descripcion:"", categoria:"beisbol" },
  {name: "Camiseta de Beisbol", id:"5", image:"imgBe/camisaBe.jpg", precio:"11.400 ARS", descripcion:"", 
  categoria:"beisbol" },
  {name: "Gorra", id:"6", image:"imgBe/gorra.jpg", precio:"9.900 ARS", descripcion:"", categoria:"beisbol" },
  {name: "Aro", id:"7", image:"imgB/aro.jpeg", precio:"3.400 ARS", descripcion:"Incluye 4 tornillos para la instalacion",
  categoria:"baloncesto"},
  {name: "Balon de Futbol", id:"8", image:"imgF/balonF.webp", precio:"7.992 ARS", descripcion:"", categoria:"Futbol" },
  {name: "Camiseta de Futbol", id:"9", image:"imgF/camisaF.jpg", precio:"28.000 ARS", descripcion:"", 
  categoria:"Futbol" },
  {name: "Zapatillas de Baloncesto", id:"10", image:"imgB/zapatos.jpg", precio:" 72.000 S", descripcion:"", 
  categoria:"baloncesto" },
  {name: "Casco de Futbol", id:"11", image:"imgFA/casco.jpeg", precio:"100.000 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
  {name: "Pelota de Beisbol", id:"12", image:"imgBE/pelota.jpeg", precio:"2.000 ARS c/u", descripcion:"", 
  categoria:"beisbol" },
  {name: "Camiseta de Futbol Americano", id:"13", image:"imgFA/jersey.jpeg", precio:"18.000 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
  {name: "Ovoide", id:"14", image:"imgFA/ovoide.jpeg", precio:" 10.500 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
  {name: "Zapatillas de Futbol ", id:"15", image:"imgF/zapatillasF.jpg", precio:"50.000ARS", descripcion:"", 
  categoria:"Futbol" },
  {name: "Protector de Futbol", id:"16", image:"imgFA/proteccion.jpeg", precio:"90.900 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
  {name: "Zapatillas de Futbol", id:"17", image:"imgFA/zapatosFA.jpeg", precio:"45.000 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
  {name: "Tabla de jugadas", id:"18", image:"imgB/tabla.jpg", precio:"4.00 ARS", descripcion:"", categoria:"baloncesto" },
  {name: "Guante de Beisbol", id:"19", image:"imgBe/guante.jpeg", precio:"25.000 ARS", descripcion:"", 
  categoria:"beisbol" },
  {name: "Arqueria de Futbol", id:"20", image:"imgF/porteria.png", precio:" 14.250 ARS", descripcion:"", 
  categoria:"Futbol" },



];




//
//
//
//const productoId = arreglo.find(p=> p.id=== valor)
//
//
//
const ItemDetailConatiner = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)

  const [datos, setDatos] = useState({});

  const getProduct = () => {
    const db = getFirestore();
    const config = doc(db,"items",id)

    getDoc(config)
    .then((response)=> {
      setDatos({id: response.id, ... response.data()});
      //return {id: response.id, ... response.data()}
    })
    .catch((error)=> {console.error(error)})

  }
    
  useEffect(()=>{
    setTimeout(()=> {
      setLoading(false)
      getProduct();
    },2000)
     
      //const getProduct = new Promise((resolve,reject)=>{
      //  const productoFiltrado = arreglo.find(p=> p.id === id)
      //    resolve(productoFiltrado)
        
      




    //getProduct
    //.then((res)=> setData(res))
     
     
      
    },[])
   

  return (
    <div>

      {loading===true
      ?(<Loading/>)
      :(<ItemDetail datos={datos} />)}
      
      
      
      
      
      
      
          
           
        

        

    </div>
  )
}

export default ItemDetailConatiner
import { useEffect, useState} from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import Loading from "../../components/Loading/Loading";


const arreglo =[
  {name: "Balon de Baloncesto", id:"1", image:"imgB/balonB.jpeg", precio:"7.000 ARS", descripcion:"Cuero 100%", 
  categoria:"Baloncesto" },
  {name: "Paracaidas", id:"2",image:"imgF/paracaidas.jpg", precio:"4.500 ARS", descripcion:"", categoria:"Futbol" },
  {name: "Camiseta de Baloncesto", id:"3", image:"imgB/camisaB.jpeg", precio:"15.000 ARS", descripcion:"", categoria:"Baloncesto" },
  {name: "Bate de Beisbol", id:"4", image:"imgBe/bate.jpeg", precio:"7.900 ARS", descripcion:"", categoria:"Beisbol" },
  {name: "Camiseta de Beisbol", id:"5", image:"imgBe/camisaBe.jpg", precio:"11.400 ARS", descripcion:"", categoria:"Beisbol" },
  {name: "Gorra", id:"6", image:"imgBe/gorra.jpg", precio:"9.900 ARS", descripcion:"", categoria:"Beisbol" },
  {name: "Aro", id:"7", image:"imgB/aro.jpeg", precio:"3.400 ARS", descripcion:"Incluye 4 tornillos para la instalacion",
  categoria:"Baloncesto"},
  {name: "Balon de Futbol", id:"8", image:"./imgF/balonF.webp", precio:"7.992 ARS", descripcion:"", categoria:"Futbol" },
  {name: "Camiseta de Futbol", id:"9", image:"imgF/camisaF.jpg", precio:"28.000 ARS", descripcion:"", categoria:"Futbol" },
  {name: "Zapatillas de Baloncesto", id:"10", image:"imgB/zapatos.jpg", precio:" 72.000 S", descripcion:"", categoria:"Baloncesto" },
  {name: "Casco de Futbol", id:"11", image:"imgFA/casco.jpeg", precio:"100.000 ARS", descripcion:"", categoria:"Futbol Americano" },
  {name: "Pelota de Beisbol", id:"12", image:"imgBE/pelota.jpeg", precio:"2.000 ARS c/u", descripcion:"", categoria:"Beisbol" },
  {name: "Camiseta de Futbol Americano", id:"13", image:"imgFA/jersey.jpeg", precio:"18.000 ARS", descripcion:"", categoria:"Futbol Americano" },
  {name: "Ovoide", id:"14", image:"imgFA/ovoide.jpeg", precio:" 10.500 ARS", descripcion:"", categoria:"Futbol Americano" },
  {name: "Zapatillas de Futbol ", id:"15", image:"imgF/zapatillasF.jpg", precio:"50.000ARS", descripcion:"", 
  categoria:"Futbol" },
  {name: "Protector de Futbol", id:"16", image:"imgFA/proteccion.jpeg", precio:"90.900 ARS", descripcion:"", categoria:"Futbol Americano" },
  {name: "Zapatillas de Futbol", id:"17", image:"imgFA/zapatosFA.jpeg", precio:"45.000 ARS", descripcion:"", categoria:"Futbol Americano" },
  {name: "Tabla de jugadas", id:"18", image:"imgB/tabla.jpg", precio:"4.00 ARS", descripcion:"", categoria:"Baloncesto" },
  {name: "Guante de Beisbol", id:"19", image:"imgBe/guante.jpeg", precio:"25.000 ARS", descripcion:"", categoria:"Beisbol" },
  {name: "Arqueria de Futbol", id:"20", image:"imgF/porteria.png", precio:" 14.250 ARS", descripcion:"", categoria:"Futbol" },
  
];




 
const ItemLisContainer = () => {
  const {categoria} = useParams()
  
 // const [filtrado, setFiltrado]= useState([]);
 const [products , setProducts] = useState([]);
 const [loading, setLoading] = useState(true)





 

 
 
 
  

//const getProducts = new Promise ((resolve , reject) => {
//  setTimeout(()=> {
//    resolve(arreglo)
//    
//  }, 2000);
//})
const getProducts = () => {
  const db = getFirestore();
  const config = collection(db,'items');
  
  const newConfig = categoria 
  ? query(config, where('categoria','==', categoria))
  : config
//    if (categoria) {
//      const newconfig = query(
//        config,
//        where("categoria", "==",categoria) 
//        );
//        
//      getDocs(newconfig)
//      .then((response)=>{
//        const data = response.docs.map((doc)=> {
//          //console.log(doc.id)
//          return {id: doc.id, ...doc.data()}
//          
//      });
//        // 
//        console.log(data)
//        setProducts(data)
//      }).catch(error => console.error(error))
//
//    } else {
//      getDocs(config)
//      .then((response)=>{
//        const data = response.docs.map((doc)=> {
//          //console.log(doc.id)
//          return {id: doc.id, ...doc.data()}
//      });
//        // setloading(false)
//        //console.log(data)
//        setProducts(data)
//      }).catch(error => console.error(error))
//
//    }
  getDocs(newConfig) 
  .then((response)=> {
    const data = response.docs.map((doc)=> {
      //console.log(doc.id)
      return {id: doc.id, ...doc.data()};
  });
     setLoading(false)
    //console.log(data)
    setProducts(data)
  }).catch(error => console.error(error))

}
//const getProducts = fetch('https://fakestoreapi.com/products', {
//  method:"GET",
//    headers: {
//      'content-type': 'json'
//    }
//
//  });

 useEffect(()=> {
  setTimeout(()=> {
    setLoading(false)
    getProducts();
  },2000)
 
 // //.then((res)=>{
 // //   return  res.json()
 // //})
 // .then((response) => {
 //   setProducts(response)
 //   
 // })
 //  .catch ((error) =>{console.error(error)})
}, [categoria])

//useEffect(()=> {
//  if (categoria) {
//    
//    const remove = categoria.includes("%20")
//    ? categoria.replace('%20', " ")
//    : categoria;
//    const filterProducts = products.filter((product) => product.categoria === remove)
//    setFiltrado(filterProducts)
//
//  }
// 
// 
//},[categoria])

  return(
    <div>
      
      {loading===true?(<Loading/>):(<ItemList productos={products}/>
)}
     
     
     
    
      
  
  
  
  
  
      
    </div>
  )
}

export default ItemLisContainer








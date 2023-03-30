import { useEffect, useState} from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
//import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"
import { FetchAllProducts } from "../../App/SlicesProducts/SlicesProducts";
import { useDispatch, useSelector } from "react-redux"
import Loading from "../../components/Loading/Loading";





const ItemLisContainer = () => {
  
//const [products , setProducts] = useState([]);
 const [loading, setLoading] = useState(true)
  const dispacth = useDispatch()
const {list: products} = useSelector(state=> state.products)

//useEffect(()=>{
//  dispacth(FetchAllUsers())
//},[])
  const {categoria} = useParams()
  
  const [filtrado, setFiltrado]= useState([]);
 

//const getProducts = new Promise ((resolve , reject) => {
//  setTimeout(()=> {
//    resolve(arreglo)
//    
//  }, 2000);
//})

  
  //const db = getFirestore();
 // const config = collection(db,'items');
  
  //const newConfig = categoria 
  //? query(config, where('categoria','==', categoria))
  //: config
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
  //getDocs(newConfig) 
  ///.then((response)=> {
  //  const data = response.docs.map((doc)=> {
      //console.log(doc.id)
    //  return {id: doc.id, ...doc.data()};
  //});
    // setLoading(false)
    //console.log(data)
   // setProducts(data)
  //}).catch(error => console.error(error))


//const getProducts = fetch('https://fakestoreapi.com/products', {
//  method:"GET",
//    headers: {
//      'content-type': 'json'
//    }
//
//  });
useEffect(()=> {
  if (categoria) {
    
     const remove = categoria.includes("%20")
     ? categoria.replace('%20', " ")
     : categoria;
    const filterProducts = products.filter((users) => users.categoria === remove)
     setFiltrado(filterProducts)
 
   }
  
 },[categoria])

useEffect(()=> {
  setTimeout(()=> {
    setLoading(false)
    dispacth(FetchAllProducts())
  },2000)
  

 
 


}, [dispacth])


  return(
    <div>
      
      {loading===true?(<Loading/>):(<ItemList productos={categoria ? filtrado : products}/>
)}
     
     
     
    
      
  
  
  
  
  
      
    </div>
  )
}

export default ItemLisContainer








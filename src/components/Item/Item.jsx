import './Item.css'


const Item = ({producto}) => {
  return (
      <div className='contenedor'>

     
      <li   className='products'>
        <img alt ={"producto.id"} src ={`../${producto.img}`} width="200px" />
       
      <h2 className='title-cards'>{producto.nombre}</h2>
      <h3>{producto.precio} </h3>
      <h4>{producto.description} </h4>
      <h5>{producto.categoria} </h5>
    </li>
    </div>
    
  )
   
  
}

export default Item 
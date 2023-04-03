import { NavLink } from "react-router-dom"
import { toast } from "react-toastify";

const Form = () => {
    const registro =()=> {
        toast.success('Te registraste correctamente',{
            position:"bottom-left"
        })
    }
  return (
    
    <div className="flex items-center justify-center h-[400px] w-[1500px] fixed top-0 left-0 w-screen h-screen bg-black/50">
    <form  method="post">
      <div className="bg-gray-500 w-96 p-6 rounded shadow-sm">
        <div className="grid grid-cols-2 ">
        <span className=" flex items-center justify-center text-4xl">RphStore</span> 

        </div>
        <div className="py-2">
          <label>Nombre y Apelido</label>
          <input 
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu nombre y apellido" 
          type="text"
          required
           />
          
        </div>
        
        <div>
          <label>Telefono</label>
          <input 
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu telefono" 
          type="text"
          required
           />

            
          
        </div>
        
        <div>
          <label>Email</label>
          <input 
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu email" 
          type="email"
          required
           />
          
        </div>
        <div>
          <label>Contraseña</label>
          <input 
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu contraseña" 
          type="text"
          required
           />

            
          
        </div>
        <div>
          <label>Confirmacion</label>
          <input 
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu contraseña" 
          type="text"
          required
           />

            
          
        </div>
        <div className="">
        <NavLink to="/">
            <div className=" text-center w-full hover:bg-green-600 text-white font-bold py-2 px-4  shadow-md " >
                Registrarme
            </div>
        </NavLink>
       

        </div>
        
        
        
      </div>
      
    </form>
  </div>



  )
}

export default Form
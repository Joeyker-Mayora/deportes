import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom"
import { toast } from "react-toastify";

const Form = () => {
   
  const {register, formState: {errors}, handleSubmit} = useForm();
  const conSubmit = (data) => {
    console.log(data)
  }

return (
    
    <div className="flex items-center justify-center h-[400px] w-[1500px] fixed top-0 left-0 w-screen h-screen bg-black/50">
    
      <div className="bg-gray-500 w-96 p-6 rounded shadow-sm">
        <div className="grid grid-cols-2 ">
        <span className=" font-extrabold text-green-700 flex items-center justify-center text-4xl"><span className=" text-blue-700">Rph</span>Store</span> 
       
        </div>
         <form onSubmit={handleSubmit(conSubmit)}>
        <div className="py-2">
          <label>Nombre y Apelido</label>
          <input 
          {...register("nombre",{required: true})}
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu nombre y apellido" 
          type="text"
          
           />
          {errors.nombre?.type === "required" && <p className=" text-xs text-red-600">El campo Nombre es requerido</p>}
        </div>
        
        <div>
          <label>Telefono</label>
          <input 
           {...register("phone")}
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu telefono" 
          type="text"
           />

            
          
        </div>
        
        <div>
          <label>Email</label>
          <input 
           {...register("email",{
            pattern :/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/})}
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu email" 
          type="email"
          
           />
           {errors.email?.type === "pattern" && <p className=" text-xs text-red-600">El campo Email es requerido</p>}

        </div>
        <div>
          <label>Contraseña</label>
          <input 
           {...register("contraseña",{required: true})}
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu contraseña" 
          type="text"
          
           />

    {errors.contraseña?.type === "required" && <p className=" text-xs text-red-600">La contraseña es requerida</p>}

          
        </div>
        <div>
          <label>Confirmacion</label>
          <input 
           {...register("validacion",{required: true})}
          className="w-full py-2 px-1 outline-none mb-4 bg-gray-200"
          placeholder="Ingresa tu contraseña" 
          type="text"
          
           />

        {errors.validacion?.type === "required" && <p className=" text-xs text-red-600">La confirmacion es requerida</p>}

          
        </div>
        <div>
            <input type="submit" value="Registrarme" className=" text-center w-full hover:bg-green-600 text-white font-bold py-2 px-4  shadow-md " />
            
           
        
       

        </div>
        </form>
        
        
        
      </div>
      
    
  </div>



  )
}

export default Form
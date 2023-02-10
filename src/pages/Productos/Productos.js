const arreglo =[
    {name: "Zapatillas de Futbol ", id:"1", image:"imgF/zapatillas.webp", precio:"50.000ARS", descripcion:"", 
  categoria:"Futbol" },
    {name: "Paracaidas", id:"2",image:"imgF/paracaidas.jpg", precio:"4.500 ARS", descripcion:"", categoria:"Futbol" },
    {name: "Camiseta de Baloncesto", id:"3", image:"imgB/camisaB.jpeg", precio:"15.000 ARS", descripcion:"", 
  categoria:"baloncesto" },
    {name: "Bate de Beisbol", id:"4", image:"imgBe/bate.jpeg", precio:"7.900 ARS", descripcion:"", categoria:"beisbol" },
    {name: "Camiseta de Beisbol", id:"5", image:"imgBe/camisaBe.jpeg", precio:"11.400 ARS", descripcion:"", 
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
    {name: "Balon de Baloncesto", id:"15", image:"imgB/balobB.jpeg", precio:"7.000 ARS", descripcion:"Cuero 100%", 
    categoria:"baloncesto" },
    {name: "Protector de Futbol", id:"16", image:"imgFA/proteccion.jpeg", precio:"90.900 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
    {name: "Zapatillas de Futbol", id:"17", image:"imgaFA/zapatosF.jpeg", precio:"45.000 ARS", descripcion:"", 
  categoria:"futbolAmericano" },
    {name: "Tabla de jugadas", id:"18", image:"imgB/tabla.jpg", precio:"4.00 ARS", descripcion:"", categoria:"baloncesto" },
    {name: "Guante de Beisbol", id:"19", image:"imgBe/guante.jpeg", precio:"25.000 ARS", descripcion:"", 
  categoria:"beisbol" },
    {name: "Arqueria de Futbol", id:"20", image:"imgF/porteria.png", precio:" 14.250 ARS", descripcion:"", 
  categoria:"Futbol" },

];



  export const getProduct =(id)=>{
  return new Promise((resolve)=>{
    const productoFiltrado = arreglo.filter(p=> p.id === parseInt(id))
    setTimeout (()=>{
      resolve(productoFiltrado)
    },2000)
  })
}
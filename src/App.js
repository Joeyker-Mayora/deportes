import NavBar from './components/Navbar/NavBar';
import ItemLisContainer from './pages/ItemLisContainer/ItemLisContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailConatiner from './pages/ItemDetailContainer/ItemDetailConatiner';
import CartProvider from './Context/CartProvider';
import Cart from './pages/Cart/Cart';

function App() {
  return (

    //<Route path='/'element={<ItemLisContainer greeting= "" />} />
    //<Route path='/categoria/:categoria'element={<ItemLisContainer />} />
    //<Route path='/detalles'element={<ItemDetailConatiner />} />
    //<Route path='/item/:id'element={<ItemDetailConatiner />} />

    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/'element={<ItemLisContainer/>} />
          <Route path='/item/:id'element={<ItemDetailConatiner />} />
          <Route path='/categoria/:categoria'element={<ItemLisContainer />} />
          <Route path='/categoria/:categoria/item/:id' element={<ItemDetailConatiner/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
       </CartProvider>
    </BrowserRouter>
   

   
  
  )
}
export default App 
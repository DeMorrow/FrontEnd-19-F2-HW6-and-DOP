import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Header from './Segments/Header/Header';
import './style.css'
import { useState } from 'react';
import Category from './Pages/Category/Category';
import Details from './Pages/Details/Details';

function App() {

  const [cartData, setCartData] = useState([]);
  const buyFunc = (obj) => {
    const idx = cartData.findIndex(item => {
      return obj.id == item.id
    });

    if(idx > -1){
      cartData[idx].count = cartData[idx].count + 1;
      setCartData([...cartData])
    } else{
      setCartData([{
        ...obj,
        count:1.
      }, ...cartData])
    }
  }
  
  return (
    <BrowserRouter>
    <Header cartData={cartData}/>


      <Routes>
    <Route path={'/'} element={<Home buyFunc={buyFunc}/>}/>
    <Route path='/cart' element={<Cart buyFunc={buyFunc} cartData={cartData} setCartData={setCartData}/>}/>
    <Route path='/category/:category' element={<Category buyFunc={buyFunc}/>} />
    <Route path='/details/:id' element={<Details buyFunc={buyFunc} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

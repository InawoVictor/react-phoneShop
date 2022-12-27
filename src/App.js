import {FaHome} from 'react-icons/fa'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductLists from './components/ProductLists'
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {Routes, Route} from 'react-router-dom';
import { storeProducts } from "./data";
import {detailProduct} from './data';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductLists item={storeProducts}/>} />
        <Route path='/details' element={<Details details={storeProducts}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Default />} />
        
      </Routes>
      
    </> 
  );
}

export default App;

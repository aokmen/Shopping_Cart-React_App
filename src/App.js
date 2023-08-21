
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import NotFound from "./pages/NotFound";
function App() {

  

  return (

    <BrowserRouter className="bg-light app">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>  
        <Route path="/new-product" element={<NewProduct/>}/>      
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

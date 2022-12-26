import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import SingleProductPage from './Pages/SingleProductPage';
import Cart from './Pages/Cart';
import ErrorPage from './Pages/ErrorPage';
import { GlobalStyle } from './Styles/GlobalStyles';
import {ThemeProvider} from 'styled-components'

function App() {

  const theme ={
    colors:{
      bg:"f6f8fa",
    },
  }
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/> 
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/singleproducts/:id' element={<SingleProductPage/>}/> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, styled } from "@mui/system";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from './pages/Cart';
import { ThemeProvider } from "@mui/material";

import theme from "./theme";


const PaddingDiv = styled(Box)(() => ({
    height: '100px',
    '@media (max-width:600px)': {
      height: '75px',
    }
}));

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const sameItemIndex = cart.findIndex(x => (x.id == item.id && x.color == item.color && x.size == item.size));

    if(sameItemIndex > -1) {
      const newCart = [...cart];
      newCart[sameItemIndex].quantity += item.quantity;
      setCart(newCart);
    } else 
      setCart([...cart, item])
  }
  function removeFromCart(index) {
    setCart(cart.filter((x, i) => i !== index));
  }
  function setQuanity(index, quantity){
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  }
  function getCartCount() {
    return cart.map(x => x.quantity).reduce((sum, n) => sum + n, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/shopping-cart/">
        <Nav cartCount={getCartCount}/>
        <PaddingDiv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/products">
            <Route exact path=":name" element={
              <Product addToCart={addToCart}/>
             } />
          </Route>
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} setQuanity={setQuanity}/>} />
        </Routes>
        <PaddingDiv />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

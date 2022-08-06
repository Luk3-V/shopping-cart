import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, styled } from "@mui/system";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";


const PaddingDiv = styled(Box)(() => ({
    height: '100px'
}));

function App() {

  return (
      <BrowserRouter>
        <Nav />
        <PaddingDiv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/products">
            <Route exact path=":name" element={
              <Product />
             } />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

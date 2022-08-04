import Nav from "./components/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, styled } from "@mui/system";

const PaddingDiv = styled(Box)(() => ({
    height: '100px'
}));

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <PaddingDiv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

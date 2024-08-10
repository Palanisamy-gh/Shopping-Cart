import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

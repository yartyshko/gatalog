import "./styles.css";
import Catalog from "./pages/catalog/Catalog";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";

function App() {
  return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;

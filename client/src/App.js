import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Chart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

function App() {
  const user = true;
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="products/:category" element={<ProductList />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
    </Routes>
  );
}

export default App;
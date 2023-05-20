import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "./pages";
import Mockman from "mockman-js";
import { Loader, Navbar, Toast } from "./components";
import "./styles.css";
import { useDataContext } from "./contexts/DataContext";

function App() {
  const { isLoading, toast } = useDataContext();
  return (
    <div className="App">
      {isLoading && <Loader />}
      <Router>
        <Navbar />
        {toast.msg && <Toast />}
        <Routes>
          <Route path="/" />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" />
          <Route path="/login" />
          <Route path="/signup" />
          <Route path="*" />
          <Route path="/wishlist" />
          <Route path="/cart" />
          <Route path="/checkout" />
          <Route path="/profile" />
          <Route path="/test" element={<Mockman />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

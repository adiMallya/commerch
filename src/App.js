import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product, Login, Profile, SignUp, Wishlist, Cart } from "./pages";
import Mockman from "mockman-js";
import { Loader, Navbar, Toast, PrivateRoute } from "./components";
import "./styles.css";
import { useDataContext } from "./contexts/DataContext";

function App() {
  const { isLoading, toast } = useDataContext();
  return (
    <div className="App">
      {isLoading && <Loader />}
      <Navbar />
      {toast.msg && <Toast />}
      <Routes>
        <Route path="/" />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/checkout" />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;

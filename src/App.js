import { Routes, Route } from "react-router-dom";
import {
  ProductList,
  Login,
  Profile,
  SignUp,
  Wishlist,
  Cart,
  ProductDetail,
} from "./pages";
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
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
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

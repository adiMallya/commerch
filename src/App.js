import { Routes, Route } from "react-router-dom";
import {
  ProductList,
  Login,
  SignUp,
  Wishlist,
  Cart,
  ProductDetail,
  Account,
  NotFoundPage,
  Checkout,
  Home,
} from "./pages";
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
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
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
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

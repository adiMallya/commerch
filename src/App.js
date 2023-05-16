import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Loader, Navbar } from "./components";
import "./styles.css";
import { useDataContext } from "./contexts/DataContext";

function App() {
  const { isLoading } = useDataContext();
  return (
    <div className="App">
      {isLoading && <Loader />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/products" />
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

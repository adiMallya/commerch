import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./styles.css";

function App() {
  return (
    <div className="App">
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

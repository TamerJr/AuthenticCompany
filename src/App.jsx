import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Account,
  Home,
  Shop,
  ProductDetails,
  LogIn,
  SignUp,
  Terms,
  AboutUs,
  Navbar,
} from "./Utilities/Utilities";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

import { useContext, useState } from "react";
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
  Footer,
} from "./Utilities/Utilities";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import userContext from "./Contexts/AuthContext";
import ProtectLogIn from "./Components/ProtectLogIn/ProtectLogIn";

function App() {
  const { user } = useContext(userContext);
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
          path="/shop/productdetails/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectLogIn>
              <LogIn />
            </ProtectLogIn>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      {user && <Footer />}
    </div>
  );
}

export default App;

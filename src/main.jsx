import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Contexts/AuthContext";
import App from "./App";
import "./index.css";
import { DBContextProvider } from "./Contexts/DBContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <DBContextProvider>

         <App />
        </DBContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

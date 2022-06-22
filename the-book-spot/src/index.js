import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoriteIdProvider } from "./contexts/favoriteIDsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteIdProvider>
    <Router>
      <App />
    </Router>
  </FavoriteIdProvider>
);

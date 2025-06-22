import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/main.scss";
console.log("🌱 React app starting...");
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

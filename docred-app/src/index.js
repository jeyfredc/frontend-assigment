import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import './styles/global.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);
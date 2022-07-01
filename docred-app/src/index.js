import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import './styles/global.css';
import 'primeicons/primeicons.css';
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App/>);
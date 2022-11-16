import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main/>);

const helloDiv = document.createElement("div");
helloDiv.innerHTML = "Hello from Javascript!";
document.body.append(helloDiv);
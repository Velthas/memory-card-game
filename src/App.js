import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<div>Hello, react!</div>);

const helloDiv = document.createElement("div");
helloDiv.innerHTML = "Hello from Javascript!";
document.body.append(helloDiv);
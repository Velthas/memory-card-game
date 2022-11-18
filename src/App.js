import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Main from "./components/Main";
import Header from "./components/Header";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <Header/>
    <Main/>
  </>
);

const helloDiv = document.createElement("div");
helloDiv.innerHTML = "Hello from Javascript!";
document.body.append(helloDiv);
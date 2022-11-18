import React from "react";
import { createRoot } from "react-dom/client";

import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
);

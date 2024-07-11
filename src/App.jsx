import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Quality from "./Quality";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Global";
import Gallary from "./Gallery";

const App = () => {
  const theme = {
    colors: {
      heading: "#000",
      text: "#000",
      white: "#fff",
      black: "#212529",
      helper: "#001840",
      bg: "#ccc",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "fff",
      gradient: "linear-gradient(0deg,rbg(132 144 255) )0%, rbg(98 189 252)10",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15)",
      shadowSupport: "rgba(0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

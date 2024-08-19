import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Axios from "axios";
import ViewSinglePost from "./components/ViewSinglePost";
import Flash from "./components/Flash";
Axios.defaults.baseURL = "http://localhost:8080";

function Main() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexAppToken"))
  );
  const [flash, setFlash] = useState([]);

  function addFlash(msg) {
    setFlash((prev) => prev.concat(msg));
  }

  return (
    <BrowserRouter>
      <Flash msg={flash} />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route
          path="/create-post"
          element={<CreatePost addFlash={addFlash} />}
        />
        <Route path="/post/:id" element={<ViewSinglePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}

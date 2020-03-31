import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Ensaios from "./pages/ensaios";
import Eventos from "./pages/eventos";
import Wallpapers from "./pages/wallpapers";
import Admin from "./pages/admin";

import Header from "./pages/components/Header";
import Contact from "./pages/components/Contact";
import HeaderContext from "./pages/context";
export default function Routes() {
  const [name, setName] = useState("Administrador");
  const [buttonType, setButtonType] = useState("outline-dark");
  function buttonStyles() {
    if (localStorage.getItem("adminId")) {
      setName("Sair");
      setButtonType("outline-danger");
    } else {
      setName("Administrador");
      setButtonType("outline-dark");
    }
  }
  return (
    <BrowserRouter>
      <HeaderContext.Provider value={{ buttonStyles }}>
        <Header btnText={name} btnStyles={buttonType} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ensaios" component={Ensaios} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/wallpapers" component={Wallpapers} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Contact />
      </HeaderContext.Provider>
    </BrowserRouter>
  );
}

import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAdn } from "react-icons/fa";
import styled from "styled-components";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/Products";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";
import Cart from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar and others */}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

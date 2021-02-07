import React from "react";
import Hero from "../components/Hero";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Hero title="Awesome gadget" max="true" style={{ margin: "2rem" }}>
      <Link to="/products" className="main-link">
        Our Products
      </Link>
    </Hero>
  );
};

export default HomePage;

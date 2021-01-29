import React from "react";
import { ProductConsumer } from "../context/context";

const HomePage = () => {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          console.log(value);
          return <h1>This is the home page</h1>;
        }}
      </ProductConsumer>
    </>
  );
};

export default HomePage;

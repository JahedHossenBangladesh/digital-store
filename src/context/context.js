import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="This is from Context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

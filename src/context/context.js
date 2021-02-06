import React, { Component } from "react";
import { linkData } from "./linkData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 12,
    links: linkData,
    cart: [],
  };

  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  };
  closeCart = () => {
    this.setState({
      cartOpen: false,
    });
  };
  openCart = () => {
    this.setState({
      cartOpen: true,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          openCart: this.openCart,
          closeCart: this.closeCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/context";
import log from "../images/logo.svg";
export default function Navbar() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          const { cartItem, handleSidebar, handleCart } = value;
        }}
      </ProductConsumer>
    </>
  );
}

const NavWrapper = styled.nav``;

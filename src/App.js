import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAdn } from "react-icons/fa";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          This is Jahdded <FaAdn />
          <Buttons>This </Buttons>{" "}
        </h1>
        ;
      </div>
    );
  }
}
const coolor = "#f15025";
const Buttons = styled.button`
  color: red;
  background: ${coolor};
  font-size: ${(props) => (props.large ? "3rem" : "1.5rem")};
`;
export default App;

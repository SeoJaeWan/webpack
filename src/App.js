import React from "react";
import styled from "styled-components";
import BlackHans from "./assets/fonts/BlackHanSans-Regular.ttf";
import Logo from "./logo.png";

const CustomDiv = styled.div`
  @font-face {
    font-family: "BlackHanSans";
    src: url(${BlackHans}) format("truetype");
  }

  * {
    font-family: "BlackHanSans";
  }
`;

const App = () => {
  return (
    <div>
      <div>
        <img src={Logo} />
        <h1>Hello! Webpack World!</h1>
      </div>
      <CustomDiv>
        <h1>Hello! Webpack World!</h1>
      </CustomDiv>
    </div>
  );
};

export default App;

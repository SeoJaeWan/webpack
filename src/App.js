import React from "react";
import styled from "styled-components";

const CustomDiv = styled.div`
  @font-face {
    font-family: "BlackHanSans";
    src: url("./assets/fonts/BlackHanSans-Regular.ttf") format("truetype");
  }

  * {
    font-family: "BlackHanSans";
  }
`;

const App = () => {
  console.log(process.env.TEST_TEXT);

  return (
    <div>
      <div>
        <h1>Hello! Webpack World!</h1>
      </div>
      <CustomDiv>
        <h1>Hello! Webpack World!</h1>
      </CustomDiv>
    </div>
  );
};

export default App;

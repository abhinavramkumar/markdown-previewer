import React from "react";
import { render } from "react-dom";
import Home from "./screens/Home";
import "sanitize.css";
import { ThemeProvider, injectGlobal } from "styled-components";
// DEBUG
import "./playground";

const theme = {
  colors: {
    green: "#92C9B1",
    blue: "#4F759B",
    purple: "#5D5179",
    violet: "#571F4E"
  },
  variables: {
    containerWidth: "85%"
  }
};

injectGlobal`
  html {
    font-size: 14px;
  }
  body {
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0 0 0.5rem 0;
    line-height: 1.414;
  }
  h1 {
    font-size: calc(1rem * 2.125);
  }

  h2 {
    font-size: calc(1rem * 2);
  }

  h3 {
    font-size: calc(1rem * 1.875);
  }

  h4 {
    font-size: calc(1rem * 1.625);
  }

  h5 {
    font-size: calc(1rem * 1.325);
  }
  h6 {
    font-size: calc(1rem * 1.125);
  }
`;

const appRoot = document.getElementById("App");
const ComposedApp = props => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

if (appRoot) {
  render(<ComposedApp />, appRoot);
}

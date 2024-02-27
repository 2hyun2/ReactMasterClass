import React from "react";
import ReactDOM from "react-dom";
// import App from "./Root";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router"




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
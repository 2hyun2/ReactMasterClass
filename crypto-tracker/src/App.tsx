import { createGlobalStyle } from "styled-components";
import Router from "./Router"
import "./css/layout.css"

const GlobalStyle = createGlobalStyle`
  body{background-color: ${(props) => (
    props.theme.bgColor
  )};}
  *{
    color: ${(props) => (props.theme.textColor)};
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router />
    </>
  );
}

export default App;

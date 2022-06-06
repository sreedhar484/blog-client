import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}
export default App;

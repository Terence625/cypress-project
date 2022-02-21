import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StyledEngineProvider } from '@mui/material/styles';
import BasicTextFields from "./component/BasicTextFields";
// ========================================

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BasicTextFields />
  </StyledEngineProvider>,
  document.querySelector("#root")
);

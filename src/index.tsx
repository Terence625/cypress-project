import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StyledEngineProvider } from '@mui/material/styles';
import OfferNoInput from "./component/OfferNoInput";
// ========================================

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <OfferNoInput element={document} />
  </StyledEngineProvider>,
  document.querySelector("#root")
);

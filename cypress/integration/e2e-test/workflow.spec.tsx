import React from "react";
import ReactDOM from "react-dom";
import Display from "../../../src/component/Display";
import { StyledEngineProvider } from "@mui/material/styles";
import OfferNoInput from "../../../src/component/OfferNoInput";

describe("workflow", function () {
  it("should render", function () {
    cy.visit("/")
      .its("document")
      .then((doc) => {
        const displayDiv = doc.createElement("div");
        doc.addEventListener("offerNoSubmitClick", cy.stub().as("offerNoSubmitClick"));
        cy.get("@offerNoSubmitClick", { timeout: 1e6 })
          .should("be.called")
          .its("firstCall.args.0.detail")
          .then((detail) => {
            ReactDOM.render(<Display value={detail} />, displayDiv);
            doc.body.appendChild(displayDiv);
            cy.log(detail);
          });
      });
  });
});

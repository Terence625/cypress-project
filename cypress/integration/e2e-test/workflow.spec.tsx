import React from "react";
import ReactDOM from "react-dom";
import Display from "../../../src/component/Display";
import Input from "../../../src/component/Input";

describe("workflow", function () {
  it("should render", function () {
    cy.document().then((doc) => {
      const inputDiv = doc.createElement("div");
      const displayDiv = doc.createElement("div");
      const replacedDiv = doc.getElementsByClassName("container")[0];
      inputDiv.setAttribute("class", "input");
      displayDiv.setAttribute("class", "display");
      ReactDOM.render(<Input element={doc} />, inputDiv);

      replacedDiv.replaceWith(inputDiv);
      doc.addEventListener("inputClick", cy.stub().as("inputClick"));
      cy.get("@inputClick", { timeout: 1e6 })
        .should("be.called")
        .its("firstCall.args.0.detail")
        .then((detail) => {
          ReactDOM.render(<Display value={detail}/>, displayDiv);
          doc.body.appendChild(displayDiv);
          cy.log(detail);
        });
    });
  });
});

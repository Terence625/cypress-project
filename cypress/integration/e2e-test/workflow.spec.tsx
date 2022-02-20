import React from "react";
import ReactDOM from "react-dom";
import Display from "../../../src/component/Display";
import Input from "../../../src/component/Input";

describe("workflow", () => {
  it("should render", () => {
    cy.document().then((doc) => {
      const inputDiv = doc.createElement("div");
      const displayDiv = doc.createElement("div");
      const replacedDiv = doc.getElementsByClassName("container")[0];
      inputDiv.setAttribute("class", "input");
      displayDiv.setAttribute("class", "display");
      ReactDOM.render(<Input element={doc} />, inputDiv);
      ReactDOM.render(<Display />, displayDiv);
      replacedDiv.replaceWith(inputDiv);
      doc.addEventListener("inputClick", cy.stub().as("inputClick"));
      cy.get("@inputClick")
        .should("be.called")
        .then(() => doc.body.appendChild(displayDiv));
    });
  });
});

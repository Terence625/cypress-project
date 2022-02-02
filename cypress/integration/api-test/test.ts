describe("test", () => {
  it("test", function () {
    cy.request({
      url: "/posts/1",
      method: "PUT",
      body: {
        id: 1,
        title: "test",
        author: "test",
      },
    });
  });
});

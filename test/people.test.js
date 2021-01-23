const app = require("../modules/app/app.js");

describe(`People endpoints`, () => {
  describe(`GET '/people'`, () => {
    it("Responds 200, Returns an array", () => {
      return supertest(app)
        .get("/people")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.a("array");
        });
    });
  });
  describe(`POST '/people'`, () => {
    it("Response 201 and adds name to people queue", () => {
      const newName = { name: "Saul Goodman" };
      return supertest(app)
        .post("/people")
        .send(newName)
        .expect(201, [
          "Randy Lahey",
          "Trevor Cory",
          "Jim Lahey",
          "Saul Goodman",
        ]);
    });
  });
});

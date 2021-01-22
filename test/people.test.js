const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../modules/app/app.js");

describe(`People endpoints`, () => {
  describe(`GET '/people'`, () => {
    it("Responds 200, Returns an array of strings", () => {
      return supertest(app)
        .get("/people")
        .expect(200, ["Randy Lahey", "Trevor Cory", "Jim Lahey"]);
    });
  });
});

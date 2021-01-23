const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../modules/app/app.js");

describe(`Cat Endpoints`, () => {
  describe(`GET '/cats'`, () => {
    it("GET, Respond with 200 and return next cat", () => {
      return supertest(app)
        .get("/cats")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.a("object");
          expect(res.body).to.include.keys(
            "age",
            "breed",
            "description",
            "gender",
            "imageURL",
            "name",
            "story"
          );
        });
    });
  });
  describe(`DELETE "/cats"`, () => {
    it("Respond with 204, Cat Removed", () => {
      return supertest(app).delete(`/cats`).expect(204);
    });
  });
});

describe(`Dog Endpoints`, () => {
  describe(`GET '/dogs'`, () => {
    it("GET, Respond with 200 and return next dog", () => {
      return supertest(app)
        .get("/dogs")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.a("object");
          expect(res.body).to.include.keys(
            "age",
            "breed",
            "description",
            "gender",
            "imageURL",
            "name",
            "story"
          );
        });
    });
  });
  describe(`DELETE "/dogs"`, () => {
    it("Respond with 204, dog Removed", () => {
      return supertest(app).delete(`/dogs`).expect(204);
    });
  });
});

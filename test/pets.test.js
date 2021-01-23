const supertest = require("supertest");
const app = require("../modules/app/app.js");

describe(`Pet Endpoints`, () => {
  describe(`GET '/pets'`, () => {
    it("GET, Respond with 200 and return all the animals", () => {
      return supertest(app)
        .get("/pets")
        .expect(200)
        .expect((res) => {
          expect(res.body).to.be.a("array");
          expect(res.body[0]).to.include.keys(
            "age",
            "breed",
            "description",
            "gender",
            "imageURL",
            "name",
            "story"
          );
          expect(res.body[1]).to.include.keys(
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
  describe(`DELETE "/pets"`, () => {
    it("Respond with 204, Pet Removed", () => {
      return supertest(app).delete("/pets").expect(204);
    });
  });
});

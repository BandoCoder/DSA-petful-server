const supertest = require("supertest");
const app = require("../modules/app/app.js");

describe("App test", () => {
  it('GET / responds with 200 containing "YOUR TESTS ARE SETUP', () => {
    return supertest(app).get("/").expect(200, "YOUR TESTS ARE SETUP");
  });
});

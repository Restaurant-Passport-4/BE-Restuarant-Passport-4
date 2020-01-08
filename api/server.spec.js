const request = require("supertest");
const server = require("./server.js");
const db = require("../database/dbConfig");
it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("register", () => {
  beforeEach(async () => {
    await db("user").truncate(); // refresh
  });

  it("should return a 201 CREATED status code", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send({
        username: "user1",
        password: "password",
        name: "testname",
        email: "test@test.com",
        city: "Dallas"
      });
    expect(response.status).toBe(201);
  });

  it("should send back JSON", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send({
        username: "user1",
        password: "password",
        name: "testname",
        email: "test@test.com",
        city: "Dallas"
      });
    expect(response.type).toMatch(/json/i);
  });
});

describe("login", () => {
  it("should allow a registered user to log in", async () => {
    const response = await request(server)
      .post("/api/auth/login")
      .send({ username: "user1", password: "password" });
    expect(response.status).toBe(200);
  });

  it("denies acces if user has invalid credentials", async () => {
    const response = await request(server)
      .post("/api/auth/login")
      .send({ username: "user1", password: "notpassword" });
    expect(response.status).toBe(401);
  });
});

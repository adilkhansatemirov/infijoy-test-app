import request from "supertest";

import app from "../../app.js";

// write tests for users routes
describe("users routes", () => {
  // test for GET /api/users
  describe("GET /api/users", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).get("/api/users");

      expect(response.status).toBe(200);
    });
  });
  // test for GET /api/users/:id
  describe("GET /api/users/:id", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).get("/api/users/1");

      expect(response.status).toBe(200);
    });
  });

  describe("POST /api/users", () => {
    describe("given a email and password", () => {
      test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/api/users").send({
          email: "email",
          password: "password",
        });
        expect(response.statusCode).toBe(200);
      });
      test("should specify json in the content type header", async () => {
        const response = await request(app).post("/api/users").send({
          email: "email",
          password: "password",
        });
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
      test("response has userId", async () => {
        const response = await request(app).post("/api/users").send({
          email: "email",
          password: "password",
        });
        expect(response.body.id).toBeDefined();
      });
    });

    describe("when the email and password is missing", () => {
      test("should respond with a status code of 400", async () => {
        const bodyData = [{ email: "email" }, { password: "password" }, {}];
        for (const body of bodyData) {
          const response = await request(app).post("/api/users").send(body);
          expect(response.statusCode).toBe(400);
        }
      });
    });
  });

  // test for PUT /api/users/:id
  describe("PUT /api/users/:id", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).put("/api/users/1");

      expect(response.status).toBe(200);
    });
  });
  // test for DELETE /api/users/:id
  describe("DELETE /api/users/:id", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).delete("/api/users/1");

      expect(response.status).toBe(200);
    });
  });
});

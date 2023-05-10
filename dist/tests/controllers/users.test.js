import request from "supertest";
import app from "../../app.js";
// write tests for users routes
describe("users routes", () => {
    // test for GET /api/v1/users
    describe("GET /api/v1/users", () => {
        it("should return 200 status code", async () => {
            const response = await request(app).get("/api/v1/users");
            expect(response.status).toBe(200);
        });
    });
    // test for GET /api/v1/users/:id
    describe("GET /api/v1/users/:id", () => {
        it("should return 200 status code", async () => {
            const response = await request(app).get("/api/v1/users/1");
            expect(response.status).toBe(200);
        });
    });
    describe("POST /api/v1/users", () => {
        describe("given a email and password", () => {
            test("should respond with a 200 status code", async () => {
                const response = await request(app).post("/api/v1/users").send({
                    email: "email",
                    password: "password",
                });
                expect(response.statusCode).toBe(200);
            });
            test("should specify json in the content type header", async () => {
                const response = await request(app).post("/api/v1/users").send({
                    email: "email",
                    password: "password",
                });
                expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
            });
            test("response has userId", async () => {
                const response = await request(app).post("/api/v1/users").send({
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
                    const response = await request(app).post("/api/v1/users").send(body);
                    expect(response.statusCode).toBe(400);
                }
            });
        });
    });
    // test for PUT /api/v1/users/:id
    describe("PUT /api/v1/users/:id", () => {
        it("should return 200 status code", async () => {
            const response = await request(app).put("/api/v1/users/1");
            expect(response.status).toBe(200);
        });
    });
    // test for DELETE /api/v1/users/:id
    describe("DELETE /api/v1/users/:id", () => {
        it("should return 200 status code", async () => {
            const response = await request(app).delete("/api/v1/users/1");
            expect(response.status).toBe(200);
        });
    });
});
//# sourceMappingURL=users.test.js.map
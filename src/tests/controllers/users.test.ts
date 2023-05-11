import request from "supertest";
import mongoose from "mongoose";

import UsersService from "../../services/users.js";

import app from "../../app.js";

const userId = new mongoose.Types.ObjectId().toString();

const allUsersMockValue = [
  {
    _id: userId,
    email: "john.doe@example.com",
    name: "John Doe",
  },
];

const singleUserMockValue = {
  _id: userId,
  email: "john.doe@example.com",
  name: "John Doe",
  address: "",
  description: "",
  date_of_birth: "2021-01-01T00:00:00.000Z",
  created_at: "2021-01-01T00:00:00.000Z",
  updated_at: "2021-01-01T00:00:00.000Z",
};

const createUserMockValue = {
  _id: userId,
  email: "john.doe@example.com",
  name: "John Doe",
  address: "",
  description: "",
  date_of_birth: "2021-01-01T00:00:00.000Z",
  created_at: "2021-01-01T00:00:00.000Z",
  updated_at: "2021-01-01T00:00:00.000Z",
};

describe("users routes", () => {
  describe("GET /api/users", () => {
    it("should return 200 status code", async () => {
      const getAllUsersServiceMock = jest
        .spyOn(UsersService, "getAllUsers")
        .mockResolvedValue(allUsersMockValue as any);

      const response = await request(app).get("/api/users");

      expect(getAllUsersServiceMock).toHaveBeenCalled();
      expect(response.status).toBe(200);
    });
  });

  describe("GET /api/users/:id", () => {
    it("should return 200 status code", async () => {
      const getSingleUserServiceMock = jest
        .spyOn(UsersService, "getSingleUser")
        .mockResolvedValue(singleUserMockValue as any);
      const response = await request(app).get(`/api/users/${userId}`);

      expect(response.status).toBe(200);
      expect(getSingleUserServiceMock).toHaveBeenCalledWith(userId);
      expect(response.body).toEqual(singleUserMockValue);
    });
  });

  describe("POST /api/users", () => {
    describe("given a email and password", () => {
      it("should respond with a 200 status code", async () => {
        jest
          .spyOn(UsersService, "createUser")
          .mockResolvedValue(createUserMockValue as any);

        const response = await request(app).post("/api/users").send({
          email: "email",
          password: "password",
          name: "name",
        });
        expect(response.statusCode).toBe(200);
      });

      it("should specify json in the content type header", async () => {
        const response = await request(app).post("/api/users").send({
          email: "email",
          password: "password",
        });
        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });

      it("response has userId", async () => {
        const createUserServiceMock = jest
          .spyOn(UsersService, "createUser")
          .mockResolvedValue(createUserMockValue as any);

        const response = await request(app).post("/api/users").send({
          email: "email",
          password: "password",
          name: "name",
        });

        expect(createUserServiceMock).toHaveBeenCalled();
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toBeDefined();
      });
    });

    describe("when the email and password is missing", () => {
      it("should respond with a status code of 400", async () => {
        const bodyData = [{ email: "email" }, { password: "password" }, {}];
        for (const body of bodyData) {
          const response = await request(app).post("/api/users").send(body);
          expect(response.statusCode).toBe(400);
        }
      });
    });
  });

  describe("PUT /api/users/:id", () => {
    it("should return 200 status code", async () => {
      const response = await request(app).put("/api/users/1");

      expect(response.status).toBe(200);
    });
  });

  describe("DELETE /api/users/:id", () => {
    it("should return 200 status code", async () => {
      const deleteUserServiceMock = jest
        .spyOn(UsersService, "deleteUser")
        .mockResolvedValue({} as any);

      const response = await request(app).delete(`/api/users/${userId}`);

      expect(deleteUserServiceMock).toHaveBeenCalled();
      expect(response.status).toBe(200);
    });

    it("should return 404 status code", async () => {
      const getSingleUserServiceMock = jest
        .spyOn(UsersService, "getSingleUser")
        .mockResolvedValue(undefined);

      const deleteUserServiceMock = jest
        .spyOn(UsersService, "deleteUser")
        .mockRejectedValue({} as any);

      const response = await request(app).delete(`/api/users/${userId}`);

      expect(deleteUserServiceMock).toHaveBeenCalled();
      expect(getSingleUserServiceMock).toHaveBeenCalled();
      expect(response.status).toBe(404);
    });
  });
});

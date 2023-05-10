import express from "express";

import errorMiddleware from "./middleware/error.js";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(errorMiddleware.errorHandler);

export default app;
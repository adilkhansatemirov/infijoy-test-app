import express from "express";

import errorHandler from "./middleware/error.js";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(errorHandler);

export default app;

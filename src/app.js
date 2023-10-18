import express from "express";
const app = express();
const port = 3000;

import { requestLogger } from "./middlewares/request-logger.mjs";
import errorHandler from "./middlewares/error-handler.mjs";

app.use(express.json());

app.use(requestLogger);

import tasksRouter from "./routes/tasks.mjs";
app.use("/api", tasksRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

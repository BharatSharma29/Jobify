import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import express from "express";
import jobRouter from "./router/jobRouter.js";
import authRouter from "./router/authRouter.js";
import userRouter from "./router/userRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/user", authenticateUser, userRouter);

// Not Found middleware
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

// Error middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on PORT ${port}...`);
});

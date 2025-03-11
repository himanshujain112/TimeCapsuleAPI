import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import { getUser } from "./middlewares/auth.middleware.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.get("/", getUser, (req, res) => {
	res.send("I am live!!!");
});

app.use("/auth", userRouter);
export default app;

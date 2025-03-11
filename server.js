import express from "express";
import cors from "cors";
const app = express();

app.use(
	cors({
		origin: process.env.CORS_ORIGIN,
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "16kb" }));

app.get("/", (req, res) => {
	res.send("I am live!!!");
});

import userRouter from "./routes/user.routes.js";
app.use("/auth", userRouter);
export default app;

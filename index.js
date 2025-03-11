import "dotenv/config";
import app from "./server.js";
import connectDB from "./db/db.js";
connectDB();
app.listen(process.env.PORT, () => {
	console.log(`Server is started at http://localhost:${process.env.PORT} `);
});

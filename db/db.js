import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`${process.env.DB_URI}/${process.env.DB_NAME}`
		);
		console.log("DB Connected! \nDB HOST: ", conn.connection.host);
	} catch (error) {
		console.log("Connection failed ", error);
		process.exit(1);
	}
};

export default connectDB;

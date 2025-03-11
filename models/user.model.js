import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			index: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			index: true,
		},
		password: {
			type: String,
			required: [true, "Password is required."],
		},

		role: {
			type: String,
			default: "user",
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified(this.password)) return next();
	this.password = bcrypt.hash(this.password, 10);
	next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcrypt.compare(password, this.password);
};
export const User = mongoose.model("User", userSchema);

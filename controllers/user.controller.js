import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
	const body = req.body;

	if (!body || !body.username || !body.password || !body.email) {
		console.log("All fields are required...");
		return res.status(400).json("All fields are required...");
	}

	const result = await User.create({
		username: body.username,
		email: body.email,
		password: body.password,
	});

	return res.status(201).json({ msg: "User registered successfully !!!" });
});

const loginUser = asyncHandler(async (req, res) => {
	const body = req.body;
	if (!body || !body.email || !body.password) {
		return res.status(101).json({ msg: "User not found" });
	}

	const user = await User.findOne({ email: body.email });
	if (!user) {
		return res.status(404).json({ msg: "User not found" });
	}
	const isPasswordCorrect = await user.isPasswordCorrect(body.password);
	if (!isPasswordCorrect) {
		return res.status(401).json({ msg: "Invalid Password" });
	}
	console.log(user, " logged in");
	return res.status(200).json({ msg: "user logged in" });
});
export { registerUser, loginUser };

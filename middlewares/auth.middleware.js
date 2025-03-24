import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
function setUser(user) {
	if (user) {
		const payload = {
			id: user._id,
			username: user.username,
			email: user.email,
		};
		return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
	}
	return null;
}

function getUser(req, res, next) {
	const token = req.cookies?.uid || req.headers.authorization?.split(" ")[1];
	if (!token)
		return res.status(401).json({ msg: "No token, authorization denied" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.user = decoded;
		console.log("Decoded user:", decoded.id); // Add logging to check the decoded user
		next();
	} catch (err) {
		return res.status(401).json({ msg: "Token is not valid" });
	}
}

export { setUser, getUser };

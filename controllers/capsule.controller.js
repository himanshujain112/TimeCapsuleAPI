import { asyncHandler } from "../utils/asyncHandler.js";
import { Capsule } from "../models/capsule.model.js";

const createCapsule = asyncHandler(async (req, res) => {
	const body = req.body;
	if (!body || !body.title || !body.content || !body.unlockdate)
		return res.status(400).json({ msg: "Please fill all the fields." });
	const result = await Capsule.create({
		title: body.title,
		content: body.content,
		unlockdate: body.unlockdate,
		owner: req.user.id,
	});
	return res.status(201).json({ msg: "Capsule created." });
});
const viewCapsule = asyncHandler(async (req, res) => {
	console.log(req.user.id);
	const result = await Capsule.find({ owner: req.user.id })
		.populate("owner","_id")
		.lean();
	//const result = Capsule.find({ owner: req.user.id }).populate("owner").lean();
	return res.status(200).json(result);

	//return res.status(400).json({ body: "No capsule id found" });
});
export { createCapsule, viewCapsule };

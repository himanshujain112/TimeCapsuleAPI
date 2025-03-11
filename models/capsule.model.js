import mongoose, { Schema } from "mongoose";

const capsuleSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		unlockdate: {
			type: Date,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export const Capsule = mongoose.model("Capsule", capsuleSchema);

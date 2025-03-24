import { Router } from "express";
import {
	createCapsule,
	viewCapsule,
} from "../controllers/capsule.controller.js";
import { getUser } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/", getUser, createCapsule);
router.get("/", getUser, viewCapsule);

export default router;

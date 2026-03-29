import { createData } from "../controllers/controller.js";
import express from "express";

const router = express.Router();
router.post("/test", createData);

export default router;

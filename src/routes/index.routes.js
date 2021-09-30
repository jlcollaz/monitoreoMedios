import { Router } from "express";
const router = Router();

import { renderIndex, canvas } from "../controllers/index.conroller";

router.get("/", renderIndex);

export default router;

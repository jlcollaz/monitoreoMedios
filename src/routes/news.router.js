import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import {
  filter_news,
} from "../controllers/news.controller";

const router = Router();
// Authorization
router.use(isLoggedIn);

// Routes
router.post("/filter", filter_news);

export default router;

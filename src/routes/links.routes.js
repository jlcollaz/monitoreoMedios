import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import {
  renderAddLink,
  addLink,
  renderLinks,
  deleteLink,
  editLink,
  renderEditLink,
  upload_file,
  filter_news,
  canvas,
} from "../controllers/links.controller";

const router = Router();
// Authorization
router.use(isLoggedIn);

// Routes
router.get("/add", renderAddLink);
router.post("/add", upload_file, addLink);
router.get("/", isLoggedIn, renderLinks);
router.get("/delete/:id", deleteLink);
router.get("/edit/:id", renderEditLink);
router.post("/edit/:id", upload_file, editLink);
router.post("/filter", filter_news);
router.get("/canvas", canvas);

export default router;

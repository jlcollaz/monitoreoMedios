import { Router } from "express";
const router = Router();

import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  logout,
  getCanvas,
} from "../controllers/auth.controller";

// SIGNUP
router.get("/signup", renderSignUp);
router.post("/signup", signUp);

// SINGIN
router.get("/signin", renderSignIn);
router.post("/signin", signIn);

router.get("/logout", logout);

router.get("/canvas", getCanvas);

export default router;

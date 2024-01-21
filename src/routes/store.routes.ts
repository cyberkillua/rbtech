import express from "express";
import { LoggedInUser, create, login } from "../controllers/storeController";
import { isLoggedIn } from "../middleware/auth.middleware";

import { validateRequestSchema } from "../middleware/validate.middleware";
import {
  validateCreateStore,
  validateLogin,
} from "../routes-schema/store.schema";

const router = express.Router();

router.post("/create", validateCreateStore, validateRequestSchema, create);

router.post("/login", validateLogin, validateRequestSchema, login);

router.get("is-loggedIn", isLoggedIn, LoggedInUser);

export default router;

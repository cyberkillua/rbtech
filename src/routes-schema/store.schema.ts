import { body } from "express-validator";

export const validateCreateStore = [
  body("storeName")
    .isString()
    .withMessage("storeName is invalid, must be string"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("phoneNumber")
    .isString()
    .withMessage("phoneNumber is invalid, must be string"),
];

export const validateLogin = [
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

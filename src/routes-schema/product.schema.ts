import { body } from "express-validator";

export const validateProductUpload = [
  body("name").isString().withMessage("Name is invalid, must be string"),
  body("price").isNumeric().withMessage("price must be a number"),
  body("description")
    .isString()
    .withMessage("Description is invalid, must be string"),
  body("photos").isArray().withMessage("photos must be an array"),
  body("availableSize").isArray().withMessage("availableSize must be an array"),
];

export const validateEditProduct = [
  body("name").isString().withMessage("Name is invalid, must be string"),
  body("price").isNumeric().withMessage("price must be a number"),
  body("description")
    .isString()
    .withMessage("Description is invalid, must be string"),
  body("photos").isArray().withMessage("photos must be an array"),
  body("availableSize").isArray().withMessage("availableSize must be an array"),
  body("productId").isUUID().withMessage("productId must be UUID"),
];

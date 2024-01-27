import { body } from "express-validator";

export const validateProductUpload = [
  body("name").isString().withMessage("Name is invalid, must be string"),
  body("price").isNumeric().withMessage("price must be a number"),
  body("description")
    .isString()
    .withMessage("Description is invalid, must be string"),
  body("photos").isArray().withMessage("photos must be an array"),
  body("availableSize").isArray().withMessage("availableSize must be an array"),
  body("category")
    .isString()
    .withMessage("category is invalid, must be string"),
  body("stockAvailabe")
    .isNumeric()
    .withMessage("stockAvailabe must be a number"),
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
  body("category")
    .isString()
    .withMessage("category is invalid, must be string"),
  body("stockAvailabe")
    .isNumeric()
    .withMessage("stockAvailabe must be a number"),
];

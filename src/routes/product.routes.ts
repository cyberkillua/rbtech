import express from "express";
import { isLoggedIn } from "../middleware/auth.middleware";
import {
  addProductToStore,
  deleteProduct,
  editProduct,
  getAllProductsInaStore,
} from "../controllers/productController";
import {
  validateEditProduct,
  validateProductUpload,
} from "../routes-schema/product.schema";
import { validateRequestSchema } from "../middleware/validate.middleware";

const router = express.Router();

router.post(
  "/add-product",
  validateProductUpload,
  validateRequestSchema,
  isLoggedIn,
  addProductToStore
);

router.put(
  "/edit-product",
  validateEditProduct,
  validateRequestSchema,
  isLoggedIn,
  editProduct
);

router.delete("/delete-product", isLoggedIn, deleteProduct);

router.get("/get-product", getAllProductsInaStore);

export default router;

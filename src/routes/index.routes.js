import { Router } from "express";
import { methods as productControllers } from "./../controllers/product.controller";

const router = Router();

//http://127.0.0.1:4000/api-restful/products/
router.get("/", productControllers.getProducts);
router.get("/:sku", productControllers.getProduct);
router.post("/", productControllers.createProduct);
router.put("/:sku", productControllers.updateProduct);
router.delete("/:sku", productControllers.deleteProduct);

export default router;
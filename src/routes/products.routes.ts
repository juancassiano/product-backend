import { Router, Request, Response } from "express";
import multer from "multer";

import { createProductController } from "../modules/Product/useCases/createProduct";
import { importProductController } from "../modules/Product/useCases/importProduct";
import { listProductController } from "../modules/Product/useCases/listProducts";

const productsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

productsRoutes.post("/", (request: Request, response: Response) => {
  return createProductController.handle(request, response);
});

productsRoutes.get("/", (request: Request, response: Response) => {
  return listProductController.handle(request, response);
});

productsRoutes.post(
  "/import",
  upload.single("file"),
  (request: Request, response: Response) => {
    return importProductController.handle(request, response);
  }
);

export { productsRoutes };

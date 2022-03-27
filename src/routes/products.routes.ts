import { Router, Request, Response } from "express";

import { createProductController } from "../modules/Product/useCases/createProduct";
import { listProductController } from "../modules/Product/useCases/listProducts";

const productsRoutes = Router();

productsRoutes.post("/", (request: Request, response: Response) => {
  return createProductController.handle(request, response);
});

productsRoutes.get("/", (request: Request, response: Response) => {
  return listProductController.handle(request, response);
});

export { productsRoutes };

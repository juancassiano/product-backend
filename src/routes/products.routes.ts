import { Router, Request, Response } from "express";

import { ProductsRepository } from "../modules/Product/repository/ProductsRepository";
import { CreateProductService } from "../modules/Product/services/CreateProductService";

const productsRoutes = Router();
const productsRepository = new ProductsRepository();

productsRoutes.post("/", (request: Request, response: Response) => {
  const { name, category, value, upc } = request.body;

  const createProductService = new CreateProductService(productsRepository);

  createProductService.execute({ name, category, value, upc });

  return response.status(201).send();
});

productsRoutes.get("/", (request: Request, response: Response) => {
  const allProducts = productsRepository.list();

  return response.status(200).json(allProducts);
});

export { productsRoutes };

import { Router, Request, Response } from "express";

import { Product } from "../model/Product";
import { ProductsRepository } from "../repository/ProductsRepository";

const productsRoutes = Router();
const productsRepository = new ProductsRepository();

productsRoutes.post("/", (request: Request, response: Response) => {
  const { name, description, value, upc } = request.body;

  productsRepository.create({ name, description, value, upc });

  return response.status(201).send();
});

productsRoutes.get("/", (request: Request, response: Response) => {
  const allProducts = productsRepository.list();

  return response.status(200).json(allProducts);
});

export { productsRoutes };

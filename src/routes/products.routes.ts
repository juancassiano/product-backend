import { Router, Request, Response } from "express";

import { Product } from "../model/Product";

const productsRoutes = Router();

const products: Product[] = [];

productsRoutes.post("/", (request: Request, response: Response) => {
  const { name, description, value, upc } = request.body;

  const product = new Product();

  Object.assign(product, {
    name,
    description,
    value,
    upc,
    created_at: new Date(),
  });

  products.push(product);

  return response.status(201).json({ product });
});

export { productsRoutes };

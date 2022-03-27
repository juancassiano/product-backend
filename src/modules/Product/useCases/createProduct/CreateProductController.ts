import { Request, Response } from "express";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, category, value, upc } = request.body;

    this.createProductUseCase.execute({ name, category, value, upc });

    return response.status(201).send();
  }
}

export { CreateProductController };

import { Request, Response } from "express";

class ImportProductController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    return response.status(201).send();
  }
}

export { ImportProductController };

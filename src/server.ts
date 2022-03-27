import express, { NextFunction, Request, Response } from "express";

import { productsRoutes } from "./routes/products.routes";

const app = express();
app.use(express.json());
// function verifyIfProductAlreadyExists(
//   request: Request,
//   response: Response,
//   next: NextFunction
// ) {
//   const { upc } = request.headers;
//   const productAlreadyExists = products.find((product) => product.upc === upc);
// }

app.use("/products", productsRoutes);

app.get("/", (request: Request, response: Response) => {
  return response.send("Ola");
});

app.listen(3000);

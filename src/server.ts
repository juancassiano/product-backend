import express, { NextFunction, Request, Response } from "express";

import { productsRoutes } from "./routes/products.routes";

const app = express();
app.use(express.json());

app.use("/products", productsRoutes);

app.listen(3000);

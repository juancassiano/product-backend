import { ProductsRepository } from "../../repository/ProductsRepository";
import { ImportProductController } from "./ImportProductController";
import { ImportProductUseCase } from "./ImportProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const importProductUseCase = new ImportProductUseCase(productsRepository);
const importProductController = new ImportProductController(
  importProductUseCase
);

export { importProductController };

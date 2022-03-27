import { ProductsRepository } from "../../repository/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const productsRepository = ProductsRepository.getInstance();
const listProductsUseCase = new ListProductsUseCase(productsRepository);
const listProductController = new ListProductsController(listProductsUseCase);

export { listProductController };

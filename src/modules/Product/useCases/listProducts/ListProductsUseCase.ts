import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repository/IProductsRepository";

class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute(): Product[] {
    const products = this.productsRepository.list();

    return products;
  }
}

export { ListProductsUseCase };

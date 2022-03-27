import { IProductsRepository } from "../repository/IProductsRepository";

interface IProduct {
  name: string;
  category: string;
  value: number;
  upc: number;
}

class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute({ category, name, upc, value }: IProduct): void {
    const productAlreadyExists = this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new Error("Product Already Exists!");
    }
    this.productsRepository.create({ name, category, value, upc });
  }
}

export { CreateProductUseCase };

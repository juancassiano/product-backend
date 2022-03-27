import { IProductsRepository } from "../repository/ProductsRepository";

interface IProduct {
  name: string;
  category: string;
  value: number;
  upc: number;
}

class CreateProductService {
  constructor(private productsRepository: IProductsRepository) {}

  execute({ category, name, upc, value }: IProduct): void {
    const productAlreadyExists = this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new Error("Product Already Exists!");
    }
    this.productsRepository.create({ name, category, value, upc });
  }
}

export { CreateProductService };

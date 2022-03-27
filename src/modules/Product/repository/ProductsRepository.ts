import { Product } from "../model/Product";
import { ICreateProductDTO, IProductsRepository } from "./IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  create({ category, name, upc, value }: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      name,
      category,
      value,
      upc,
      created_at: new Date(),
    });

    this.products.push(product);
  }

  list(): Product[] {
    return this.products;
  }

  findByName(name: string): Product {
    const product = this.products.find((product) => product.name === name);
    return product;
  }
}

export { ProductsRepository };

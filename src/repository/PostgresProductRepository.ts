import { Product } from "../model/Product";
import { ICreateProductDTO, IProductsRepository } from "./IProductsRepository";

class PostgresProductRepository implements IProductsRepository {
  findByName(name: string): Product {
    return null;
  }
  list() {
    return null;
  }
  create({ name, category, value, upc }: ICreateProductDTO): void {}
}

export { PostgresProductRepository };

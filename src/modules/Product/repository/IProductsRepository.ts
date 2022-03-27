import { Product } from "../model/Product";

interface ICreateProductDTO {
  name: string;
  category: string;
  upc: number;
  value: number;
}

interface IProductsRepository {
  findByName(name: string): Product;

  list();

  create({ name, category, value, upc }: ICreateProductDTO): void;
}

export { IProductsRepository, ICreateProductDTO };

import { Product } from "../model/Product";

interface ICreateProductDTO {
  name: string;
  description: string;
  upc: number;
  value: number;
}

class ProductsRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  create({ description, name, upc, value }: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      name,
      description,
      value,
      upc,
      created_at: new Date(),
    });

    this.products.push(product);
  }

  list(): Product[] {
    return this.products;
  }
}

export { ProductsRepository };

import { Product } from "../model/Product";
import { ICreateProductDTO, IProductsRepository } from "./IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private products: Product[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: ProductsRepository;

  constructor() {
    this.products = [];
  }

  public static getInstance(): ProductsRepository {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }
    return ProductsRepository.INSTANCE;
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

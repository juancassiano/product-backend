import { parse } from "csv-parse";
import fs from "fs";

import { IProductsRepository } from "../../repository/IProductsRepository";

interface IImportProduct {
  name: string;
  category: string;
  value: number;
  upc: number;
}
class ImportProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  loadProducts(file: Express.Multer.File): Promise<IImportProduct[]> {
    return new Promise((resolve, reject) => {
      const products: IImportProduct[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, category, value, upc] = line;
          products.push({ name, category, value, upc });
        })
        .on("end", () => {
          resolve(products);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const products = await this.loadProducts(file);

    products.map(async (product) => {
      const { name, category, value, upc } = product;

      const productAlreadyExists = this.productsRepository.findByName(name);

      if (!productAlreadyExists) {
        this.productsRepository.create({ name, category, value, upc });
      }
    });
  }
}

export { ImportProductUseCase };

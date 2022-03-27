interface IProduct {
  name: string;
  description: string;
  value: number;
  upc: number;
}

class CreateProductService {
  execute({ description, name, upc, value }: IProduct) {}
}

export default new CreateProductService();

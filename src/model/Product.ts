import { v4 as uuidv4 } from "uuid";

class Product {
  id?: string;
  name: string;
  description: string;
  value: number;
  upc: number;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };

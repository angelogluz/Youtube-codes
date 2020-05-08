import { uuid } from 'uuidv4';

export default class Product {
  id: string;

  code: number;

  description: string;

  buyPrice: number;

  sellPrice: number;

  tags: Array<Product>;

  lovers: number;

  constructor({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Omit<Product, 'id'>) {
    this.buyPrice = buyPrice;
    this.code = code;
    this.sellPrice = sellPrice;
    this.buyPrice = buyPrice;
    this.tags = tags;
    this.lovers = lovers;
    this.description = description;
    this.id = uuid();
  }
}

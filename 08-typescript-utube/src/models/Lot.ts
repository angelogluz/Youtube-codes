import Product from "./Product";

class Lot {
    produtos: Array<Product>;
    date: Date;

    constructor(){
        this.produtos = [];
        this.date = new Date();
    }

    public addProduct(product: Product){
        this.produtos.push(product);
    }
}

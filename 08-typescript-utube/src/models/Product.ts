export default class Product {
    private id: number;
    private description: string;
    private value: number;
    private type: 'unity' | 'package';

    constructor({id, description, value, type} : Product){
        this.id = id;
        this.description = description;
        this.value = value;
        this.type = type;
    }

    public getDescription () : string{
        return this.description;
    }
    public setDescription(description: string): void{
        this.description = description;
    }
}

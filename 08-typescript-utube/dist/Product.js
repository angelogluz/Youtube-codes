"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(_a) {
        var id = _a.id, description = _a.description, value = _a.value, type = _a.type;
        this.id = id;
        this.description = description;
        this.value = value;
        this.type = type;
    }
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    return Product;
}());
exports.default = Product;

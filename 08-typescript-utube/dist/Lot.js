"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lot = /** @class */ (function () {
    function Lot() {
        this.produtos = [];
        this.date = new Date();
    }
    Lot.prototype.addProduct = function (product) {
        this.produtos.push(product);
    };
    return Lot;
}());

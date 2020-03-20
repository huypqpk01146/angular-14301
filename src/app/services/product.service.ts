import { Injectable } from '@angular/core';
import { Data } from '../MockData';
import { Product } from '../Product';

@Injectable()
export class ProductService {
  products = Data;

  constructor() { }
  getProducts(){ // Lay danh sach san pham
      return this.products;
  }
  getProduct(){ // Chi tiet san pham

  }
  removeProduct(id){ // Xoa san pham
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){ // them san pham
    let newObj = { id: 6, ...product};
    this.products.push(product)
  }
  editProduct(){ // sua san pham

  }
}
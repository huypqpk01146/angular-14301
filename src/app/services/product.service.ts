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
  getProduct(id){ // Chi tiet san pham
     return this.products.find(product => product.id == id);
  }
  removeProduct(){ // Xoa san pham

  }
  addProduct(product){ // them san pham
    let newObj = { id: 6, ...product};
    this.products.push(product)
  }
  editProduct(){ // sua san pham

  }
}
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
  addProduct(){ // them san pham

  }
  editProduct(){ // sua san pham

  }
}
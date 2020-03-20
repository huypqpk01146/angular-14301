import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-qlsp',
  templateUrl: './qlsp.component.html',
  styleUrls: ['./qlsp.component.css']
})
export class QlspComponent implements OnInit {
  products: Product[];
  selected: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  
  showDetail(product){
    this.selected = product;
    console.log(this.selected);
  }
  removeItem(id){
    this.products = this.products.filter(product => product.id != id)
  }
}

import { ProductsService } from 'src/app/services/products.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {
 // Two-Way binding must be into an empty existing object:
  product = new ProductModel

  // Bind to the <input type="file" ... > 
  @ViewChild('imageBox')
  imageBoxRef:ElementRef<HTMLInputElement>

  constructor(private productsService: ProductsService, private router: Router, private notify: NotifyService) { }

  async add() {

    try {
      this.product.image = this.imageBoxRef.nativeElement.files[0]
      console.log(this.product)
      await this.productsService.addProduct(this.product)
      this.notify.success('Product has been added')
      this.router.navigateByUrl('/products')
      
    } catch (err: any) {
      this.notify.error(err)
    }
  }

}

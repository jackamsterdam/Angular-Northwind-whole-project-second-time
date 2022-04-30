import { NotifyService } from './../../../services/notify.service';
import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
 product: ProductModel

 productForm: FormGroup

 nameInput: FormControl
 priceInput: FormControl
 stockInput: FormControl
 imageInput: FormControl 

 @ViewChild('imageBox')
 imageBoxRef: ElementRef<HTMLInputElement>

 
  constructor(private productsService: ProductsService, private notify: NotifyService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
     try {
       const id = +this.activatedRoute.snapshot.params['id']
       this.product = await this.productsService.getOneProduct(id)

     this.nameInput = new FormControl(this.product.name, [Validators.required, Validators.minLength(3)])
     this.priceInput = new FormControl(this.product.price, [Validators.required, Validators.min(0), Validators.max(1000)])
     this.stockInput = new FormControl(this.product.stock, [Validators.required, Validators.min(0), Validators.max(10000)])
     this.productForm = new FormGroup({
       nameBox: this.nameInput,
       priceBox: this.priceInput,
       stockBox: this.stockInput,
       imageBox: this.imageInput
     })


     } catch (err: any) {
       this.notify.error(err)
     }
  }

  async update() {
    try {
          this.product.name = this.nameInput.value
    this.product.price = this.priceInput.value 
    this.product.stock = this.stockInput.value 
    this.product.image = this.imageBoxRef.nativeElement.files[0]

    await this.productsService.updateProduct(this.product)
    this.notify.success('Product has been updated')
    this.router.navigateByUrl('/products')

    } catch (err: any) {
      this.notify.error(err)
    }

  }

}

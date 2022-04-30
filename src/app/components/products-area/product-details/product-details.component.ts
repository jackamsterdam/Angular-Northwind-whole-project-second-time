import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel;
  productImageUrl = environment.productsImageUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notify: NotifyService,
    private productsService: ProductsService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.product = await this.productsService.getOneProduct(id);
    } catch (err: any) {
      this.notify.error(err);
    }
  }

  async deleteProduct() {
    try {
      const ok = confirm('Are you sure?');
      if (!ok) return;
      this.productsService.deleteProduct(this.product.id);
      this.notify.success('Product has been deleted');
      this.router.navigateByUrl('/products');
    } catch (err: any) {
      this.notify.error(err);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.scss'],
})
export class ProductViewDetailsComponent implements OnInit {

  @Input() data_: any;

  constructor(public config: CommonService) {}

  ngOnInit() {
    console.log(this.data_);
  }

  buy(data_: any, n: any) {
    if (n == 1) {
      console.log(data_);
      this.config.navigate('payment');
    }
  }
}

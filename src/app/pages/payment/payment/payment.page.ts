import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  isDashboard = false;
  isTitle = 'Moblie Skin Collection';
  new_address = false;
  constructor() {}

  ngOnInit() {}
  DataFetchEv(n: any) {}

  buttonColor = 'white';
  buttonType = 'buy';
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;
  isTop = window === window.top;

  onLoadPaymentData(event: any) {
    console.log('load payment data', event.detail);
  }

  add_address() {
    this.new_address = true;
  }
}

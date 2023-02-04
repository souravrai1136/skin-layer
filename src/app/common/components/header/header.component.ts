import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isTitle = '';
  @Input('isDashboard') isDashboard: any;
  product_list_menu = [
    { id: 2.1, title: 'Phone Skin' },
    { id: 2.2, title: 'Laptop Skin' },
    { id: 2.3, title: 'Animals' },
    { id: 2.4, title: 'Marvel' },
  ];
  skin_collection_menu = [
    { id: 2.1, title: 'Dark' },
    { id: 2.2, title: 'Natrue' },
    { id: 2.3, title: 'Animals' },
    { id: 2.4, title: 'Marvel' },
  ];
  constructor(public config: CommonService) {}

  ngOnInit() {}
  back() {}

  menu_navigation(n: any) {
    if (n == '1') {
      this.config.navigate('home');
    }
    if (n == '2.1') {
      this.config.navigate('phone-list');
    }
    if (n == '2.2') {
      this.config.navigate('laptop-list');
    }
    if (n == '3.1') {
      this.config.navigate('laptop-list');
    }
    if (n == '3.2') {
      this.config.navigate('laptop-list');
    }
    if (n == '3.3') {
      this.config.navigate('laptop-list');
    }
    if (n == '3.4') {
      this.config.navigate('laptop-list');
    }
    if (n == '4') {
      this.config.navigate('custom-theme-upoload');
    }
    if (n == '5') {
      this.config.navigate('contact');
    }
    if (n == 'cart') {
      this.config.navigate('cart-view');
    }

    if (n == 'notification') {
      this.config.navigate('notification');
    }
    if (n == 'profile') {
      this.config.navigate('profile');
    }
  }
}

import { Component } from '@angular/core';
import { CommonService } from './common.function';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public config: CommonService) {}
  appPages = [
    {
      title: 'Home',
      url: '/',
      img: '/assets/menu-icon/home.svg',
    },
    {
      title: 'Choose Device',
      url: '/properties',
      img: '/assets/menu-icon/device.svg',
      submenu: [
        { title: 'HTML', url: '#' },
        { title: 'CSS', url: '#' },
        { title: 'Javascript', url: '#' },
      ],
    },
    {
      title: 'Skins Collection',
      url: '/tenants',
      img: '/assets/menu-icon/collection.svg',
    },
    {
      title: 'Custome Skins',
      url: '/custom-theme-upoload',
      img: '/assets/menu-icon/customize.svg',
    },
    {
      title: 'About',
      url: '/about',
      img: '/assets/menu-icon/about.svg',
    },
    {
      title: 'Contact us',
      url: '/contact',
      img: '/assets/menu-icon/about.svg',
    },
    {
      title: 'FAQs',
      url: '/invoices',
      img: '/assets/menu-icon/faq.svg',
    },
  ];

  labelClk(n: any) {}
}

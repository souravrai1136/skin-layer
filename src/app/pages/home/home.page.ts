import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.function';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isDashboard = false;
  details_view = false;
  list_view = true;
  selectedData: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    spaceBetween: 0,
    resistanceRatio: 0,
    centeredSlides: true,
    virtualTranslate: false,
    autoplay: {
      disableOnInteraction: false,
    },
  };
  bg_img = [
    {
      heading_txt: 'Your Laptop New Bestfriend',
      label_txt: 'Buy 2 Laptop Skins @ Rs1599/-',
      btn: 'Shop Mobile Skin',
      img: '../../../assets/img/bg-img-01.jpg',
    },
    {
      heading_txt: 'Seeing doubles?',
      label_txt: 'Buy 2 Mobile Skin',
      btn: 'Shop Mobile Skin',
      img: '../../../assets/img/bg-img-02.jpg',
    },
    {
      heading_txt: 'New Year, New Me!',
      label_txt: 'Buy 2 mobile skins @ ₹799/-',
      btn: 'Shop Mobile Skin',
      img: '../../../assets/img/bg-img-03.jpg',
    },
    {
      heading_txt: 'More Than Just Good Looking',
      label_txt: 'Brand new designs starting @ ₹499/-',
      btn: 'Shop Mobile Skin',
      img: '../../../assets/img/bg-img-04.jpg',
    },
  ];

  laptop_data = [
    {
      theme_name: 'Wolfgang',
      cost: '1,150',
      discount_cost: '1,450',
      label: 'Trending',
      img: '../../../assets/img/laptop_01.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1000',
      label: 'Trending',
      img: '../../../assets/img/laptop_02.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_03.jpg',
    },
    {
      theme_name: 'End Game',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_04.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1,230',
      label: 'Trending',
      img: '../../../assets/img/laptop_02.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,300',
      label: 'Trending',
      img: '../../../assets/img/laptop_03.jpg',
    },
    {
      theme_name: 'Wolfgang',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_01.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_02.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_03.jpg',
    },
    {
      theme_name: 'End Game',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_04.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_02.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/laptop_03.jpg',
    },
  ];
  moblie_data = [
    {
      theme_name: 'Wolfgang',
      cost: '1,150',
      discount_cost: '1,450',
      label: 'Trending',
      img: '../../../assets/img/moblie_01.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1000',
      label: 'Trending',
      img: '../../../assets/img/moblie_02.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_03.jpg',
    },
    {
      theme_name: 'End Game',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_04.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1,230',
      label: 'Trending',
      img: '../../../assets/img/moblie_05.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,300',
      label: 'Trending',
      img: '../../../assets/img/moblie_06.jpg',
    },
    {
      theme_name: 'Wolfgang',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_07.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_08.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_09.jpg',
    },
    {
      theme_name: 'End Game',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_10.jpg',
    },
    {
      theme_name: 'Spiderman',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_11.jpg',
    },
    {
      theme_name: 'Thor',
      cost: '1,150',
      discount_cost: '1,500',
      label: 'Trending',
      img: '../../../assets/img/moblie_12.jpg',
    },
  ];

  constructor(public config: CommonService) {}

  view_details(n: any) {
    console.log(n);
    this.details_view = true;
    this.list_view = false;
    this.selectedData = n;
  }

  see_more(n: any) {
    if (n == 1) {
      this.config.navigate('laptop-list');
    }
    if (n == 2) {
      this.config.navigate('phone-list');
    }
  }

  DataFetchEv(n: any) {}
}

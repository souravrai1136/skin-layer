import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';
import EmployeesJson from '../../../data/laptop.json';
@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.page.html',
  styleUrls: ['./phone-list.page.scss'],
})
export class PhoneListPage implements OnInit {
  isDashboard = false;
  isTitle = 'Moblie Skin Collection';
  details_view = false;
  list_view = true;
  Employes = EmployeesJson;
  moblie_data: any;
  selectedData: any;

  constructor(public config: CommonService) {}

  ngOnInit() {
    this.moblie_data = this.Employes.phone_data;
  }
  phone_view(n: any) {
    this.details_view = true;
    this.list_view = false;
    this.selectedData = n;
  }

  DataFetchEv(n: any) {}
}

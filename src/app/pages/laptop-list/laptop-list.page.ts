import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';
import { ApiService } from 'src/app/service/api.service';
import EmployeesJson from '../../../data/laptop.json';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.page.html',
  styleUrls: ['./laptop-list.page.scss'],
})
export class LaptopListPage implements OnInit {
  isDashboard = false;
  isTitle = 'Laptop Skin Collection';
  details_view = false;
  list_view = true;
  Employes = EmployeesJson;
  laptop_data: any;
  selectedData: any;
  
  constructor(private http: HttpClient, public config: CommonService) {}

  ngOnInit() {
    this.laptop_data = this.Employes.laptop_data;
  }
  view_details(n: any) {
    this.details_view = true;
    this.list_view = false;
    this.selectedData = n;
  }
  DataFetchEv(n: any) {}
}

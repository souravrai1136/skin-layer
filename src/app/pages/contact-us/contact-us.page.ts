import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.function';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  form_detail: FormGroup | any;
  constructor(public config: CommonService, public fb: FormBuilder) {
    this.form_detail = this.fb.group({
      full_name: [''],
      email: [''],
      phone_no: [''],
      comment: [''],
    });
  }

  ngOnInit() {}
  DataFetchEv(n: any) {}
}

import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tab: number = 1;
  all_CV = true;
  all_Draft = false;
  whatsapp_theme = false;
  email_theme = false;
  selectedId: any;
  show_option = false;
  show_option1 = false;

  completed_invoice: any = [];
  saved_Invoice_name: any;
  issue_Invoice_date: any;
  completed_invoice_list: any = [];
  draft_Invoice_name: any;
  darft_Invoice_date: any;
  invoice_heading = true;
  draft_heading = true;
  draft_cv_list: any = [];
  templates_ = [
    {
      id: 1,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-01.jpg',
    },
    {
      id: 1,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-02.jpg',
    },
    {
      id: 2,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-03.jpg',
    },
    {
      id: 3,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-04.jpg',
    },
    {
      id: 4,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-05.jpg',
    },
    {
      id: 1,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-06.jpg',
    },
    {
      id: 2,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-07.jpg',
    },
    {
      id: 3,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-08.jpg',
    },
    {
      id: 4,
      bill_name: 'Bill Payment',
      bill_create_date: '20/02/2023',
      img: '../../../assets/cv temp/cv-temp-09.jpg',
    },
  ];

  constructor(public config: CommonService, private storage: Storage) {}
  ngOnInit() {
    this.storage.create();
  }
  DataFetchEv(n: any) {}

  ionViewWillEnter() {
    this.selectedId = null;
    let draft_cv_list = JSON.parse(
      this.config.storageGet('draft_cv_data')['__zone_symbol__value']
    );
    console.log('draft', draft_cv_list);

    if (draft_cv_list != null) {
      this.draft_cv_list = draft_cv_list;
    }

    this.config.storageRemoveItem('CreateNew');

    this.completed_invoice_list = JSON.parse(
      this.config.storageGet('save_cv_data')['__zone_symbol__value']
    );
    console.log('complated', this.completed_invoice_list);

    if (this.completed_invoice_list == null || this.completed_invoice_list.length == 0) {
      this.invoice_heading = false;
    } else {
      this.invoice_heading = true;
    }
    if (this.draft_cv_list == null || this.draft_cv_list.length == 0) {
      this.draft_heading = false;
    } else {
      this.draft_heading = true;
    }
  }

  CreateCv() {
    this.config.editable_data = null;
    this.config.storageSave('CreateNew', true);
    this.config.navigate('create-cv-form');
  }

  open_Option(n, val) {
    this.selectedId = val.id;
    if (n == 1) {
      this.show_option = !this.show_option;
    }
    if (n == 2) {
      this.show_option1 = !this.show_option1;
    }
  }

  editData(val) {
    this.selectedId = val.id;
    this.show_option = false;
    this.config.navigate('create-cv-form');
    this.config.editable_data = val;
  }

  duplicateData(val) {
    let itemDup = val;
    itemDup.id = this.config.generateUniqueId();
    setTimeout(() => {
      this.completed_invoice_list.push(itemDup);
      this.config.storageSave(
        'completed_invoice_list',
        this.completed_invoice_list
      );

      this.config.editable_data = itemDup;
      this.config.navigate('create-invoice');
    }, 100);

    return;
  }

  deleteData(val, n) {
    if (n == 1) {
      this.selectedId = val.id;
      var un = this.completed_invoice_list.filter((val2) => {
        return val2.id !== val.id;
      });

      this.completed_invoice_list = un;
      this.config.storageSave('save_cv_data', this.completed_invoice_list);
    }
    if (n == 2) {
      this.selectedId = val.id;
      var un = this.draft_cv_list.filter((val2) => {
        return val2.id !== val.id;
      });

      this.draft_cv_list = un;
      this.config.storageSave('draft_cv_data', this.draft_cv_list);
    }
    console.log(val);
  }

  navigate(n: any) {
    if (n == '1') {
      this.all_CV = true;
      this.all_Draft = false;
      this.whatsapp_theme = false;
      this.email_theme = false;
    }
    if (n == '2') {
      this.all_CV = false;
      this.all_Draft = true;
      this.whatsapp_theme = false;
      this.email_theme = false;
    }
    if (n == '3') {
      this.all_CV = false;
      this.all_Draft = false;
      this.whatsapp_theme = true;
      this.email_theme = false;
    }
    if (n == '4') {
      this.all_CV = false;
      this.all_Draft = false;
      this.whatsapp_theme = false;
      this.email_theme = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { CommonService } from 'src/app/common.function';
@Component({
  selector: 'app-custom-theme-upoload',
  templateUrl: './custom-theme-upoload.page.html',
  styleUrls: ['./custom-theme-upoload.page.scss'],
})
export class CustomThemeUpoloadPage implements OnInit {
  isDashboard = false;
  EnableOneTime = false;
  isTitle = 'Laptop Skin Collection';
  // public uploader: FileUploader = new FileUploader({});
  propertyImages: any;
  form_detail: FormGroup;

  propType = [
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 2,
      name: 'Asus',
    },
    {
      id: 3,
      name: 'Google',
    },
    {
      id: 4,
      name: 'Honor',
    },
    {
      id: 5,
      name: 'Huawei',
    },
    {
      id: 6,
      name: 'LG',
    },
    {
      id: 7,
      name: 'MOTOROLA',
    },
    {
      id: 8,
      name: 'Nothing',
    },
    {
      id: 9,
      name: 'OnePlus',
    },
    {
      id: 10,
      name: 'Oppo',
    },
    {
      id: 11,
      name: 'Poco',
    },
    {
      id: 12,
      name: 'Realme',
    },
    {
      id: 13,
      name: 'Samsung',
    },
    {
      id: 14,
      name: 'Vivo',
    },
    {
      id: 15,
      name: 'Xiaomi',
    },
    {
      id: 16,
      name: 'iQOO',
    },
  ];

  constructor(public config: CommonService, public fb: FormBuilder) {
    this.form_detail = this.fb.group({
      phone_name: [''],
      phone_model: [''],
    });
  }
  DataFetchEv(n: any) {}
  ngOnInit() {}

  async SelectChn(selId: any, whichOne: any) {
    this.EnableOneTime = true;

    // this.uploader.queue.forEach((element: any) => {
    //   if (
    //     'image/jpeg' == element.file.type ||
    //     'image/png' == element.file.type
    //   ) {
    //     if (this.EnableOneTime) {
    //       this.EnableOneTime = false;

    //       if (whichOne == 'propertyimage') {
    //         this.Update_files_IMAGES(element, selId);
    //       }
    //       if (whichOne == 'unit') {
    //         this.Update_files_(element, selId);
    //       }
    //     }
    //   } else {
    //     this.config.presentToast('Image is acceptable.');
    //   }
    // });
  }
  Update_files_IMAGES(n: any, x: any) {}
  Update_files_(n: any, x: any) {}
  onRemove_Image(n: any) {
    this.propertyImages = this.propertyImages.filter((h: any) => h.id !== n.id);
  }

  buy(n: any) {
    if (n == 1) {
      this.config.navigate('payment');
    }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-create-cv-form',
  templateUrl: './create-cv-form.page.html',
  styleUrls: ['./create-cv-form.page.scss'],
})
export class CreateCvFormPage implements OnInit {
  hide_personal: any;
  hide_summary: any;
  hide_employment: any;
  hide_education: any;
  hide_skill: any;
  hide_language: any;
  editable_data: any;
  form_details: FormGroup | any;
  personal_details: FormArray | any;
  docDefinition: any;
  draft_update_btn: any;
  data: any;
  personalData: any = [];
  summaryData: any;
  employementData: any = [];
  educationData: any = [];
  skillData: any = [];
  languageData: any = [];
  draft_cv_list: any = [];
  CV_Data: any = [];
  arr: any = [];

  want_job_title: any;
  frist_name: any;
  last_name: any;
  email: any;
  phone_number: any;
  address_1: any;
  address_2: any;
  state: any;
  city: any;
  country: any;
  postal_code: any;
  professional_sum: any;
  employment_details: any;
  education_details: any;
  skill_details: any;
  language_details: any;

  hide_edu = true;
  hide_employ = true;
  hide_skil = true;
  hide_lang = true;

  Logo_Header = '../../../assets/pdf/template-01.svg';
  logo = '../../../assets/img/user-img.png';

  company_name: any;

  @ViewChild('htmlData') el!: ElementRef;

  constructor(public config: CommonService, private storage: Storage) {
    this.employment_details = [
      {
        id: this.config.generateUniqueId(),
        job_title: '',
        employer: '',
        start_end_date: '',
        city: '',
        employment_description: '',
      },
    ];
    this.education_details = [
      {
        id: this.config.generateUniqueId(),
        school_collage: '',
        education_degree: '',
        education_startEnd_date: '',
        education_city: '',
        education_description: '',
      },
    ];
    this.skill_details = [
      {
        id: this.config.generateUniqueId(),
        label: '',
        rating: '',
      },
    ];
    this.language_details = [
      {
        id: this.config.generateUniqueId(),
        label: '',
      },
    ];
  }

  ngOnInit() {
    this.storage.create();
  }

  DownloadCV() {
    let sendData = {
      id: this.config.generateUniqueId(),
      createAt: new Date(),
      job_title: this.want_job_title,
      user_img: this.logo,
      f_name: this.frist_name,
      l_name: this.last_name,
      email: this.email,
      phone: this.phone_number,
      state: this.state,
      city: this.city,
      country: this.country,
      postal_code: this.postal_code,
      professional_summary: this.professional_sum,
      employementData_: this.employementData,
      educationData_: this.educationData,
      skillData_: this.skillData,
      languageData_: this.languageData,
    };

    // let DATA: any = document.getElementById('htmlData');
    // html2canvas(DATA).then((canvas) => {
    //   let fileWidth = 208;
    //   let fileHeight = (canvas.height * fileWidth) / canvas.width;
    //   const FILEURI = canvas.toDataURL('image/png');
    //   let PDF = new jsPDF('p', 'mm', 'a4');
    //   PDF.internal.scaleFactor = 30;
    //   let position = 0;
    //   PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    //   PDF.save(this.frist_name + '' + '.pdf');
    // });

    let pdf = new jsPDF()
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save(this.frist_name + '' + '.pdf')
      }
    })

    // this.config.navigate('home');
  }

  ionViewWillEnter() {
    if (this.config.editable_data != undefined) {
      this.editable_data = this.config.editable_data;
      this.want_job_title = this.editable_data.job_title;
      this.frist_name = this.editable_data.f_name;
      this.last_name = this.editable_data.l_name;
      this.email = this.editable_data.email;
      this.phone_number = this.editable_data.phone;
      this.state = this.editable_data.state;
      this.city = this.editable_data.city;
      this.country = this.editable_data.country;
      this.postal_code = this.editable_data.postal_code;
      this.employementData = this.editable_data.employementData_;
      this.educationData = this.editable_data.educationData_;
      this.skillData = this.editable_data.skillData_;
      this.languageData = this.editable_data.languageData_;
    }

    if (!this.employementData) {
      this.employementData = [];
    }
    let draft_invoice_list = JSON.parse(
      this.config.storageGet('save_cv_data')['__zone_symbol__value']
    );

    if (draft_invoice_list != null) {
      let CreateNew = JSON.parse(
        this.config.storageGet('CreateNew')['__zone_symbol__value']
      );

      if (!CreateNew) {
        console.log('Edit Invoice');
        this.draft_update_btn = true;
      } else {
        this.draft_cv_list = draft_invoice_list;
        console.log(this.draft_cv_list);
      }
    }
  }

  addfields(n: any) {
    if (n == 1) {
      this.hide_edu = true;
      this.education_details.push({
        id: this.config.generateUniqueId(),
        school_collage: '',
        education_degree: '',
        education_startEnd_date: '',
        education_city: '',
        education_description: '',
        item_edit: false,
      });
    }
    if (n == 2) {
      this.hide_employ = true;
      this.employment_details.push({
        id: this.config.generateUniqueId(),
        job_title: '',
        employer: '',
        start_end_date: '',
        city: '',
        employment_description: '',
        item_edit: false,
      });
    }

    if (n == 3) {
      this.hide_skil = true;
      this.skill_details.push({
        id: this.config.generateUniqueId(),
        label: '',
        rating: '',
        item_edit: false,
      });
    }
    if (n == 4) {
      this.hide_lang = true;
      this.language_details.push({
        id: this.config.generateUniqueId(),
        label: '',
        item_edit: false,
      });
    }
  }

  hide_show(n: any) {
    if (n == 1) {
      this.hide_personal = !this.hide_personal;
    }
    if (n == 2) {
      this.hide_summary = !this.hide_summary;
    }
    if (n == 3) {
      this.hide_employment = !this.hide_employment;
    }
    if (n == 4) {
      this.hide_education = !this.hide_education;
    }
    if (n == 5) {
      this.hide_skill = !this.hide_skill;
    }
    if (n == 6) {
      this.hide_language = !this.hide_language;
    }
  }

  SelectLogo(e) {
    if (e.target.files) {
      var render = new FileReader();
      render.readAsDataURL(e.target.files[0]);
      render.onload = (event: any) => {
        this.logo = event.target.result;
      };
    }
  }

  selectData(dateVal, n) {
    if (n == 1) {
      this.want_job_title = dateVal;
    }
    if (n == 2) {
      this.frist_name = dateVal;
    }
    if (n == 3) {
      this.last_name = dateVal;
    }
    if (n == 4) {
      this.email = dateVal;
    }
    if (n == 5) {
      this.phone_number = dateVal;
    }
    if (n == 6) {
      this.address_1 = dateVal;
    }
    if (n == 7) {
      this.address_2 = dateVal;
    }
    if (n == 8) {
      this.state = dateVal;
    }
    if (n == 9) {
      this.city = dateVal;
    }
    if (n == 10) {
      this.country = dateVal;
    }
    if (n == 11) {
      this.postal_code = dateVal;
    }
    if (n == 12) {
      this.professional_sum = dateVal;
    }
  }



  DraftCV() {
    let sendData = {
      id: this.config.generateUniqueId(),
      createAt: new Date(),
      job_title: this.want_job_title,
      user_img: this.logo,
      f_name: this.frist_name,
      l_name: this.last_name,
      email: this.email,
      phone: this.phone_number,
      state: this.state,
      city: this.city,
      country: this.country,
      postal_code: this.postal_code,
      professional_summary: this.professional_sum,
      employementData_: this.employementData,
      educationData_: this.educationData,
      skillData_: this.skillData,
      languageData_: this.languageData,
    };
    this.draft_cv_list.push(sendData);
    this.config.storageSave('draft_cv_data', this.draft_cv_list);
    this.config.navigate('home');
  }

  UpdateDraftCV() {}

  click_add(n) {
    if (n == 1) {
      this.employment_details.forEach((item) => {
        this.employementData.push(item);
      });
      this.employementData.forEach((item) => {
        this.company_name = item.job_title;
      });
      this.employment_details = [];
    }
    if (n == 2) {
      this.education_details.forEach((item) => {
        this.educationData.push(item);
      });
      this.education_details = [];
    }
    if (n == 3) {
      this.skill_details.forEach((item) => {
        this.skillData.push(item);
      });
      this.skill_details = [];
    }
    if (n == 4) {
      this.language_details.forEach((item) => {
        this.languageData.push(item);
      });
      this.language_details = [];
    }
  }

  edit_data(val, n) {
    if (n == 1) {
      this.hide_edu = false;
      this.educationData.forEach((element) => {
        element.item_edit = false;
      });
      val.item_edit = true;
    }

    if (n == 2) {
      this.hide_employ = false;
      this.employementData.forEach((element) => {
        element.item_edit = false;
      });
      val.item_edit = true;
    }
    if (n == 3) {
      console.log(n);

      this.hide_skil = false;
      this.skillData.forEach((element) => {
        console.log(element);

        element.item_edit = false;
      });
      val.item_edit = true;
    }
    if (n == 4) {
      console.log(n);

      this.hide_lang = false;
      this.languageData.forEach((element) => {
        console.log(element);

        element.item_edit = false;
      });
      val.item_edit = true;
    }
  }

  update_exiting_data(val, n) {
    if (n == 1) {
      this.education_details.forEach((item) => {
        if (item.item_edit == true) {
          this.educationData.push(item);
        }
      });
      val.item_edit = false;
      this.education_details = [];
    }
    if (n == 2) {
      this.employment_details.forEach((item) => {
        if (item.item_edit == true) {
          this.employementData.push(item);
        }
      });
      val.item_edit = false;
      this.employment_details = [];
    }

    if (n == 3) {
      this.skill_details.forEach((item) => {
        if (item.item_edit == true) {
          this.skillData.push(item);
        }
      });
      val.item_edit = false;
      this.skill_details = [];
    }

    if (n == 4) {
      this.language_details.forEach((item) => {
        if (item.item_edit == true) {
          this.languageData.push(item);
        }
      });
      val.item_edit = false;
      this.language_details = [];
    }
  }

  onRemove(n, val) {
    // if (val == 1) {
    //   this.all_Units = this.all_Units.filter((h) => h.id !== n.id);
    // }
    // if (val == 2) {
    //   this.all_data = this.all_data.filter((h) => h.id !== n.id);
    // }
  }

  async generatePDF(val: any) {
    this.docDefinition = {
      footer: function (currentPage, pageCount) {
        return currentPage.toString() + ' of ' + pageCount;
      },
      header: function (currentPage, pageCount, pageSize) {
        return [
          {
            canvas: [
              { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 },
            ],
          },
        ];
      },

      info: {
        title: 'Invoice',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
      },
      layout: {
        hLineWidth: function () {
          // Here you can use ternary operator or if condtions to change its value according to row and column
          return 2;
        },
        vLineWidth: function () {
          // Here you can use ternary operator or if condtions to change its value according to row and column
          return 0;
        },
      },
      content: [
        {
          image: await this.getBase64ImageFromURL(this.Logo_Header),
          width: 250,
          height: 500,
          margin: [-40, -40, 0, 0],
        },
        {
          image: await this.getBase64ImageFromURL(this.logo),
          width: 50,
          height: 30,
          margin: [-40, -100, 0, 0],
          alignment: 'left',
        },

        {
          text: `PROFESSIONAL SKILLS`,
          fontSize: 15,
          margin: [220, -400, 0, 0],
          color: '#000',
          bold: true,
        },
        {
          text: `Web Technologies`,
          fontSize: 10,
          margin: [220, 10, 0, 0],
          color: '#000',
          bold: true,
        },
        {
          ul: [
            {
              text: 'Editing and Desiging team in the company to build perfect web designs',
              margin: [0, 0, 0, 0],
            },
            {
              text: 'Html 5 , Css 3 , Javascript, Jquery, Bootstrap , Typescript, Angular',
              margin: [0, 3, 0, 0],
            },
          ],
          fontSize: 10,
          margin: [230, 5, 0, 0],
          color: '#000',
        },
        {
          text: `Development & Debugging Tools`,
          border: true,
          fontSize: 10,
          margin: [220, 10, 0, 0],
          color: '#000',
          bold: true,
        },
        {
          fontSize: 10,
          margin: [230, 5, 0, 0],
          color: '#000',
          ul: [
            {
              text: 'Visual Studio Codes',
            },
            {
              text: 'Chrome Developer Tools',
              margin: [0, 3, 0, 0],
            },
            {
              text: 'Postman',
              margin: [0, 3, 0, 0],
            },
            {
              text: 'Notepad ++',
              margin: [0, 3, 0, 0],
            },
          ],
        },
        {
          margin: [0, -155, 0, 0],
          columns: [
            [
              {
                text: this.frist_name + ' ' + this.last_name,
                margin: [0, 5, 0, 0],
                fontSize: 13,
                color: '#fff',
                alignment: 'left',
                bold: true,
              },
              {
                text: this.want_job_title,
                fontSize: 10,
                margin: [0, 4, 0, 0],
                color: '#fff',
                alignment: 'left',
              },

              {
                text: `Address`,
                margin: [0, 10, 0, 0],
                fontSize: 13,
                color: '#fff',
                alignment: 'left',
                bold: true,
              },
              {
                text:
                  this.city +
                  ', ' +
                  this.state +
                  ', ' +
                  this.country +
                  ', ' +
                  this.postal_code,
                fontSize: 10,
                margin: [0, 5, 0, 0],
                color: '#fff',
                alignment: 'left',
              },
              {
                text: `Contact me`,
                margin: [0, 10, 0, 0],
                fontSize: 13,
                color: '#fff',
                alignment: 'left',
                bold: true,
              },
              {
                text: this.phone_number,
                fontSize: 10,
                margin: [0, 5, 0, 0],
                color: '#fff',
                alignment: 'left',
              },
              {
                text: this.email,
                fontSize: 10,
                margin: [0, 5, 0, 0],
                color: '#fff',
                alignment: 'left',
              },
            ],
          ],
        },
        {
          text: `WORKING EXPERIENCE`,
          fontSize: 15,
          margin: [220, 35, 0, 0],
          color: '#000',
          bold: true,
        },

        {
          columnGap: 100,
          margin: [240, -35, 0, 0],
          columns: [
            [
              {
                text: 'SkillUp World IT Solution',
                fontSize: 10,
                margin: [-10, 40, 0, 0],
              },
              {
                text: this.personalData,
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
              {
                text: '2+ Year',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
            ],
          ],
        },
        {
          text: `EDUCATION`,
          fontSize: 15,
          margin: [220, 30, 0, 0],
          color: '#000',
          bold: true,
        },

        {
          columnGap: 100,
          margin: [240, -35, 0, 0],
          columns: [
            [
              {
                text: 'Bachelor of Computer Application',
                fontSize: 10,
                margin: [-10, 40, 0, 0],
              },
              {
                text: 'IGNOU',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
              {
                text: '2019-2023',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
            ],
          ],
        },
        {
          columnGap: 100,
          margin: [240, -30, 0, 0],
          columns: [
            [
              {
                text: 'Higher Secondary Examination',
                fontSize: 10,
                margin: [-10, 40, 0, 0],
              },
              {
                text: 'Guru Nanak Sen. Sec. School',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
              {
                text: '2016-2019',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
            ],
          ],
        },
        {
          columnGap: 100,
          margin: [240, -30, 0, 0],
          columns: [
            [
              {
                text: 'High Secondary Examination',
                fontSize: 10,
                margin: [-10, 40, 0, 0],
              },
              {
                text: 'Guru Nanak Sen. Sec. School',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
              {
                text: '2016-2019',
                fontSize: 10,
                margin: [-10, 4, 0, 0],
              },
            ],
          ],
        },
      ],
      styles: {
        font: 'Helvetica',
        tableHeading: {
          bold: true,
          alignment: 'center',
        },
        tableHeading1: {
          bold: true,
          alignment: 'center',
        },
        tableData: {
          color: '#484848',
          alignment: 'center',
        },
        termUl: {
          margin: [0, 0, 0, 3],
          fontSize: 10,
          color: '#484848',
        },
        header: {
          fontSize: 22.5,
          bold: true,
          alignment: 'right',
          margin: [-10, -95, 0, 25],
          characterSpacing: -0.5,
        },
        headerType: {
          fontSize: 15,
          alignment: 'right',
          characterSpacing: 0.5,
          bold: true,
        },

        ulStyle: {
          color: '#f87512',
          margin: [0, 3, 0, 0],
          fontSize: 9.5,
        },
        aggrementOL: {
          color: '#ff0000',
          margin: [30, 3, 0, 0],
          fontSize: 8.3,
        },
        headerAddress: {
          color: '#484848',
          fontSize: 15,
          lineHeight: 1.2,
          bold: true,
          alignment: 'left',
          margin: [-45, 10, 0, 0],
          characterSpacing: -0.5,
        },
        toc: {
          fontSize: 28,
          bold: true,
          alignment: 'right',
          margin: [0, 100, 0, 10],
          characterSpacing: -0.5,
        },
        tocContents: {
          fontSize: 10,
          bold: false,
          color: '#484848',
          margin: [0, 3, 0, 0],
          alignment: 'left',
        },
        tocPages: {
          fontSize: 10,
          bold: false,
          color: '#484848',
          margin: [-10, 3, 0, 0],
          alignment: 'left',
        },
        label: {
          margin: [0, 0, 0, 5],
        },
        amount: {
          margin: [0, 0, 0, 5],
        },
        watermark: {
          bold: true,
          fontSize: 8,
          color: '#ed3833',
        },
        termContent: {
          margin: [0, 0, 150, 0],
        },
        termCondition: {
          bold: true,
          fontSize: 13,
          margin: [0, 20, 0, 15],
          color: '#000000',
        },
        terms: {
          font: 10,
          color: '#484848',
        },
        termsbold: {
          bold: true,
          font: 10,
          color: '#000000',
        },
        midsizeText: {
          margin: [0, 4, 5, 0],
          alignment: 'left',
          bold: 'true',
          fontSize: 11,
          color: '#f87512',
        },
        ptitle: {
          bold: true,
          fontSize: 14.5,
          alignment: 'left',
        },
        footer: {
          alignment: 'left',
          bold: true,
          fontSize: 9,
          margin: [247, 1, 1, 0],
        },
        pdata: {
          color: '#ed3833',
          fontSize: 13,
          bold: true,
        },
        paraData: {
          fontSize: 9.5,
          bold: true,
        },
        paraData_2: {
          fontSize: 8,
          lineHeight: 1.5,
          margin: [30, 0, 0, 0],
        },
        subheader: {
          fontSize: 22,
          bold: true,
          color: '#000000',
        },
        subheader_2: {
          fontSize: 22,
          bold: true,
          color: '#ff0000',
        },
        subbox: {
          fontSize: 13,
          bold: true,
          color: '#000000',
        },
        story: {
          alignment: 'center',
          fontSize: 18,
          bold: true,
          color: '#ed3833',
        },
      },
    };

    if (val == 'preview') {
      pdfMake.createPdf(this.docDefinition).open();
    }
    if (val == 'download') {
      let sendData = {
        id: this.config.generateUniqueId(),
        createAt: new Date(),
        job_title: this.want_job_title,
        f_name: this.frist_name,
        l_name: this.last_name,
        email: this.email,
        phone: this.phone_number,
        state: this.state,
        city: this.city,
        country: this.country,
        postal_code: this.postal_code,
        professional_summary: this.professional_sum,
        employementData_: this.employementData,
        educationData_: this.educationData,
        skillData_: this.skillData,
        user_img: this.logo,
      };
      this.CV_Data.push(sendData);
      this.config.storageSave('save_cv_data', this.CV_Data);
      // this.form_details.reset(this.form_details.value);
      pdfMake
        .createPdf(this.docDefinition)
        .download(this.frist_name + '' + '.pdf');
      this.config.navigate('home');
      console.log(this.CV_Data);
      // console.log(this.completed_invoice_list);

      // this.completed_invoice_list.push(sendData);

      // console.log(this.completed_invoice_list);
      // this.config.storageSave(
      //   'completed_invoice_list',
      //   this.completed_invoice_list
      // );

      // this.config.navigate('dashboard');
    }
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute('crossOrigin', '');

      img.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx: any = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL('image/png');

        resolve(dataURL);
      };

      img.onerror = (error) => {
        reject(error);
      };

      img.src = url;
    });
  }
}

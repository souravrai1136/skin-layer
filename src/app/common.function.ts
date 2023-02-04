import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
// import { CommonService } from './common.function';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  orderNo: any;
  options: any = {};
  Apiurl: any;
  userloggedin = false;
  appPages: any;
  propType: any;
  taskType: any;
  furnishingType: any;
  isExperience = false;
  login = true;
  noClick = false;
  islogin = true;
  all_prop_data: any;
  all_tenants_data: any;
  all_tasks_res: any;
  all_lease_res: any;

  currentLeaseDetails: any;

  navigateurlname: any;
  navigate_data_store: any;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController,
    private storage: Storage,
    public toastController: ToastController,
    private location: Location
  ) {}

  async alert_(m: any) {
    const alert = await this.alertController.create({
      header: '',
      message: m,

      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
      ],
    });

    await alert.present();
  }

  async storageSave(name: any, name1: any) {
    if (name && name1) {
      this.storage.remove(name);
      localStorage.removeItem(name);
      this.storage.set(name, name1);
      localStorage.setItem(name, JSON.stringify(name1));
    }
  }

  async storageClear() {
    this.storage.clear();
    localStorage.clear();
  }

  async storageGet(get: any) {
    let val2 = localStorage.getItem(get);
    this.storage.get(get).then((val:any) => {
      let val2 = val;
      return val2;
    });
    return val2;
  }

  async navigate(page: any) {
    this.navCtrl.navigateForward(page);
  }

  async storageRemoveItem(key: any) {
    localStorage.removeItem(key);
    this.storage.remove(key);
  }
  async presentToast(m: any, color?: any) {
    const toast = await this.toastController.create({
      message: m,
      duration: 2000,
      color: color,
    });
    toast.present();
  }

  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  NavigateBack() {
    this.location.back();
  }
}

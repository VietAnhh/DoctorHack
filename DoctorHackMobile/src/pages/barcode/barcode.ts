import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';

/*
  Generated class for the Barcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class Barcode {


  constructor(public navCtrl: NavController) {}


  ionViewDidLoad() {
    console.log('Hello Barcode Page');
  }

}

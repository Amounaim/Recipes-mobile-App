import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  text ="first text" ;
  label ="";
  listLabel = [];
  total =0;
  constructor(public navCtrl : NavController,public alertController: AlertController) {}
  
  readConfirm(text:string , nbr:number){
    
    if(text.length<=0 || nbr<=0 || nbr.toString().length <=0){
      //alert("Invalid Values");
      this.presentAlert('Invalid inputs','Please enter valid reason and amount!');
      return ;
    }
    console.log(text , nbr);
    //const newItem = document.createElement('ion-item');
    //newItem.textContent = text + " : $"+nbr ;
    const ssd = text + " : $"+nbr ;
    this.listLabel.push(ssd);
    //console.log(this.listLabel);
    this.total += +nbr;
  }

  onClear(text:string , nbr:number){
    text ="";
    nbr =null;
    //this.listLabel= [];
  }
  onChangeText(){
    this.text = "After change ";
  }

  async presentAlert(sub ,mesg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: sub,
      message: mesg,
      buttons: ['OK']
    });

    await alert.present();
  }

}


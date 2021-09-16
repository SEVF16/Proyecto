import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user={
    userName:"",
    password:""
  }

  constructor(public toastController: ToastController, private router: Router) {}

  ngOnInit() {
  }
  recuperar(){
    this.router.navigate(['/pass-reset']);
  }
  ingresar() {
    let navigationExtras: NavigationExtras ={
      state:{user: this.user.userName}
    };

    if (this.user.userName == ""){
      this.show();
    }
    else{
      this.router.navigate(['/landing'], navigationExtras);
    }    
  };

  show(){
    this.showData("Debe ingresar su nombre de usuario y contraseña");
  }

  async showData(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}

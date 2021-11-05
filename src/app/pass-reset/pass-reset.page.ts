import { Component} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Animation, AnimationController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.page.html',
  styleUrls: ['./pass-reset.page.scss'],
})
export class PassResetPage{
  user={
    userName:"",
  }
  constructor(public toastController: ToastController, private router: Router, private animationPassword: AnimationController) { 

  }

  ngOnInit() {
  }

  retro(){
    this.router.navigate(['/home']);
  }
  recuperar() {
    let navigationExtras: NavigationExtras ={
      state:{user: this.user.userName}
    };

    if (this.user.userName == ""){
      this.show();
    }
    else{
      this.router.navigate(['/home'], navigationExtras);
    }    
  };

  show(){
    this.showData("Debe ingresar su nombre de usuario");
  }

  async showData(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}

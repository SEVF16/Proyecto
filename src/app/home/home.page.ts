import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GetapiService } from './getapi.service';
import { Animation, AnimationController, NavController, ToastController } from '@ionic/angular';



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
  img: [];
  info: [];
 
constructor(public toastController: ToastController, private router: Router, private animationLogin: AnimationController, 
  private api: GetapiService, public navCtrl: NavController) {
    
    const animationLgn: Animation = this.animationLogin.create()
        .addElement(document.querySelector('#btn-asistencia'))
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
  }


  ngOnInit() {
    this.api.getImg().subscribe((data)=> {
      this.img=data;
    });


    this.api.getInfo().subscribe((data)=> {
      this.info=data;
      console.log(data)
    });
  }

  recuperar(){
    this.router.navigate(['/pass-reset']);
  }
  ingresar() {
    let navigationExtras: NavigationExtras ={
      state:{user: this.user.userName}
    };

    if (this.user.userName == "" || this.user.password == ""){
      this.show();
    }
    else if(this.user.password.length <= 8 ){
      this.showPassLenghtMin()
    }
    else if(this.user.password.length >= 12 ){
      this.showPassLenghtMax()
    }
    else{
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('landing');
    }    
  };

  show(){
    this.showData("Debe ingresar su nombre de usuario y contraseña");
  }
  showPassLenghtMin(){
    this.showData("La contraseña debe tener al menos 8 caracteres")
  }
  showPassLenghtMax(){
    this.showData("La contraseña debe tener al maximo 12 caracteres")
  }

  async showData(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}

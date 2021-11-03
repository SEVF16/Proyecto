import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Animation, AnimationController, ToastController } from '@ionic/angular';
import { DataStorageService } from '../services/data-storage.service';


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

  asistance = {
    fecha: "string",
    presente: false
  }

  constructor(public toastController: ToastController, private router: Router, private animationLogin: AnimationController,
              private dataStorageService: DataStorageService) {    

  }

  ngOnInit() {
  }

  registrar(){
    this.dataStorageService.registrarAsistencia(this.asistance.fecha, this.asistance.presente);
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
    else if(this.user.password.length < 8 ){
      this.showPassLenghtMin()
    }
    else if(this.user.password.length > 12 ){
      this.showPassLenghtMax()
    }
    else{
      this.router.navigate(['/landing'], navigationExtras);
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

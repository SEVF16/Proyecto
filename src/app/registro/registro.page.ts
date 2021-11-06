import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataStorageService } from '../services/data-storage.service';
import { IUsers } from '../interfaces/iusers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

user={
  userName:"",
  password:""  
} 

  constructor(private dataStorageService: DataStorageService, private toastController: ToastController, private router: Router) { }

  retro() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  registrar(){
    if(this.user.userName === "" || this.user.password === "" ){
      this.showToast("Debe ingresar un nombre de usuario y contraseña")
    } 
    else if(this.user.password.length < 8 ){
      this.showToast("La contraseña debe tener al menos 8 caracteres")
    } 
    else if(this.user.password.length > 16 ){
      this.showToast("La contraseña debe tener como maximo 16 caracteres")
    } 
    else { 
      this.dataStorageService.createUser(this.user.userName, this.user.password);
      this.router.navigate(['/home']);
    }
  } 

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}

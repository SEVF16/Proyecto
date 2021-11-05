import { Component} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GetapiService } from './getapi.service';
import { Animation, AnimationController, ToastController, NavController, AlertController} from '@ionic/angular';
import { DataStorageService } from '../services/data-storage.service';
import { imagen } from '../interfaces/iusers';




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
  

  num:any;
  info = [];

  asistance = {
    fecha: "string",
    presente: false
  }

  constructor(public toastController: ToastController, private router: Router, private animationLogin: AnimationController,
              private dataStorageService: DataStorageService, private api: GetapiService, public navCtrl: NavController,private alerta: AlertController) {    

  }


  ngOnInit() {

    this.api.getInfo().subscribe((data)=> {
    this.info=data;
    console.log(data)
  });

  this.api.getNum().subscribe((data)=> {
    this.num=data;
    console.log(data)
  });
  }
  /*getImang(){
    this.api.getImg().subscribe((data)=> {
      return this.imagenes=data;
    });

  }*/
  

 /* getInf(){
    this.api.getInfo().subscribe((data)=> {
      return this.info=data;
      
       
 
    });
  }*/

  async Info(){
    
    let miAlerta = await  this.alerta.create({
      header: 'Informacion',
      message: this.info[0].descripcion,
      buttons: ['Entendido']
    });
    miAlerta.present();
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

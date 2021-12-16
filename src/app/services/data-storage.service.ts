import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IAsistencia } from '../interfaces/iasistencia';
import { IUsers } from '../interfaces/iusers';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  asistencia: IAsistencia[]=[];
  users: IUsers[]=[];
  flag: boolean;

  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.Init();
    this.cargarUsers();
   }

   async Init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarUsers(){
    const regUsers = await this.storage.get('users');
    if(regUsers){
      this.users = regUsers;
    }
  }

  createUser(nombreUsuario: string, password: string) {
    const existe = this.users.find(u => u.userName === nombreUsuario);
    if(!existe) {
      this.users.unshift({userName : nombreUsuario, password: password});
      this._storage.set('users', this.users);
      this.presentToast("Usuario registrado exitosamente, ya puede iniciar sesión");
    } else {
      this.presentToast("Usuario ya existe");
    }
  }

  async register(registro: string){
    this.asistencia.unshift({registro: registro});
    this._storage.set('asistencia', this.asistencia);  
    await this.presentToast("Registro exitoso");
  }

  findUser(nombreUsuario: string, password: string){
    const existe = this.users.find(u => u.userName === nombreUsuario && u.password === password );
    if(!existe) {      
      this.presentToast("Usuario no registrado o contraseña incorrecta");
    } 
    return existe;    
  }

  async presentToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}

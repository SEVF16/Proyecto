import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { IAsistencia } from '../interfaces/iasistencia';
import { IUsers } from '../interfaces/iusers';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  asistencia: IAsistencia[]=[];
  users: IUsers[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController: ToastController) {
    this.Init();
    this.cargarAsistencia();
   }

   async Init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async cargarAsistencia(){
    const registroAsistencia = await this.storage.get('asistencia');
    if(registroAsistencia){
      this.asistencia = registroAsistencia;
    }
  }

  registrarAsistencia(fecha:string, presente:boolean){
    const exists = this.asistencia.find(a => a.strFecha === fecha);
    if(!exists){
      this.asistencia.unshift({strFecha: fecha, presente: true});
      this.storage.set('asistencia', this.asistencia);
      this.presentToast('Asistencia registrada')
    }else {
      this.presentToast(`Error: La asistencia para el día ${fecha} ha sido registrada anteriormente`)
    }
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
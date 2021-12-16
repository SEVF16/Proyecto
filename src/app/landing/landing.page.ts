import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GetseccionService } from './getseccion.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { Animation, AnimationController } from '@ionic/angular';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  userName: any;
  codigo: string;
  decodificado: any;  


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController,
     private api: GetseccionService, private barcodeScanner: BarcodeScanner, private dataStorage: DataStorageService) {

    
    this.activatedRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.userName = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.userName);
      }
    });    
   }
   seccion = [];

  ngOnInit() {
    this.api.getSeccion().subscribe((data)=> {
      this.seccion=data;
      console.log(data);
    });
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      
      this.codigo = barcodeData.text;
      console.log('Barcode data', this.codigo);      
     }).catch(err => {
         console.log('Error', err);
     });
    
     this.dataStorage.register(this.codigo);
  }


}

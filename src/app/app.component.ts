import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{
  constructor(private navCtrl: NavController) {}

  ngOnInit(): void{}

  Cerrar(){
    localStorage.removeItem('ingresado')
    this.navCtrl.navigateRoot('home');
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { GetseccionService } from './getseccion.service';
=======
import { Animation, AnimationController } from '@ionic/angular';
>>>>>>> 44dc3ea1d1d82ab4a334466ad2dca116a43fff23

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  userName: any;

<<<<<<< HEAD
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private api: GetseccionService ) {
=======
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
>>>>>>> 44dc3ea1d1d82ab4a334466ad2dca116a43fff23
    
    const animation: Animation = this.animationCtrl.create()
          .addElement(document.querySelector('#btn-asistencia'))
          .iterations(Infinity)
          .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
          .fromTo('opacity', '1', '0.2');

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

}

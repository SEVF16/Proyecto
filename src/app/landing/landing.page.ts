import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  userName: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private animationCtrl: AnimationController) {
    
    this.activatedRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.userName = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.userName);
      }
    });    
   }

  ngOnInit() {
  }

}

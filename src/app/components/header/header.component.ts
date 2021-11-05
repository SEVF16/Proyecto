import { Component, OnInit } from '@angular/core';
import { GetimgService } from '../getimg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    imagenes:any;

    ngOnInit():void{
        this.api.getImg().subscribe((data)=> {
            return this.imagenes=data;
          });
    
    }
  constructor(private api: GetimgService) {}

}
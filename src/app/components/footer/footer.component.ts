import { Component, OnInit } from '@angular/core';
import { GetimgService } from '../getimg.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private api: GetimgService) { }
  imagenes:any;
  ngOnInit() {this.api.getImg().subscribe((data)=> {
    return this.imagenes=data;
  });
}

}

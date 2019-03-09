import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitio-turistico',
  templateUrl: './sitio-turistico.page.html',
  styleUrls: ['./sitio-turistico.page.scss'],
})
export class SitioTuristicoPage implements OnInit {
  public sitios:boolean=false;
   constructor() { 
  } 
  ngOnInit() {
  }
  sitio(value){
    this.sitios=value;
  }


}

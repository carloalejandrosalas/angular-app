import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeroesService} from "../../../servicios/heroes.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
              private buscar:HeroesService) { }

  ngOnInit() {
  }


  buscarHeroe(termino:string){
    this.router.navigate(["/buscar",termino]);
  }

  verHeroe(idx:number){
    if(idx != 0){
      this.router.navigate(["/heroe",idx]);
      console.log(idx);
    }
  }
}

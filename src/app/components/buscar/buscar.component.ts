import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  heroes:any[]=[];
  termino:string ="";

  constructor(private activatedRoute:ActivatedRoute,private _heroeService:HeroesService) {
    
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params =>{
      // console.log(params['id']);

      this.termino  = params['termino'];
      this.heroes = this._heroeService.buscarHeroe(params['termino']);
       
      console.log(this.heroes);

    });
  }
}

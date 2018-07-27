import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-busqueda',
  templateUrl: './heroe-busqueda.component.html',
})
export class HeroeBusquedaComponent implements OnInit {
  heroes: Heroe[];
  termino: string;

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      console.log(this.termino);
    });
  }
}

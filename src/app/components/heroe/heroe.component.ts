import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe(params => {
      const idx: number = Number(params.id);
      this.heroe = this._heroesService.getHeroe(idx);
    });
  }
}

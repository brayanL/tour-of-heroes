import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = Hero[''];

  ngOnInit() {
    this.getHeroes();
  }
  /**
   * Get data from the Hero Service.
   * @return Observable<Hero[]>
  * */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error => console.log('Error Fetch Data:', error));
  }

  constructor(private heroService: HeroService) { }

}

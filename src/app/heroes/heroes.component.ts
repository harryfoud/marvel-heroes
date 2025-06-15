import { Component, inject } from '@angular/core';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [FormsModule, NgFor, AsyncPipe],
})
export class HeroesComponent {
  heroes: Observable<Hero[]> = of([]);
  selectedHero?: Hero;
  hero: any;
  private heroService = inject(HeroService);
  private messageService = inject(MessageService);
  private router = inject(Router)

  // constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.router.navigate(['/detail', hero.id])
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroesObservable();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  // }
}

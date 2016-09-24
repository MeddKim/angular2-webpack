import {Component,Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
   selector:'my-hero-detail',
   template:`
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
   `
})
export class HeroDetailComponent OnInit {

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ){}
  // 使用@Input 装饰器将hero声明为输入属性
  @Input()
  hero:Hero
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}

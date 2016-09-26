import {Component,Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
   selector:'my-hero-detail',
   templateUrl:'hero-detail.component.html',
   styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      console.log(id);
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
  hero:Hero;

  goBack(): void {
    window.history.back();
  }
}

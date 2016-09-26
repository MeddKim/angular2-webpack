import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})

//实现　Angular 的 ngOnInit 生命周期钩子　关键时间点：刚创建时、每次变化时，以及最终被销毁时。
export class HeroesComponent implements OnInit{

  ngOnInit():void{
    this.getHeroes();
  }

  heroes : Hero[];
  selectedHero: Hero;

  //避免使用 heroService = new HeroService()
  //在构造函数中添加服务，同时通过装饰器的providers告诉如何实例化服务
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

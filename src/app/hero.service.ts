import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  /**
   * 采用Promise，模拟异步获取数据
   */
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
